// Créer une fonction qui créer un élement qui prend en paramètre & - le nom du tag 2- propriété - 3 enfant

//que faire pour le attribute ? Un objet ? 
//Voir comment mettre contenu
//object.entries + obj["a"]=>1
const createComponent = (tag,innercontent,attribute,child) => {
    const htmlComponent = document.createElement(tag)
    htmlComponent.setAttribute = Object.entries 
    htmlComponent.textContent = innercontent;
    document.body.append(htmlComponent)
    htmlComponent.append(child)
}

const divroot = document.querySelector('#root')

const createHeader = () => {

    const header = document.createElement('header')
    const img = document.createElement('img')
    img.src = "/logo_ynov.png"
    divroot.append(header)
    header.append(img)
}

const createMain = () => {
    const main = document.createElement('main')
    const title = document.createElement('h1')
    title.textContent = "Ynov Web Courses"
    divroot.append(main)
    main.append(title)
}

createHeader()
createMain()