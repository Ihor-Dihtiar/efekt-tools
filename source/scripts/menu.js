// open/close menu
const openMenuBtn = document.querySelector('.mobile-menu__menu-btn');
const menu = document.querySelector('.mobile-menu__block');
const closeMenuBtn = document.querySelector('.mobile-menu__close-btn');

const efektGarden = document.querySelectorAll('.efekt__garden');
const efektSnow = document.querySelectorAll('.efekt__snow');
const efektType = document.querySelectorAll('.efekt__type');


if (openMenuBtn) {
  openMenuBtn.addEventListener('click', () => {
    menu.classList.add('open');
  });

  closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('open');
  });
}

// canceling the default event for links
efektGarden.forEach(element => {
  element.addEventListener('click', preventEvent);
});

efektSnow.forEach(element => {
  element.addEventListener('click', preventEvent);
});

// switching type efekt
efektGarden.forEach(typeGarden => {
  typeGarden.addEventListener('click',()=>{
    efektType.forEach(type => {
      type.classList.remove('active');
    });
    efektGarden.forEach(element=>{
      element.classList.add('active');
    })
  })
});

efektSnow.forEach(typeSnow => {
  typeSnow.addEventListener('click',()=>{
    efektType.forEach(type => {
      type.classList.remove('active');
    });
    efektSnow.forEach(element=>{
      element.classList.add('active');
    })
  })
});


// function for canceling the default event
function preventEvent(event) {
  if (event.cancelable) {
    //  если событие может быть отменено и предотвращено
    event.preventDefault(); // отменяем действие события по умолчанию
    console.log('Событие ' + event.type + ' отменено'); //  выводим в консоль информацию о том какое событие было отменено
  } else {
    //  если событие не может быть отменено и предотвращено
    console.warn('Событие ' + event.type + ' не может быть отменено'); //  выводим в консоль информацию о том, что данное событие не может быть отменено
  }
}