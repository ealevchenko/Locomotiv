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