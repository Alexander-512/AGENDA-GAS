function doGet () {

    return HtmlService.createTemplateFromFile('web')
    .evaluate()
    .setTitle('AGENDA GAS');

}

function obtenerDatosHTML (nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre)
    .getContent();
}

function obtenerContactos() {
    let hoja = SpreadsheetApp.openById('1UGfa7-km9g3EsuBYufYayjSXSVhe-5XlYAUkZb1seh8').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}