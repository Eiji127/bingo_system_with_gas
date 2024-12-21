function doGet() {
  const template = HtmlService.createTemplateFromFile('index');
  template.backgroundData = loadImageForBackground('1mcr4uSLb-RoFHKyxXzrLMMzkCi8sckSo'); 
  template.openingBackground = loadImageForBackground('1U_0aGc65mloE5bKHvvBVlc6X3C913Hmk'); 
  template.backgroundSound = loadBackgroundSound('1sEGs66LROKJHYZA2M-OntPTHyEzuEP01');
  return template.evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function loadImageForBackground(fileId) {
  const file = DriveApp.getFileById(fileId);
  const blob = file.getBlob();
  const contentType = blob.getContentType();
  return `data:${contentType};base64,${Utilities.base64Encode(blob.getBytes())}`;
}

function loadBackgroundSound(fileId) {
  const file = DriveApp.getFileById(fileId);
  const blob = file.getBlob();
  const contentType = blob.getContentType();
  return `<source src="data:${contentType};base64,${Utilities.base64Encode(blob.getBytes())}" type="audio/mpeg">`;
}