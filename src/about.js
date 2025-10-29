const about = ()=>{
    const about = document.createElement('div')
    about.classList.add('about')
    about.innerHTML = `        <div class="number"><p>Call Us</p><div class="line"></div> +1 5551234567</div>
        <div class="website"><p>Our Site</p><div class="line"></div><a href="https://github.com/omariscoming">Website</a></div>
        <div class="instagram"><p>Our instagram</p><div class="line"></div><a href="https://instagram.com">instagram</a></div>
        <div class="location"><p>Location</p><div class="line"></div>Haines, 1688 Forest Avenue, Omar Restaurant</div>
`
    const Content = document.querySelector(".content");
    Content.appendChild(about)

}

export default about


