//Русификатор таблицы
var language_table = function () {
    return {
        "decimal": "",
        "emptyTable": "Нет данных в таблице",
        "info": "Отображение _START_ по _END_ из _TOTAL_ записей",
        "infoEmpty": "Отображение 0 to 0 of 0 записей",
        "infoFiltered": "(отфильтровано из _MAX_ всего записей)",
        "infoPostFix": "",
        "thousands": ".",
        "lengthMenu": "Показать  _MENU_ записей",
        "loadingRecords": "Загрузка...",
        "processing": "Обработка ...",
        "search": "Найти:",
        "zeroRecords": "Не найдено совпадающих записей",
        "paginate": {
            "first": "Первая",
            "last": "Последняя",
            "next": "Следующая",
            "previous": "Предыдущая"
        },
        "aria": {
            "sortAscending": ": активировать сортировку столбца по возрастанию",
            "sortDescending": ": активировать сортировку колонки по убыванию"
        }
    }
};

//==============================================================================================
/* ----------------------------------------------------------
    Блокировка экрана
-------------------------------------------------------------*/
// Блокировать с текстом
var LockScreen = function (message) {
    var lock = document.getElementById('lockPanel');
    if (lock)
        lock.className = 'LockOn';
    lock.innerHTML = message;
};
// Разблокировать 
var LockScreenOff = function () {
    var lock = document.getElementById('lockPanel');
    if (lock)
        lock.className = 'LockOff';
};
//==============================================================================================
/* ----------------------------------------------------------
    Компоненты UI
-------------------------------------------------------------*/
// Инициализация компонента Select 
var cd_initSelect = function (obj_select, data, callback_option, value_select, event_change, exceptions_value) {
    var options = [];
    // Проверка выбор неопределен
    //if (value_select === -1) {
        options.push("<option value=''>Выберите...</option>");
    //}
    if (data !== null) {
        for (i = 0, count_data_select = data.length; i < count_data_select; i++) {
            var option = { value: data[i].value, text: data[i].text, disabled: data[i].disabled };
            // Преобразовать формат
            if (typeof callback_option === 'function') {
                option = callback_option(data[i]);
            }
            if (option !== null) {
                if (exceptions_value !== null) {
                    if (exceptions_value.indexOf(option.value) === -1) {
                        options.push("<option value='" + option.value + "' " + (option.disabled ? "disabled='disabled'" : "") + ">" + option.text + "</option>");
                    }
                } else {
                    options.push("<option value='" + option.value + "' " + (option.disabled ? "disabled='disabled'" : "") + ">" + option.text + "</option>");
                }
            }
        }
    }
    obj_select.empty();
    obj_select.append(options.join("")).val(value_select >=0 ? value_select: '');
    obj_select.on("change", event_change);
    return obj_select;
};

var cd_updateSelect = function (obj_select, data, callback_option, value_select, exceptions_value) {
    var options = [];
    // Проверка выбор неопределен
    //if (value_select === -1) {
        options.push("<option value=''>Выберите...</option>");
    //}
    if (data !== null) {
        for (i = 0, count_data_select = data.length; i < count_data_select; i++) {
            var option = { value: data[i].value, text: data[i].text, disabled: data[i].disabled };
            // Преобразовать формат
            if (typeof callback_option === 'function') {
                option = callback_option(data[i]);
            }
            if (option !== null) {
                if (exceptions_value !== null) {
                    if (exceptions_value.indexOf(option.value) === -1) {
                        options.push("<option value='" + option.value + "' " + (option.disabled ? "disabled='disabled'" : "") + ">" + option.text + "</option>");
                    }
                } else {
                    options.push("<option value='" + option.value + "' " + (option.disabled ? "disabled='disabled'" : "") + ">" + option.text + "</option>");
                }
            }
        }
    }
    obj_select.empty();
    obj_select.append(options.join("")).val(value_select >= 0 ? value_select : '');
    return obj_select;
};
//
var cd_initDateTimeRangePicker = function (obj_select, property, close_function) {
    var dtrp = {
        obj: null,
        lang: 'ru',
        time: true,
        select_date: null,
        init: function (obj_select, property, close_function) {
            if (property.lang == null) {
                dtrp.lang = property.lang;
            }
            if (property.time !== null) {
                dtrp.time = property.time;
            }

            dtrp.obj = obj_select.dateRangePicker(
                {
                    language: dtrp.lang,
                    format: dtrp.lang === 'ru' ? 'DD.MM.YYYY' + (dtrp.time ? ' HH:mm' : '') : 'DD\MM\YYYY' + (dtrp.time ? ' HH:mm' : ''),
                    autoClose: false,
                    singleDate: true,
                    singleMonth: true,
                    showShortcuts: false,
                    time: {
                        enabled: dtrp.time
                    },
                }).
                bind('datepicker-change', function (evt, obj) {
                    dtrp.select_date = obj.date1;
                }).bind('datepicker-closed', function () {
                    //dtrp.setDateTime(dtrp.select_date); // Иначе дату не возможно убрать
                    // Преобразовать формат
                    if (typeof close_function === 'function') {
                        close_function(dtrp.select_date);
                    }
                });
        },
        getDateTime: function () {
            return dtrp.select_date;
        },
        setDateTime: function (datetime) {
            var e = dtrp.obj.attr("disabled");
            if (e === "disabled") {
                dtrp.obj.prop("disabled", false);
            }
            if (datetime !== null) {
                dtrp.obj.data('dateRangePicker').setDateRange(moment(datetime).format('DD.MM.YYYY' + (dtrp.time ? ' HH:mm' : '')), moment(datetime).format('DD.MM.YYYY' + (dtrp.time ? ' HH:mm' : '')), true);
            } else {
                // Установить текущую дату и время
                dtrp.obj.data('dateRangePicker').setDateRange(moment().format('DD.MM.YYYY' + (dtrp.time ? ' HH:mm' : '')), moment().format('DD.MM.YYYY' + (dtrp.time ? ' HH:mm' : '')), true);
                dtrp.obj.data('dateRangePicker').clear();
                dtrp.select_date = null; // чтобы вернуло нет даты
            }
            if (e === "disabled") {
                dtrp.obj.prop("disabled", true);
            }
        },
        enable: function (enb) {
            dtrp.obj.prop("disabled", !enb);
        },
        val: function () {
            return dtrp.obj.val();
            //dtrp.getDateTime();
        }
    };
    dtrp.init(obj_select, property, close_function);
    return dtrp;
}