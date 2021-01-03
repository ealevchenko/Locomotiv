/* ----------------------------------------------------------
    Обработчики ajax - функций
-------------------------------------------------------------*/
// Событие перед запросом
var AJAXBeforeSend = function () {
    //OnBegin();
}
// Обработка ошибок
var OnAJAXError = function (metod, x, y, z) {
    var status = "";
    var status_text = "";
    var message = "";

    if (x && x.status) {
        status = x.status;
    }
    if (x && x.statusText) {
        status_text = x.statusText;
    }
    if (x && x.responseJSON) {
        message = x.responseJSON.Message;
    }
    alert('Metod js : ' + metod + '\nStatus : ' + status + '\nStatusText : ' + status_text + '\nMessage : ' + message);
    //LockScreenOff();
    //if (x.status != 404) {

    //}
    LockScreenOff();
};
// Событие после выполнения
var AJAXComplete = function () {
    //LockScreenOff();
};

var LOCOMOTIVE_API = function () {

};
// Загрузка ремонтов
LOCOMOTIVE_API.prototype.getTabRepairs = function (callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/tab_repairs/all',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError("LOCOMOTIVE_API.getTabRepairs", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Загрузка работ по тепловозу
LOCOMOTIVE_API.prototype.getTabActionsOfID = function (id, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/tab_action/id/'+id,
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError("LOCOMOTIVE_API.getTabActionsOfID", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Загрузка справочника "Неисправностей"
LOCOMOTIVE_API.prototype.getRefDamage = function (callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/ref_damage/all',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError("LOCOMOTIVE_API.getRefDamage", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Загрузка справочника "Список локомотивов"
LOCOMOTIVE_API.prototype.getRefNumLoko = function (callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/ref_num_loko/all',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError("LOCOMOTIVE_API.getRefNumLoko", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Загрузка справочника "Список операторов"
LOCOMOTIVE_API.prototype.getRefOperation = function (callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/ref_operation/all',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError("LOCOMOTIVE_API.getRefOperation", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Загрузка справочника "Список систем"
LOCOMOTIVE_API.prototype.getRefSystems = function (callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/ref_systems/all',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError("LOCOMOTIVE_API.getRefSystems", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Загрузка справочника "Список unit"
LOCOMOTIVE_API.prototype.getRefUnit = function (callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/ref_unit/all',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError("LOCOMOTIVE_API.getRefUnit", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Загрузка справочника "Список привязки агрегатов к неисправностям"
LOCOMOTIVE_API.prototype.getLnkUDO = function (callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/lnk_udo/all',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError("LOCOMOTIVE_API.getLnkUDO", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
