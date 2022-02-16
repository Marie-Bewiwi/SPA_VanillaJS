
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



const createComponent = (tag,attributes,children = []) => {
 const element = document.createElement(tag)
 const attrs =  Object.entries(attributes)
 attrs.forEach(([key,value])=>{
     if (key === "textContent") {
         element.textContent = value
     } else if (key === "className") {
         element.className = value
     } else {
        element.setAttribute(key,value)
     }
 })
 children.forEach((child)=> {
     element.append(child)
 })
 return element
}


const divroot = document.querySelector('#root')

const createHeader = () => {
    const img = createComponent('img',{src : "/logo_ynov.png"})
    const header = createComponent('header',{},[img])
    return header
}

const createMain = () => {
    const cards = cardsData.map(data => createCard(data));
    const divWrapper = createComponent('div', { className: "flex" }, cards)
    const title = createComponent('h1', { textContent: "Ynov Web Courses" })
    const main = createComponent('main',{},[title, divWrapper])
    return main

}

const createCard = (params) => {
    let likes = 0;
    const cardTitle = createComponent('h2', { textContent: params.name })
    const cardContent = createComponent('p', { textContent: ellipseText(params.description)})
    const cardDetailsBtn = createComponent('button', { textContent: "Get Details"})
    const likeBtn = createComponent('button',{textContent : `Like ${likes} 💔`} )
    const cardContainer = createComponent('section', {}, [cardTitle, cardContent, cardDetailsBtn,likeBtn])
    cardDetailsBtn.addEventListener('click',()=>{
        const modal = document.querySelector('.modal')
        const modalTitle = modal.querySelector('h2')
        const modalContent =  modal.querySelector('p')
        modalTitle.textContent = params.name
        modalContent.textContent = params.description
        modal.classList.remove('hidden')
    })
    likeBtn.addEventListener('click',()=> {
        likes++
        likeBtn.textContent = `Like ${likes} 💖`
    })
    divroot.append(cardContainer)
    return cardContainer
}

const createPopup = () => {
    const popupTitle = createComponent('h2', {})
    const popupContent = createComponent('p', {})
    const popupCloseBtn = createComponent('button', { textContent: "Close"})
    const popupContainer = createComponent('div', { className: 'modal hidden'}, [popupTitle, popupContent, popupCloseBtn])
    popupCloseBtn.addEventListener('click',()=>{
        popupContainer.classList.add('hidden')
    })
    return popupContainer
}

const ellipseText = (txt) => {
    return `${txt.substring(0,80)}...`
}

divroot.append(createHeader(), createMain(), createPopup())
