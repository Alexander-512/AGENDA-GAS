function doGet () {

    return HtmlService.createTemplateFromFile('web')
    .evaluate()
    .setTitle('AGENDA GAS');

}

function obtenerDatosHTML (nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre)
    .getContent();
}