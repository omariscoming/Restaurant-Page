import humbergerpng from "./humbergerpng.png"

const titles = [
    'Where Flavor Meets Soul',
    'A Taste of Timeless Tradition',
    'Savor Every Moment',
    'Your Daily Dose of Delicious',
    'Eat Well. Live Well.',
    'Fine Food, Fine Moments',
    'Where Taste Becomes Memory',
]




function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

const changeTitle =async ()=>{
    const title = document.querySelector('.home-title')
    title.classList.remove("fade-in");
    await delay(500)
    title.classList.add('fade-out')

    await delay(500)
    let randomIndex = Math.floor(Math.random() * titles.length)
    title.innerText = titles[randomIndex]

    title.classList.remove("fade-out");
    title.classList.add("fade-in");
}

const home = async () => {
    const HomePage = document.createElement('div')
    HomePage.className = 'home page'
    HomePage.innerHTML = `    <h2 class="home-title">Where Flavor Meets Soul</h2>
    <img src=${humbergerpng} alt="" class="home-icon"/>
`

    const Content = document.querySelector(".content");
    Content.appendChild(HomePage)
    return setInterval(changeTitle, 5000)
}

export default home

