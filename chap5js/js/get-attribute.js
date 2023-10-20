var firtItem = document.getElementById('one');
if (firtItem.hasAttribute('class')) {
    var attr = firtItem.getAttribute('class');

    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p>the first item  has a class name : ' +  attr + '</p>';
}