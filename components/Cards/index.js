// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const createCard = (dataObj) => {
    //elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgCon = document.createElement('div')
    const img = document.createElement('img')
    const authName = document.createElement('span')

    //create structure
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgCon)
    imgCon.appendChild(img)
    author.appendChild(authName)

    //add styles
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgCon.classList.add('img-container')

    //add Content
    headline.textContent = dataObj.headline
    img.src = dataObj.authorPhoto
    authName.textContent = `By ${dataObj.authorName}`

    return card
}

const cardsContainer = document.querySelector('.cards-container')


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data.articles.bootstrap)

    response.data.articles.javascript.forEach(item => {
        cardsContainer.appendChild(createCard(item))
    })
    response.data.articles.bootstrap.forEach(item => {
        cardsContainer.appendChild(createCard(item))
    })
    response.data.articles.bootstrap.forEach(item => {
        cardsContainer.appendChild(createCard(item))
    })
    response.data.articles.technology.forEach(item => {
        cardsContainer.appendChild(createCard(item))
    })
    response.data.articles.jquery.forEach(item => {
        cardsContainer.appendChild(createCard(item))
    })
    response.data.articles.node.forEach(item => {
        cardsContainer.appendChild(createCard(item))
    })
})
.catch(err => {
    console.log('Oops!', err)
})
