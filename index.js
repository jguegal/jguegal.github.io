/**$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
	var file = 'views/' + $(this).data('include') + '.html'
	$(this).load(file)
  })
})**/

const backToGreeter = () => {
	let container = document.getElementById("projects-container")
	container.style.display = "none"
	//container = document.getElementById("aboutme-container")
	//container.style.display = "none"

	container = document.getElementById("greeter-container")
	container.style.display = "block"

}

const hideGreeter = () => {
	container = document.getElementById("greeter-container")
	container.style.display = "none"
}

const showSection = (section) => {
	hideGreeter()
	const container = document.getElementById(section)
	if (container.style.display === "none") container.style.display = "block"

}