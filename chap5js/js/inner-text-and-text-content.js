var firtItem = document.getElementById('one');
var showTextContent = firtItem.textContent;
var showInnerText = firstItem.showInnerText;

var msg =   '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread';