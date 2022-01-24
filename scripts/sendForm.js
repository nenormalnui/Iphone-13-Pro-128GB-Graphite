const sendForm = () => {
    const btnOpenModal = document.querySelector('.card-details__button_delivery');
    const cardDetailsTitle = document.querySelector('.card-details__title');
    const modal = document.querySelector('.modal');
    const modalTitle = document.querySelector('.modal__title');
    const modalClose = document.querySelector('.modal__close');
    const modalForm = modal.querySelector('form');

    btnOpenModal.addEventListener('click', () => {
        modal.style.display='flex'
        modalTitle.textContent = cardDetailsTitle.textContent
    })

    modalClose.addEventListener('click', () => {
        modal.style.display='none'
    })

    modalForm.addEventListener('submit', (event) => {   //повесили на модальное окно обработчик событий submit-отправка(и перезагружает страницу)
        event.preventDefault()  //убираем перезагрузку страницы

        const label = document.querySelectorAll('.modal__label') // нашли все labels формы

        const SendMessage = {}  //создали пустой объект

        label.forEach(label => {    //перебради лейблы

            const span = label.querySelector('span')
            const input = label.querySelector('input')

            SendMessage[span.textContent] = input.value //переписали значения чтобы при заполнении сохранялись данные, чтобы они перешли в (19)
        })
        fetch("https://jsonplaceholder.typicode.com/posts", {   //применили метод fetch
          method: "POST",    // с методом POST передает аргументы
          body: JSON.stringify(SendMessage),     //объект превращает в строку и передаем что заполнили в форме
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then(() => {

              console.log('Отправлено');  
              modal.style.display='none'

              label.forEach(label => {   //после заполнения очищаем форму МОЖНО event.target.reset()
                const input = label.querySelectorAll('input');  
                input[0].value = '';
              })
          })
    })
}

sendForm();