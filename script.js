// Créer une fonction qui créer un élement qui prend en paramètre & - le nom du tag 2- propriété - 3 enfant


const createComponent = (tag,attribute,child) => {
    const htmlComponent = document.createElement(tag)
    htmlComponent.setAttribute = attribute
    htmlComponent.createElement(child)
    
}


const header = document.createElement('header')
header.classList.add('header')
document.body.append(header)