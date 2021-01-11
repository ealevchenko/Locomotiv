$(document).ready(function () {
    var LOC_API = new LOCOMOTIVE_API(), // Создадим класс api-locomotive
        date_curent = moment().set({ 'hour': 0, 'minute': 0, 'second': 0, 'millisecond': 0 }),
        date_start = null,
        date_stop = null,
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
        table_locomotives = {
            html_table: $('#list-locomotives'),
            obj: null,
            list: null,
            select_locomotive: null,                // Выбраная строка локомотива
            id_locomotive_repair: null,             // Выбраная id ремонта локомотива
            // Инициализировать таблицу
            init: function () {
                table_locomotives.obj = this.html_table.DataTable({
                    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "pageLength": 10,
                    "paging": true,
                    "searching": true,
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
                        $(row).attr('id', data.idNumLoko);
                    },
                    columns: [
                        {
                            data: function (row, type, val, meta) {
                                return row.NumLoko;
                            },
                            title: 'Тип и номер тепловоза', width: "100px", orderable: true, searchable: false
                        },
                        {
                            data: function (row, type, val, meta) {
                                return row.idRepair !== null ? 'ремонт' : 'эксплуатация';
                            },
                            title: 'Статус', width: "150px", orderable: true, searchable: false
                        },
                        {
                            data: function (row, type, val, meta) {
                                return row.repair;
                            },
                            title: 'Продол. ремонта (ч)', width: "100px", orderable: true, searchable: false
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
                        }
                    ],
                }).on('select', function (e, dt, type, indexes) {
                    var rowData = table_locomotives.obj.rows(indexes).data().toArray();
                    var id = rowData && rowData.length > 0 ? rowData[0].idNumLoko : null;       // id локомотива
                    var idRepair = rowData && rowData.length > 0 ? rowData[0].idRepair : null;  // id если в ремонте
                    table_locomotives.select_locomotive = id; // Запомним выбраную строку
                    table_locomotives.id_locomotive_repair = idRepair; // Запомним выбраную строку
                    // Обновим кнопку добавить
                    if (table_locomotives.select_locomotive > 0 && table_locomotives.id_locomotive_repair === null) {
                        table_locomotives.obj.button(2).enable(true);
                    } else {
                        table_locomotives.obj.button(2).enable(false);
                    }
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
                LOC_API.getViewStatusLocomotive(function (data) {
                    table_locomotives.list = data;
                    var count_locomotive = 0;
                    var count_work = 0;
                    var count_repair = 0;
                    if (data !== null && data.length > 0) {
                        count_locomotive = data.length;
                        table_locomotives.view(data);
                        //в работе
                        $.each(data, function (i, el) {
                            if (el.idRepair === null) {
                                count_work++;
                            } else {
                                count_repair++;
                            }
                        });
                    } else {
                        table_locomotives.view([]);
                    }
                    $('#header_title').text('ТЕПЛОВОЗЫ - (Парк: ' + count_locomotive + ' т/з, в работе: ' + count_work + ', в ремонте: ' + count_repair + ').');

                });
            },
        },
        reports = {
            select_report: $('select#select_report'),
            select_object: $('select#select_object'),
            span_range_date: $('span#select-range-date'),
            input_date: $('input#date'),
            input_data_start: $('input#date-start'),
            input_data_stop: $('input#date-stop'),
            obj_date_range: null,
            list_object: [],
            init: function () {
                // Настроим выбор отчета
                reports.select_report = cd_initSelect(
                    reports.select_report,
                    [{ value: 1, text: "Тепловозу" }, { value: 2, text: "Агрегату" }, { value: 2, text: "Неисправности" }],
                    null,
                    -1,
                    function (event, ui) {
                        event.preventDefault();
                        // Обработать выбор
                        // Обработать выбор
                        var id = Number($(this).val());
                        reports.list_object = []
                        switch (id) {
                            case 1: {
                                $.each(list_locom, function (i, el) {
                                    reports.list_object.push({ value: el.idNumLoko, text: el.NumLoko, disabled: false });
                                });
                                break;
                            }
                            case 2: {
                                $.each(list_unit, function (i, el) {
                                    reports.list_object.push({ value: el.idUnit, text: el.Unit, disabled: false });
                                });
                                break;
                            }
                            case 3: {
                                $.each(list_damage, function (i, el) {
                                    reports.list_object.push({ value: el.idDamage, text: el.Damage, disabled: false });
                                });
                                break;
                            }
                            default: {
                                break;
                            }
                        }
                        // Отобразим объекты
                        reports.select_object = cd_updateSelect(
                            reports.select_object,
                            reports.list_object,
                            null,
                            -1,
                            null);



                    },
                    null);
                // Настроим выбор объекта
                reports.select_object = cd_initSelect(
                    reports.select_object,
                    [],
                    null,
                    -1,
                    function (event, ui) {
                        event.preventDefault();
                        // Обработать выбор смены

                    },
                    null);
                // Настроим время
                // настроим компонент выбора времени
                reports.obj_date_range = reports.span_range_date.dateRangePicker(
                    {
                        language: 'ru',
                        format: 'DD.MM.YYYY HH:mm',
                        separator: '-',
                        autoClose: false,
                        time: {
                            enabled: true
                        },
                        setValue: function (s, s1, s2) {
                            reports.input_data_start.val(s1);
                            reports.input_data_stop.val(s2);

                        }
                    }).
                    bind('datepicker-change', function (evt, obj) {
                        date_start = obj.date1;
                        date_stop = obj.date2;
                    })
                    .bind('datepicker-closed', function () {
                        //table_report.viewTable(true);

                    });
                // Выставим время
                date_start = moment(date_curent).set({ 'hour': 0, 'minute': 0, 'second': 0, 'millisecond': 0 })._d;
                date_stop = moment(date_curent).set({ 'hour': 23, 'minute': 59, 'second': 59, 'millisecond': 0 })._d;
                reports.obj_date_range.data('dateRangePicker').setDateRange(moment(date_start).format('DD.MM.YYYY HH:mm:'), moment(date_stop).format('DD.MM.YYYY HH:mm:'), true);
            },
        },
        // Справочники
        list_locom = [],
        list_unit = [],
        list_damage = [],
        // Загрузка справочников
        loadReference = function (callback) {
            LockScreen('Загрузка справочников...');
            var count = 3;

            // Загрузим Units
            LOC_API.getRefNumLoko(function (result_locom) {
                list_locom = result_locom;
                count -= 1;
                if (count === 0) {
                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            });
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

        };

    // Загрузим справочники
    loadReference(function () {
        LockScreenOff();
        confirm.init();
        reports.init();
        //table_locomotives.init();
        //table_locomotives.load();
    });


});