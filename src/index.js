import "./home.css";
import menu from "./menu";
import home from "./home";
import about from "./about";
import humberger from "./humberger.png"
import pizza from "./Pizza.jpg"
import pasta from "./Pasta.png"

let intervalId

const foods = [{foodName: "Humberger", indegrient: "Slices of raw onion, Lettuce, Bacon, Mayonnaise", price: "8$", imagePath: humberger},
    {foodName: "Pizza", indegrient: "Olive oil,Cornmeal, Tomato sauce, Firm mozzarella cheese, grated", price: "5$", imagePath: pizza},
    {foodName: "Pasta", indegrient: "All-purpose flour, Salt, Egg, Beaten, Water", price: "12$", imagePath: pasta}
]

const menuBtn = document.querySelector('.menu')
const homeBtn = document.querySelector('.home')
const content = document.querySelector('.content')
const aboutBtn = document.querySelector('.about-btn')
const githubBtn = document.querySelector('.github-btn')

githubBtn.addEventListener('click', () => {
    window.location.href = 'https://github.com/omariscoming';
});


menuBtn.addEventListener('click', () => {
    clearInterval(intervalId)
    content.innerHTML = ''
    content.style.border = '3px solid #187969'
    foods.forEach((food) => {
        console.log(food[0])
        menu(food.foodName, food.indegrient, food.price, food.imagePath)
    })
})

homeBtn.addEventListener('click', async () => {
    content.innerHTML = ''
    content.style.border = 'none'
    clearInterval(intervalId)
    intervalId = await home()

})

aboutBtn.addEventListener('click', async () => {
    content.innerHTML = ''
    content.style.border = 'none'
    clearInterval(intervalId)
    about()
})
intervalId = await home()

document.querySelector(".number").addEventListener("click", () => {
    window.location.href = "tel:+15551234567";
});

