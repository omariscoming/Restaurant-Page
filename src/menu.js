
// <div className="food">
//     <div className="icon">
//         <img src="./Pizza.jpg" alt="" className="image"/>
//     </div>
//     <div className="detail">
//         <h3 className="food-name">Pizza</h3>
//         <p className="ingredient">Olive oil,Cornmeal, Tomato sauce, Firm mozzarella cheese, grated</p>
//     </div>
//     <p className="price">3$</p>
// </div>
// <div className="food">
//     <div className="icon">
//         <img src="./Pasta.png" alt="" className="image"/>
//     </div>
//     <div className="detail">
//         <h3 className="food-name">Pasta</h3>
//         <p className="ingredient">All-purpose flour, Salt, Egg, Beaten, Water</p>
//     </div>
//     <p className="price">8$</p>
// </div>

const menu = (foodName, indegrient, price, imagePath) => {
    const Food = document.createElement('div')
    Food.classList.add('food')

    const Icon = document.createElement('div')
    Icon.classList.add('icon')
    Icon.innerHTML = `<img src="${imagePath}" alt="" class="image">`

    const Detail = document.createElement('div')
    Detail.classList.add('detail')
    Detail.innerHTML = `
<h3 class="food-name">${foodName}</h3>
<p class="ingredient">${indegrient}</p>`

    const Price = document.createElement('div')
    Price.classList.add('price')
    Price.innerHTML = `<p class="price">${price}</p>`

    Food.appendChild(Icon)
    Food.appendChild(Detail)
    Food.appendChild(Price)

    const Content = document.querySelector(".content");
    Content.appendChild(Food)
}

export default menu

