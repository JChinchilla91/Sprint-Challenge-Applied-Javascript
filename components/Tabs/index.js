// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabCreator(obj) {
    //elements
    const tab  = document.createElement('div')
    
    //styles
    tab.classList.add('tab')

    //add content
    tab.textContent = obj;

    return tab
}

const topicsCon = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then (response => {
    console.log('Info', response.data.topics)
    response.data.topics.forEach(topic => {
        topicsCon.appendChild(tabCreator(topic))
    })
}) 
.catch(err => {
    console.log('You messed up', err)
})
