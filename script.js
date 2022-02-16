// Créer une fonction qui créer un élement qui prend en paramètre & - le nom du tag 2- propriété - 3 enfant

//que faire pour le attribute ? Un objet ? 
//Voir comment mettre contenu
//object.entries + obj["a"]=>1

const cardsData = [
    {
      "name": "Create an SPA in Vanilla JS",
      "description": "Create an application with only javascript and one poor html tag has never been so fun"
    },
    {
      "name": "Learn React",
      "description": "Spoiler alert, but everything that you're doing at the moment is very boring and React is way better"
    },
    {
      "name": "Learn Angular",
      "description": "I'm so sorry for you. You have to go through it as well so you can really understand how React is simpler. Less guided, but simpler."
    }
  ]



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
    cardsData.forEach(data => {
        const card = createCard(data)
        divWrapper.append(card)
    });
    divWrapper.classList.add('flex')
    title.textContent = "Ynov Web Courses"
    divroot.append(main)
    main.append(title)
    main.append(divWrapper)

}

const createCard = (params) => {
    const cardContainer = document.createElement('section')
    const cardTitle = document.createElement('h2')
    const cardContent = document.createElement('p')
    const cardDetailsBtn = document.createElement('button')
    cardTitle.textContent = params.name
    cardContent.textContent = params.description
    cardDetailsBtn.textContent = "Get Details"
    cardDetailsBtn.addEventListener('click',()=>{
        const modal = document.querySelector('.modal')
        const modalTitle = modal.querySelector('h2')
        const modalContent =  modal.querySelector('p')
        modalTitle.textContent = params.name
        modalContent.textContent = params.description
        modal.classList.remove('hidden')
    })
    divroot.append(cardContainer)
    cardContainer.append(cardTitle,cardContent,cardDetailsBtn)
    return cardContainer
}

const createPopup = () => {
    const popupContainer = document.createElement('div')
    popupContainer.classList.add('modal','hidden')
    const popupTitle = document.createElement('h2')
    const popupContent = document.createElement('p')
    const popupCloseBtn = document.createElement('button')
    popupTitle.textContent = "Create a SPA in.."
    popupContent.textContent = "loremjioezjdfiojzedsiojzeffhnufhnuihzefhefhnzefi"
    popupCloseBtn.textContent = "Close"
    popupCloseBtn.addEventListener('click',()=>{
        popupContainer.classList.add('hidden')
    })
    divroot.append(popupContainer)
    popupContainer.append(popupTitle,popupContent,popupCloseBtn)

}

createHeader()
createMain()
createPopup()