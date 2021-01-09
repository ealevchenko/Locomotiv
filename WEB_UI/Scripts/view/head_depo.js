$(document).ready(function () {
    var LOC_API = new LOCOMOTIVE_API(), // Создадим класс api-locomotive
        // Панель подтверждения операций
        confirm = {
            callback: null,
            result: false,
            modal: $('#modal_confirm').modal({
                backdrop: 'static',
                keyboard: false,
                show: false
            }),
            bt_ok: $('button#ok').on("click", function (event) {
                confirm.result = true;
                confirm.modal.modal('hide');
            }),
            //forms: $('.needs-validation').on("submit", function (event) {
            //    event.preventDefault();
            //    confirm.result = true;
            //}),
            init: function () {
                confirm.modal.on('hidden.bs.modal', function (e) {
                    if (typeof confirm.callback === 'function') {
                        confirm.callback(confirm.result);
                    }
                });
            },
            open: function (title, message, callback) {
                $('#title_confirm').text(title);
                $('#message_confirm').text(message);
                confirm.callback = callback;
                confirm.modal.modal('show');
            },

        },
        // Панель правка работ по тепловозу
        panel = {
            alert: null,
            modal: $('#modal_edit_action').modal({
                backdrop: 'static',
                keyboard: false,
                show: false
            }),
            forms: $('.needs-validation').on("submit", function (event) {
                event.preventDefault();
                alert.clear_message();
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
                if (this.checkValidity() === false) {
                    alert.out_error_message("Ошибка заполнения формы!");
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    // Ок, сохраним
                    if (panel.id === null) {
                        // Добавить
                        if (panel.select_id_link_udo !== null) {
                            var value = {
                                idAction: 0,
                                IDRepair: table_locomotives.select_id_repair,
                                IDLnkUDO: panel.select_id_link_udo,
                                DateActiion: moment(), // текущая дата
                                HRresourse: get_input_number_value(panel.human_hour)
                            }
                            // Добавим запись
                            LOC_API.postTabActions(value, function (result_add) {
                                if (result_add !== null && result_add > 0) {
                                    // Ок, добавили строку
                                    panel.modal.modal('hide'); // Закроем
                                    table_operations.load(table_locomotives.select_id_repair);
                                } else {
                                    // Error, ошибка.
                                    alert.out_error_message("Ошибка добавления записи «Работа по тепловозу»");
                                }
                            });
                        } else {
                            // Ошибка, нет выбраной строки
                            alert.out_warning_message("Привязка агрегат/неисправность/работа не соответсвует справочнику!");
                        }
                    } else {
                        // Править
                        if (panel.select_action !== null) {
                            if (panel.select_id_link_udo !== null) {
                                // Выбрано правило
                                var value = {
                                    idAction: panel.select_action.idAction,
                                    IDRepair: panel.select_action.IDRepair,
                                    IDLnkUDO: panel.select_id_link_udo,
                                    DateActiion: panel.select_action.DateActiion, // текущая дата
                                    HRresourse: get_input_number_value(panel.human_hour)
                                }
                                // Добавим запись
                                LOC_API.putTabActions(value, function (result_upd) {
                                    if (result_upd !== null && result_upd > 0) {
                                        // Ок, обновили строку
                                        panel.modal.modal('hide'); // Закроем
                                        table_operations.load(table_locomotives.select_id_repair);
                                    } else {
                                        // Error, ошибка.
                                        alert.out_error_message("Ошибка обновления записи «Работа по тепловозу»");
                                    }
                                });
                            } else {
                                // Ошибка, нет выбраной строки
                                alert.out_warning_message("Привязка агрегат/неисправность/работа не соответсвует справочнику!");
                            }

                        } else {
                            // Ошибка, нет выбраной строки
                            alert.out_error_message("Ошибка обновления записи «Работа по тепловозу»");
                        }

                    }



                }
            }),
            id: null,                                       // id-работы переданое в окно правки
            select_action: null,                            // Выбранная строека работа по тепловозу
            select_id_link_udo: null,                       // Выбраное id - работы в окне
            ref_unit: $('select#ref_unit'),
            ref_damage: $('select#ref_damage'),
            ref_operation: $('select#ref_operation'),
            human_hour: $('input#human_hour'),
            all_obj: null,
            init: function () {
                alert = new ALERT($('div#modal-alert')),// Создадим класс ALERTG
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
            open: function (id) {
                panel.id = id;
                alert.clear_message();
                panel.all_obj.removeClass('is-valid is-invalid');
                panel.forms.removeClass('was-validated');
                if (panel.id !== null) {
                    // Править
                    LOC_API.getTabActionsOfID(panel.id, function (result_action) {
                        panel.select_action = result_action;
                        if (result_action !== null) {
                            // Найти привязку
                            panel.human_hour.val(result_action.HRresourse);
                            LOC_API.getLnkUDOOfID(result_action.IDLnkUDO, function (result_link) {
                                if (result_link !== null) {
                                    panel.select(result_link.IDUnit, result_link.IDDamage, result_link.IDOperation);
                                    panel.human_hour.val(result_action.HRresourse); // Вставим в конце так как заполняется шаблон в начале
                                    // Открыть окно
                                    panel.modal.modal('show');
                                } else {
                                    // Нет привязки
                                }
                            });

                        } else {
                            // Нет работы
                        }
                    });
                } else {
                    // Добавить
                    panel.ref_unit.val('');
                    panel.ref_damage.val('');
                    panel.ref_operation.val('');
                    panel.human_hour.val('');
                    panel.select(0, 0, 0);
                    // Открыть окно
                    panel.modal.modal('show');
                }

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
                    panel.select_id_link_udo = link[0].idLinkUDO; // id работы выброаное в окне
                } else {
                    panel.human_hour.val('');
                    panel.select_id_link_udo = null; // id работы сброшено
                }
            },
            //
            update_unit: function (id, link) {
                var list = [];
                var id_exist = false;
                if (id > 0 && link && link.length > 0) {
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
                    id_exist ? id > 0 ? id : -1 : -1,
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
        // Справочники
        list_unit = [],
        list_damage = [],
        list_operation = [],
        list_lnk_udo = [],
        // Загрузка справочников
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
        // Таблица список локомотивов в ремонте
        table_locomotives = {
            html_table: $('#list-locomotives'),
            obj: null,
            list: null,
            select_id_repair: null,             // Выбраная строка локомотива в ремонте
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
                            text: 'Выдать тепловоз',
                            action: function (e, dt, node, config) {
                                confirm.open('Выдать?', 'Вывести тепловоз из ремонта?', function (result) {
                                    if (result) {
                                        // Выдать
                                        LOC_API.putCloseTabRepairs(table_locomotives.select_id_repair, function (result_close) {
                                            if (result_close !== null && result_close > 0) {
                                                // Ок, удалили строку
                                                // сбросим выбор и кнопки
                                                table_locomotives.select_id_repair = null;
                                                table_locomotives.obj.button(2).enable(false);
                                                table_operations.select_id_action = null;
                                                table_operations.obj.button(3).enable(false);
                                                table_operations.obj.button(4).enable(false);
                                                //panel.modal.modal('hide'); // Закроем
                                                table_locomotives.load();
                                            } else {
                                                // Error, ошибка.
                                                alert.out_error_message("Ошибка закрытия записи «Тепловоз в ремонте»");
                                            }
                                        });
                                    }
                                });
                            },
                            enabled: false
                        }
                    ],
                }).on('select', function (e, dt, type, indexes) {
                    var rowData = table_locomotives.obj.rows(indexes).data().toArray();
                    var id = rowData && rowData.length > 0 ? rowData[0].idRepair : null;
                    table_locomotives.select_id_repair = id; // Запомним выбраную строку
                    // сбросим выбор и кнопки
                    table_operations.select_id_action = null;
                    table_operations.obj.button(3).enable(false);
                    table_operations.obj.button(4).enable(false);
                    // Обновим кнопку добавить
                    if (table_locomotives.select_id_repair > 0) {
                        table_operations.obj.button(2).enable(true);
                        table_locomotives.obj.button(2).enable(true);
                    } else {
                        table_operations.obj.button(2).enable(false);
                        table_locomotives.obj.button(2).enable(false);
                    }
                    table_operations.load(table_locomotives.select_id_repair);
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
        // Таблица список работ по локомотивову в ремонте
        table_operations = {
            html_table: $('#list-operations'),
            obj: null,
            list: null,
            select_id_action: null, // Выбраная работа
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
                        //toggleable: false,
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
                        {
                            data: function (row, type, val, meta) {
                                var LnkUDO = row.LnkUDO ? row.LnkUDO : null;
                                var RefUnit = LnkUDO && LnkUDO.RefUnit ? LnkUDO.RefUnit : null;
                                return RefUnit ? RefUnit.Unit : null;
                            },
                            title: 'Агрегат', width: "150px", orderable: true, searchable: false
                        },
                        {
                            data: function (row, type, val, meta) {
                                var LnkUDO = row.LnkUDO ? row.LnkUDO : null;
                                var RefDamage = LnkUDO && LnkUDO.RefDamage ? LnkUDO.RefDamage : null;
                                return RefDamage ? RefDamage.Damage : null;
                            },
                            title: 'Неисправность', width: "150px", orderable: true, searchable: false
                        },
                        {
                            data: function (row, type, val, meta) {
                                var LnkUDO = row.LnkUDO ? row.LnkUDO : null;
                                var RefOperation = LnkUDO && LnkUDO.RefOperation ? LnkUDO.RefOperation : null;
                                return RefOperation ? RefOperation.Operation : null;
                            },
                            title: 'Операция', width: "150px", orderable: true, searchable: false
                        },
                        {
                            data: function (row, type, val, meta) {
                                return row.HRresourse;
                            },
                            title: 'Трудозатраты (ч/час)', width: "150px", orderable: true, searchable: false
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
                                panel.open(null);
                            },
                            enabled: false
                        },
                        {
                            text: 'Править',
                            action: function (e, dt, node, config) {
                                if (table_operations.select_id_action > 0) {
                                    panel.open(table_operations.select_id_action);
                                }

                            },
                            enabled: false
                        },
                        {
                            text: 'Удалить',
                            action: function (e, dt, node, config) {
                                confirm.open('Удалить?', 'Вы действительно хотите удалить строку?', function (result) {
                                    if (result) {
                                        // Удалить
                                        LOC_API.deleteTabActions(table_operations.select_id_action, function (result_del) {
                                            if (result_del !== null && result_del > 0) {
                                                // Ок, удалили строку
                                                // сбросим выбор и кнопки
                                                table_operations.select_id_action = null;
                                                table_operations.obj.button(3).enable(false);
                                                table_operations.obj.button(4).enable(false);
                                                panel.modal.modal('hide'); // Закроем
                                                table_operations.load(table_locomotives.select_id_repair);
                                            } else {
                                                // Error, ошибка.
                                                alert.out_error_message("Ошибка удаления записи «Работа по тепловозу»");
                                            }
                                        });
                                    }
                                });
                            },
                            enabled: false
                        }

                    ],
                }).on('select', function (e, dt, type, indexes) {
                    var rowData = table_operations.obj.rows(indexes).data().toArray();
                    var id = rowData && rowData.length > 0 ? rowData[0].idAction : null;
                    table_operations.select_id_action = id; // Запомним выбраную строку
                    // Обновим кнопку добавить
                    if (table_operations.select_id_action > 0) {
                        table_operations.obj.button(3).enable(true);
                        table_operations.obj.button(4).enable(true);
                    } else {
                        table_operations.obj.button(3).enable(false);
                        table_operations.obj.button(4).enable(false);
                    }
                }).on('deselect', function (e, dt, type, indexes) {
                    table_operations.select_id_action = null; // Запомним выбраную строку
                    table_operations.obj.button(3).enable(false);
                    table_operations.obj.button(4).enable(false);
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
                LOC_API.getTabActionsOfIDRepair(id, function (data) {
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
        confirm.init();
        panel.init();
        table_locomotives.init();
        table_operations.init();
        table_locomotives.load();
    });


});