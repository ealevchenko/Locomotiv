$(document).ready(function () {
    var LOC_API = new LOCOMOTIVE_API(), // Создадим класс api-locomotive
        panel = {
            modal: $('#modal_edit_action').modal({
                backdrop: 'static',
                keyboard: false,
                show:false
            }),
            forms: $('.needs-validation').on("submit", function (event) {
                event.preventDefault();
                //var s = this.checkValidity();
                // ref_unit
                if (panel.ref_unit[0].checkValidity() === false) {
                    panel.ref_unit.removeClass('is-valid').addClass('is-invalid');
                } else {
                    panel.ref_unit.removeClass('is-invalid').addClass('is-valid');
                }
                // ref_damage
                if (panel.ref_damage[0].checkValidity() === false) {
                    panel.ref_damage.removeClass('is-valid').addClass('is-invalid');
                } else {
                    panel.ref_damage.removeClass('is-invalid').addClass('is-valid');
                }
                // ref_operation
                if (panel.ref_operation[0].checkValidity() === false) {
                    panel.ref_operation.removeClass('is-valid').addClass('is-invalid');
                } else {
                    panel.ref_operation.removeClass('is-invalid').addClass('is-valid');
                }
                //human_hour
                if (panel.human_hour[0].checkValidity() === false) {
                    panel.human_hour.removeClass('is-valid').addClass('is-invalid');
                } else {
                    panel.human_hour.removeClass('is-invalid').addClass('is-valid');
                }
            }),
            ref_unit: $('select#ref_unit'),
            ref_damage: $('select#ref_damage'),
            ref_operation: $('select#ref_operation'),
            human_hour: $('input#human_hour'),
            all_obj: null,
            init: function () {
                panel.all_obj = $([])
                    .add(panel.ref_unit)
                    .add(panel.ref_damage)
                    .add(panel.ref_operation)
                    .add(panel.human_hour);
                // настроим выбор агрегатов
                panel.ref_unit = cd_initSelect(
                    panel.ref_unit,
                    list_unit,
                    function (data) {
                        var option = { value: data.idUnit, text: data.Unit, disabled: false };
                        return option;
                    },
                    -1,
                    function (event, ui) {
                        event.preventDefault();
                        // Обработать выбор
                        var id = Number($(this).val());
                        panel.select(id, Number(panel.ref_damage.val()), Number(panel.ref_operation.val()));
                    },
                    null);
                // настроим выбор неисправностей
                panel.ref_damage = cd_initSelect(
                    panel.ref_damage,
                    list_damage,
                    function (data) {
                        var option = { value: data.idDamage, text: data.Damage, disabled: false };
                        return option;
                    },
                    -1,
                    function (event, ui) {
                        event.preventDefault();
                        // Обработать выбор
                        var id = Number($(this).val());
                        panel.select(Number(panel.ref_unit.val()), id, Number(panel.ref_operation.val()));
                    },
                    null);
                // настроим выбор операций
                panel.ref_operation = cd_initSelect(
                    panel.ref_operation,
                    list_operation,
                    function (data) {
                        var option = { value: data.idOperation, text: data.Operation, disabled: false };
                        return option;
                    },
                    -1,
                    function (event, ui) {
                        event.preventDefault();
                        // Обработать выбор
                        var id = Number($(this).val());
                        panel.select(Number(panel.ref_unit.val()), Number(panel.ref_damage.val()), id);
                    },
                    null);

                panel.modal.on('shown.bs.modal', function (e) {

                });
            },
            open: function () {
                panel.all_obj.removeClass('is-valid is-invalid');
                panel.forms.removeClass('was-validated');
                panel.modal.modal('show');
            },
            // выбран агрегат
            select: function (id_unit, id_damage, id_operation) {
                var link = list_lnk_udo;
                if (id_unit > 0) {
                    link = link.filter(function (i) {
                        return (i.IDUnit === id_unit);
                    });
                    // Скорректируем (если по агрегату нет правила тогда показать все)
                    //link = links && links.length > 0 ? links : list_lnk_udo;
                }
                if (id_damage > 0) {
                    link = link.filter(function (i) {
                        return (i.IDDamage === id_damage);
                    });
                }
                if (id_operation > 0) {
                    link = link.filter(function (i) {
                        return (i.IDOperation === id_operation);
                    });
                }

                panel.update_unit(id_unit, link);

                panel.update_damage(id_damage, link);

                panel.update_operation(id_operation, link);

                if (link && link.length === 1 && id_unit > 0 && id_damage > 0 && id_operation > 0) {
                    panel.human_hour.val(Number(link[0].HumanHour));
                } else {
                    panel.human_hour.val('');
                }
            },
            //
            update_unit: function (id, link) {
                var list = [];
                var id_exist = false;
                if (id >0 && link && link.length > 0) {
                    $.each(link, function (i, el) {
                        // Добавляем только уникальные
                        var idUnit = list.find(function (o) {
                            return o.idUnit === el.RefUnit.idUnit;
                        });
                        if (!idUnit) {
                            list.push(el.RefUnit);
                            if (el.RefUnit.idUnit === id) {
                                id_exist = true;
                            }
                        }
                    });
                } else {
                    id_exist = true;
                    list = list_unit;
                }

                panel.ref_unit = cd_updateSelect(
                    panel.ref_unit,
                    list,
                    function (data) {
                        var option = { value: data.idUnit, text: data.Unit, disabled: false };
                        return option;
                    },
                    id_exist ? id>0 ? id: -1 : -1,
                    null);
            },
            //
            update_damage: function (id, link) {
                var list = [];
                var id_exist = false;
                $.each(link, function (i, el) {
                    // Добавляем только уникальные
                    var idRepair = list.find(function (o) {
                        return o.idDamage === el.RefDamage.idDamage;
                    });
                    if (!idRepair) {
                        list.push(el.RefDamage);
                        if (el.RefDamage.idDamage === id) {
                            id_exist = true;
                        }
                    }
                });
                panel.ref_damage = cd_updateSelect(
                    panel.ref_damage,
                    list,
                    function (data) {
                        var option = { value: data.idDamage, text: data.Damage, disabled: false };
                        return option;
                    },
                    id_exist ? id : -1,
                    null);
            },
            //
            update_operation: function (id, link) {
                var list = [];
                var id_exist = false;
                $.each(link, function (i, el) {
                    // Добавляем только уникальные
                    var IDOperation = list.find(function (o) {
                        return o.idOperation === el.RefOperation.idOperation;
                    });
                    if (!IDOperation) {
                        list.push(el.RefOperation);
                        if (el.RefOperation.idOperation === id) {
                            id_exist = true;
                        }
                    }
                });
                panel.ref_operation = cd_updateSelect(
                    panel.ref_operation,
                    list,
                    function (data) {
                        var option = { value: data.idOperation, text: data.Operation, disabled: false };
                        return option;
                    },
                    id_exist ? id : -1,
                    null);
            },
        },
        list_unit = [],
        list_damage = [],
        list_operation = [],
        list_lnk_udo = [],
        loadReference = function (callback) {
            LockScreen('Загрузка справочников...');
            var count = 4;
            // Загрузим Units
            LOC_API.getRefUnit(function (result_unit) {
                list_unit = result_unit;
                count -= 1;
                if (count === 0) {
                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            });
            // Загрузим неисправности
            LOC_API.getRefDamage(function (result_damage) {
                list_damage = result_damage;
                count -= 1;
                if (count === 0) {
                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            });
            // Загрузим операции
            LOC_API.getRefOperation(function (result_operation) {
                list_operation = result_operation;
                count -= 1;
                if (count === 0) {
                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            });
            // Загрузим привязки агрегатов к неисправностям и операциям
            LOC_API.getLnkUDO(function (result_lnk_udo) {
                list_lnk_udo = result_lnk_udo;
                count -= 1;
                if (count === 0) {
                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            });
        },
        table_locomotives = {
            html_table: $('#list-locomotives'),
            obj: null,
            list: null,
            // Инициализировать таблицу
            init: function () {
                table_locomotives.obj = this.html_table.DataTable({
                    //"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "paging": false,
                    "searching": false,
                    "ordering": true,
                    "info": false,
                    select: {
                        style: "single",
                        toggleable: false,
                    },
                    "autoWidth": true,
                    //"filter": true,
                    //"scrollY": "600px",
                    sScrollX: "100%",
                    scrollX: true,
                    //"filter": true,
                    //"scrollY": "600px",
                    language: language_table(),
                    jQueryUI: false,
                    "createdRow": function (row, data, index) {
                        $(row).attr('id', data.idRepair);
                    },
                    columns: [
                        {
                            data: function (row, type, val, meta) {
                                return row.RefNumLoko.NumLoko;
                            },
                            title: 'Тип и номер тепловоза', width: "100px", orderable: true, searchable: false
                        },
                        {
                            data: function (row, type, val, meta) {
                                return row.DateTimeStartRepair ? row.DateTimeStartRepair.replace(/T/g, ' ') : null;
                            },
                            title: 'Дата захода в ДЕПО', width: "150px", orderable: true, searchable: false
                        },
                        {
                            data: function (row, type, val, meta) {
                                // Вычислим продолжительность
                                var diffhours = 0;
                                var start = row.DateTimeStartRepair ? moment(row.DateTimeStartRepair) : null;
                                var stop = moment();
                                if (start && stop) {
                                    diffhours = stop.diff(start, 'hours');
                                }
                                return diffhours;
                            },
                            title: 'Продолжительность ремонта', width: "150px", orderable: true, searchable: false
                        },
                    ],
                    dom: 'Bfrtip',
                    stateSave: false,
                    buttons: [
                        {
                            text: 'Буфер',
                            extend: 'copyHtml5',
                        },
                        {
                            text: 'Excel',
                            extend: 'excelHtml5',
                            sheetName: 'Тепловозы в ДЕПО',
                            messageTop: function () {
                                return '';
                            }
                        },
                        {
                            text: 'Выполнить работы',
                            action: function (e, dt, node, config) {

                            },
                            enabled: false
                        },
                        {
                            text: 'Выдать тепловоз',
                            action: function (e, dt, node, config) {

                            },
                            enabled: false
                        }
                    ],
                }).on('select', function (e, dt, type, indexes) {
                    var index_way = indexes && indexes.length > 0 ? indexes[0] : null;
                    //// получим путь
                    var rowData = table_locomotives.obj.rows(indexes).data().toArray();
                    var id = rowData && rowData.length > 0 ? rowData[0].idRepair : null;
                    table_operations.load(id);
                });
            },
            // Показать таблицу с данными
            view: function (data) {
                table_locomotives.obj.clear();
                table_locomotives.obj.rows.add(data);
                table_locomotives.obj.draw();
                LockScreenOff();
            },
            // Загрузить данные
            load: function () {
                LockScreen('Мы обрабатываем ваш запрос...');
                LOC_API.getTabRepairs(function (data) {
                    data = data.filter(function (i) {
                        return i.DateTimeEndRepair === null;
                    });
                    table_locomotives.list = data;
                    table_locomotives.view(data);
                });
            },
        },
        table_operations = {
            html_table: $('#list-operations'),
            obj: null,
            list: null,
            // Инициализировать таблицу
            init: function () {
                table_operations.obj = this.html_table.DataTable({
                    //"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "paging": false,
                    "searching": false,
                    "ordering": true,
                    "info": false,
                    select: {
                        style: "single",
                        toggleable: false,
                    },
                    "autoWidth": true,
                    //"filter": true,
                    //"scrollY": "600px",
                    sScrollX: "100%",
                    scrollX: true,
                    //"filter": true,
                    //"scrollY": "600px",
                    language: language_table(),
                    jQueryUI: false,
                    "createdRow": function (row, data, index) {
                        $(row).attr('id', data.idAction);
                    },
                    columns: [
                        {
                            data: function (row, type, val, meta) {
                                return row.DateActiion ? row.DateActiion.replace(/T/g, ' ') : null;
                            },
                            title: 'Дата операции', width: "150px", orderable: true, searchable: false
                        },
                    ],
                    dom: 'Bfrtip',
                    stateSave: false,
                    buttons: [
                        {
                            text: 'Буфер',
                            extend: 'copyHtml5',
                        },
                        {
                            text: 'Excel',
                            extend: 'excelHtml5',
                            sheetName: 'Тепловозы в ДЕПО',
                            messageTop: function () {
                                return '';
                            }
                        },
                        {
                            text: 'Добавить',
                            action: function (e, dt, node, config) {
                                //mod_edit_action.modal('show');
                                panel.open();
                            },
                            enabled: true
                        }

                    ],
                });
            },
            // Показать таблицу с данными
            view: function (data) {
                table_operations.obj.clear();
                table_operations.obj.rows.add(data);
                table_operations.obj.draw();
                LockScreenOff();
            },
            // Загрузить данные
            load: function (id) {
                LockScreen('Мы обрабатываем ваш запрос...');
                LOC_API.getTabActionsOfID(id, function (data) {
                    table_operations.list = data;
                    table_operations.view(data);
                });
            },
        };

    //// Инициализация
    //// Fetch all the forms we want to apply custom Bootstrap validation styles to
    //var forms = $('.needs-validation')
    //    .on("submit", function (event) {
    //        event.preventDefault();
    //    });
    //// Loop over them and prevent submission
    //var validation = Array.prototype.filter.call(forms, function (form) {
    //    form.addEventListener('submit', function (event) {
    //        if (form.checkValidity() === false) {
    //            event.preventDefault();
    //            event.stopPropagation();
    //        }
    //        form.classList.add('was-validated');
    //    }, false);
    //});
    // Загрузим справочники
    loadReference(function () {
        panel.init();
        table_locomotives.init();
        table_operations.init();
        table_locomotives.load();
    });


});