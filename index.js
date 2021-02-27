/**$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
	var file = 'views/' + $(this).data('include') + '.html'
	$(this).load(file)
  })
})**/

const showOrHideSection = (section) => {
	const container = document.getElementById(section)
	container.style.display === "none" ? container.style.display = "block" : container.style.display = "none"
		
}