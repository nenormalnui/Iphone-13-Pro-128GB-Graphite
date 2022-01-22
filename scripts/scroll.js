const links = document.querySelectorAll('.header-menu__item a')
const allcharachteristics = document.querySelector('.card-details__link-characteristics')

seamless.polyfill();

links.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();

        const id=element.getAttribute('href').substring(1)
        const section=document.getElementById(id)
        if(section){
            seamless.elementScrollIntoView(section, {
                behavior:"smooth",
                block:"start"})
        } else {
            seamless.elementScrollIntoView(document.querySelector("#target"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    })
})

allcharachteristics.addEventListener('click', (event) => {
    event.preventDefault();

    const allcharachteristicsid=allcharachteristics.getAttribute('href').substring(1)
    const allcharachteristicssection=document.getElementById(allcharachteristicsid)
    seamless.elementScrollIntoView(allcharachteristicssection, {
        behavior: "smooth",
        block: "center",
        inline: "center"
    })
})