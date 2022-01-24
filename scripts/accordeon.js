/*const accordeon = () => {
    const CharacteristicsItems = document.querySelectorAll('.characteristics__item')
    CharacteristicsItems.forEach(item => {
        const CharacteristicsButton = item.querySelector('.characteristics__title')
        const CharacteristicsContent = item.querySelector('.characteristics__description')

        CharacteristicsButton.addEventListener('click', () => {

            if(CharacteristicsContent.classList.contains('open')) {

                
                CharacteristicsContent.style.height = ''

            } else {

                CharacteristicsContent.style.height = CharacteristicsContent.scrollHeight + 'px'
            }

            CharacteristicsButton.classList.toggle('active')
            CharacteristicsContent.classList.toggle('open')
        })

    })
}

accordeon()*/
const accordeon = () => {
    const CharacteristicsItems = document.querySelectorAll('.characteristics__item');

    CharacteristicsItems.forEach(item => {
        const ChartacteristicsButton = item.querySelector('.characteristics__title');
        const CharacteristicsContent = item.querySelector('.characteristics__description');

        ChartacteristicsButton.addEventListener('click', () => {
            // Сворачивание ранее открытых секций
            CharacteristicsItems.forEach(openItem => {
                if (openItem === item) return;
                const CharacteristicsButtonActive = openItem.querySelector('.characteristics__title');
                const CharacteristicsContentOpen = openItem.querySelector('.characteristics__description');
                if (CharacteristicsContentOpen.classList.contains('open')) 
                {
                    CharacteristicsContentOpen.style.height = '';
                    CharacteristicsButtonActive.classList.remove('active');
                    CharacteristicsContentOpen.classList.remove('open');
                }
            });

            if (CharacteristicsContent.classList.contains('open')) {
                CharacteristicsContent.style.height = '';
            } else {
                CharacteristicsContent.style.height = CharacteristicsContent.scrollHeight + 'px';
            }

            ChartacteristicsButton.classList.toggle('active');
            CharacteristicsContent.classList.toggle('open');
        });
    });
};

accordeon();