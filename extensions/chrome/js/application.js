(function() {
	var elements = document.getElementsByClassName("button");
	Array.from(elements).forEach(function(element) {
	  element.addEventListener('click', function(el) {
	  	var targetId = '#' + el.target.getAttribute('id').replace('button', 'player');
	  	document.querySelector(targetId).play();
	  });
	});
})();
