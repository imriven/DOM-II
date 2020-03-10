// Your code goes here

let logo = document.querySelector("h1.logo-heading")

logo.addEventListener("mouseover", event => 
    event.target.style.color = "green");

logo.addEventListener("mouseout", event => 
    event.target.style.color = "red"
);

let navLinks = document.querySelectorAll("a.nav-link")

navLinks.forEach(btn => {
    btn.addEventListener("click", event => event.target.style.color = "blue" )
})

navLinks.forEach(btn => {
    btn.addEventListener("dblclick", event => event.target.style.color = "darkSeaGreen" )
})

let mainImage = document.querySelector(".intro img")
this.addEventListener("wheel", event => {

    mainImage.setAttribute("src", "https://cdn.mos.cms.futurecdn.net/XWRZCcWsDjdG29nQYJuDpb.png")

})

