const headerLinks = Array.from(document.querySelectorAll('header a'))

const thisPageLink = headerLinks.find( link => link.classList.contains('active-page-link'))

function headerLinkColorChange(event){

    if(event.target != thisPageLink){

        event.target.classList.toggle('active-page-link')
        thisPageLink.classList.toggle('active-page-link')

    }

}

headerLinks.forEach( headerLink => {

    headerLink.addEventListener('mouseover', headerLinkColorChange)
    headerLink.addEventListener('mouseout', headerLinkColorChange)

})