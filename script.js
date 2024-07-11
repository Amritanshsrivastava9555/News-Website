const API_KEY = "f595fdb2178d46e9b2f72329f6e759fd";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', () => fetchNews("India"));

async function fetchNews(query){
    const res = await fetch(`${url}${query}&apikey=${API_KEY}`);
    const data = await res.json();
    console.log(data)
    bindData(data.articles)
}

function bindData(articles){
    const cardContainer = document.getElementById('card-container')
    const newsCardTemplate = document.getElementById('template-news-card')

    cardContainer.innerHTML = '';
    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true)
        fillData(cardClone ,article)
        cardContainer.appendChild(cardClone)
    })
}

function fillData(cardClone, article){
    const newsImg = cardClone.getElementById('news-img')
    const newstitle = cardClone.getElementById('news-title')
    const newssource = cardClone.getElementById('news-source')
    const newsdesc = cardClone.getElementById('news-desc')
    newsImg.src = article.urlToImage
    newstitle.innerHTML = article.title
    newssource.innerHTML = article.source.name
    newsdesc.innerHTML = article.description
    cardClone.firstElementChild.addEventListener("click",()=>{
        window.open(article.url, "_blank")
    })
}

let clicked = 0
function navClick(id){
    fetchNews(id)
}

const searchbutton = document.getElementById('search-button')
const searchtext = document.getElementById('search-input')

searchbutton.addEventListener("click", ()=>{
    const query = searchtext.value
    if(!query) return;
    fetchNews(query)
});

const darkMode = document.getElementById('dark-mode')
const background = document.getElementById('for-mode-change')
let mode = 2
darkMode.addEventListener("click", ()=>{
    if(mode%2==0){
        // background.style.backgroundColor="#121212"
        background.style.backgroundColor="#1F1B24"
        darkMode.innerText="☀️"
        mode += 1
    }
    else{
        mode -= 1
        background.style.backgroundColor="white"
        darkMode.innerText="🌙"
    }
})

const dropDown = document.getElementById("drop-down")
dropDown.addEventListener("click", () => {
    
})