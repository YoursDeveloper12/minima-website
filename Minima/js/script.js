// Открытие формы по нажатию кнопки "Присоединиться"
var buttonStartForm = document.querySelector('.join__button');

function showForm() {
	var form = document.querySelector('.join__form');
	if(form.className.indexOf('join__form--visible')=== -1 )
	{
		form.classList.add('join__form--visible');
	} 
		else { alert('Простите, форма для заполнения УЖЕ открыта!');}
}
buttonStartForm.addEventListener('click', showForm);

//Закрытие формы по нажатию на "крестик"
var buttonCloseForm = document.querySelector('.join__close');

function closeForm() {
	var form = document.querySelector('.join__form');
	form.classList.remove('join__form--visible');	
}
buttonCloseForm.addEventListener('click', closeForm);