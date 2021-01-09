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
                        },
                        {
                            text: 'Отправить в ремонт',
                            action: function (e, dt, node, config) {
                                confirm.open('Отправить?', 'Отправить тепловоз в ремонт?', function (result) {
                                    if (result) {
                                        // Выдать
                                        LOC_API.putOpenTabRepairs(table_locomotives.select_locomotive, function (result_open) {
                                            if (result_open !== null && result_open > 0) {
                                                // Ок, удалили строку
                                                table_locomotives.load();
                                            } else {
                                                // Error, ошибка.
                                                alert.out_error_message("Ошибка открытия записи «Тепловоз в ремонте»");
                                            }
                                        });
                                    }
                                });
                            },
                            enabled: false
                        },
                        {
                            extend: 'pageLength',
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
                    $('#header_title').text('ТЕПЛОВОЗЫ - (Парк: ' + count_locomotive + ' т/з, в работе: ' + count_work + ', в ремонте: ' + count_repair+').');

                });
            },
        };

    confirm.init();
    table_locomotives.init();
    table_locomotives.load();
});