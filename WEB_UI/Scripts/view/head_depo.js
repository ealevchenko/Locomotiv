$(document).ready(function () {
    var LOC_API = new LOCOMOTIVE_API(), // Создадим класс api-locomotive
        mod_edit_action = $('#modal_edit_action').on('shown.bs.modal', function (e) {
            // do something...
        }),
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
                                mod_edit_action.modal('show');
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

    // Инициализация
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });


    table_locomotives.init();
    table_operations.init();
    table_locomotives.load();
});