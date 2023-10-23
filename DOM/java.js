var dog = document.getElementsByTagName('ul')[0];

var aple = document.createElement('li');
var aple2 = document.createTextNode('11');




var aple3 = document.createElement('li');
var aple4 =  document.createTextNode('55');

aple3.appendChild(aple4);
dog.appendChild(aple3);

aple.appendChild(aple2);
dog.insertBefore(aple, dog.firstChild);

var listItems = document.querySelectorAll('li');
var i;
for(i = 0; i < listItems.length; i++) {
    listItems[i].className = 'dark';
}

// var heading = document.querySelector('h2');
// var headingText = heading.firstChild.nodeValue;
// var totalItems = listItems.length;
// var newHeading = headingText + totalItems ;
// heading.innerHTML = newHeading;

var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' +  totalItems + '</span>';
heading.innerHTML = newHeading;