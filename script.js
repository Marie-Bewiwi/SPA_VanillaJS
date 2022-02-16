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
    const divWrapper = document.createElement('div')
    const card = createCard()
    const card2 = createCard()
    divWrapper.classList.add('flex')
    title.textContent = "Ynov Web Courses"
    divroot.append(main)
    main.append(title)
    divWrapper.append(card,card2)
    main.append(divWrapper)

}

const createCard = () => {
    const cardContainer = document.createElement('section')
    const cardTitle = document.createElement('h2')
    const cardContent = document.createElement('p')
    const cardDetailsBtn = document.createElement('button')
    cardTitle.textContent = "Create a SPA in.."
    cardContent.textContent = "loremjioezjdfiojzedsiojzeffhnufhnuihzefhefhnzefi"
    cardDetailsBtn.textContent = "Get Details"
    divroot.append(cardContainer)
    cardContainer.append(cardTitle,cardContent,cardDetailsBtn)
    return cardContainer
}

const createPopup = () => {
    const popupContainer = document.createElement('div')
    popupContainer.classList.add('modal')
    const popupTitle = document.createElement('h2')
    const popupContent = document.createElement('p')
    const popupCloseBtn = document.createElement('button')
    popupTitle.textContent = "Create a SPA in.."
    popupContent.textContent = "loremjioezjdfiojzedsiojzeffhnufhnuihzefhefhnzefi"
    popupCloseBtn.textContent = "Close"
    divroot.append(popupContainer)
    popupContainer.append(popupTitle,popupContent,popupCloseBtn)



}

createHeader()
createMain()
createPopup()