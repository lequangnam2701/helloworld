var itemtwo = document.getElementById('two');

var elText = itemtwo.firstChild.nodeValue;

elText = elText.replace('pine nuts', 'kale');

itemtwo.firstChild.nodeValue = elText;