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
    var mes = 'Metod js : ' + metod + '\nStatus : ' + status + '\nStatusText : ' + status_text + '\nMessage : ' + message;
    alert(mes);
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
// Показать статус по всем локомотивам
LOCOMOTIVE_API.prototype.getViewStatusLocomotive = function (callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/tab_repairs/view/status_locomotive',
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
            OnAJAXError("LOCOMOTIVE_API.getViewStatusLocomotive", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Открыть ремонт по тепловозу
LOCOMOTIVE_API.prototype.putOpenTabRepairs = function (id, callback) {
    $.ajax({
        type: 'PUT',
        url: '../../api/tab_repairs/open/id/' + id,
        //data: JSON.stringify(value),
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError("LOCOMOTIVE_API.putOpenTabRepairs", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Закрыть ремонт по тепловозу
LOCOMOTIVE_API.prototype.putCloseTabRepairs = function (id, callback) {
    $.ajax({
        type: 'PUT',
        url: '../../api/tab_repairs/close/id/' + id,
        //data: JSON.stringify(value),
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError("LOCOMOTIVE_API.putCloseTabRepairs", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};


/* ----------------------------------------------------------
    TabActions - работы по тепловозам
-------------------------------------------------------------*/
// Загрузка работs по тепловозу по id
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
// Загрузка работ по тепловозу
LOCOMOTIVE_API.prototype.getTabActionsOfIDRepair = function (id, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/tab_action/repair/id/'+id,
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
            OnAJAXError("LOCOMOTIVE_API.getTabActionsOfIDRepair", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
//Добавить работу по тепловозу
LOCOMOTIVE_API.prototype.postTabActions = function (value, callback) {
    $.ajax({
        url: '../../api/tab_action/',
        type: 'POST',
        data: JSON.stringify(value),
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            LockScreenOff();
            OnAJAXError("IDS_DIRECTORY.postTabActions", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
//Обновить работу по тепловозу 
LOCOMOTIVE_API.prototype.putTabActions = function (value, callback) {
    $.ajax({
        type: 'PUT',
        url: '../../api/tab_action/id/' + value.idAction,
        data: JSON.stringify(value),
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError("LOCOMOTIVE_API.putTabActions", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Удалить работу по тепловозу 
LOCOMOTIVE_API.prototype.deleteTabActions = function (id, callback) {
    $.ajax({
        url: '../../api/tab_action/id/' + id,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError("LOCOMOTIVE_API.deleteTabActions", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};

/* ----------------------------------------------------------
    RefDamage - справочник неисправностей
-------------------------------------------------------------*/
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
/* ----------------------------------------------------------
    RefNumLoko - справочник локомотивов
-------------------------------------------------------------*/
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
/* ----------------------------------------------------------
    RefOperation - справочник операций
-------------------------------------------------------------*/
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
/* ----------------------------------------------------------
    RefSystems - справочник систем
-------------------------------------------------------------*/
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
/* ----------------------------------------------------------
    RefUnit - справочник агрегатов
-------------------------------------------------------------*/
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
/* ----------------------------------------------------------
    LnkUDO - справочник привязок агрегат\неисправность\операция
-------------------------------------------------------------*/
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
// Загрузка строку справочника "Список привязки агрегатов к неисправностям"
LOCOMOTIVE_API.prototype.getLnkUDOOfID = function (id, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/lnk_udo/id/' + id,
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
            OnAJAXError("LOCOMOTIVE_API.getLnkUDOOfID", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};

/* ----------------------------------------------------------
    Reports - Отчеты
-------------------------------------------------------------*/
// 
LOCOMOTIVE_API.prototype.getReportRepairsOfLokomotive = function (id, start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/reports/repairs_lokomotive/id/' + id + '/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
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
            OnAJAXError("LOCOMOTIVE_API.getReportRepairsOfLokomotive", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
//
LOCOMOTIVE_API.prototype.getReportUnitOfLokomotivee = function (id, start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/reports/unit_lokomotive/id/' + id + '/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
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
            OnAJAXError("LOCOMOTIVE_API.getReportUnitOfLokomotivee", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
//
LOCOMOTIVE_API.prototype.getReportDamageOfLokomotive = function (id, start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/reports/damage_lokomotive/id/' + id + '/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
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
            OnAJAXError("LOCOMOTIVE_API.getReportDamageOfLokomotive", x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};