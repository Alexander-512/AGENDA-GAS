const HOJA = SpreadsheetApp.openById('1UGfa7-km9g3EsuBYufYayjSXSVhe-5XlYAUkZb1seh8').getActiveSheet();

function doGet (datos) {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('AGENDA GAS');

}

function doPost (datos) {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('AGENDA GAS');
}

function obtenerDatosHTML (nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre)
    .getContent();
}

function obtenerContactos() {
    
    return HOJA.getDataRange().getValues();

}

function insertarContacto (nombre, apellidos, correo, telf) {
    HOJA.appendRow ([nombre, apellidos, correo, telf]);
}