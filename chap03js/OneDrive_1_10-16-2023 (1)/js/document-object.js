var msg = '<P><b>page title: </b>' + document.title + '<br />';

msg +='<b>page address: </b>' +document.URL + '<br />';

msg +='<b>last modified: </b>' +document.lastModified + '<br />';

var el = document.getElementById('footer');

el.innerHTML = msg;

