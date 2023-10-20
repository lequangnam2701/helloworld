 var pass = 50;
 var cores = 90;

  var hasPassed = score >= pass;

  var el = document.getElementById('answer');
  el.innerHTML = 'Level passed: ' + hasPassed;