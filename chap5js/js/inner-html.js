var firtItem = document.getElementById('one');

var itemContent = firtItem.innerHTML;

firtItem.innerHTML = '<a  href=\"http://example.org\">' + itemContent + '</a>';
