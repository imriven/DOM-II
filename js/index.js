// Your code goes here


let logo = document.querySelector("h1.logo-heading")

logo.addEventListener("mouseover", event => 
    event.target.style.color = "green");

logo.addEventListener("mouseout", event => 
    event.target.style.color = "red"
);

const newLogo = document.createElement("h1")
newLogo.textContent = "Swifty Bus"
logo.addEventListener("mouseleave", event => event.target.replaceWith(newLogo)
)

gsap.to(".logo-heading",{duration: 3, x: 100});

newLogo.addEventListener("mouseup", event => 
    event.target.style.color = "red"
);

let navLinks = document.querySelectorAll("a.nav-link")


navLinks.forEach(btn => {
    btn.addEventListener("click", event => {
        event.stopPropagation()
        event.preventDefault()
        event.target.style.color = "blue" 

    })
})


this.addEventListener("load", event => {
    navLinks.forEach(btn => {
    gsap.to(btn, {duration: 1, y: -20, ease: "bounce"})
    setTimeout(() => {
        gsap.to(btn, {duration: 1, y: 0, ease: "bounce"})
    }, 2000);
    })
})

navLinks.forEach(btn => {
    btn.addEventListener("dblclick", event => event.target.style.color = "darkSeaGreen" )
})




let mainImage = document.querySelector(".intro img")
this.addEventListener("wheel", event => {

    mainImage.setAttribute("src", "https://cdn.mos.cms.futurecdn.net/XWRZCcWsDjdG29nQYJuDpb.png")

})

let bodyColor = document.querySelector("body")

bodyColor.addEventListener("keyup", event => event.target.style.backgroundColor = "darkSalmon")

let shadowImg = document.querySelectorAll("img")
shadowImg.forEach(element => element.addEventListener("mouseover", event => event.target.style.boxShadow = "4px 4px 8px #788DDE")
)

gsap.to("img", {duration: 5, borderRadius: "100%"});

let colorPara = document.querySelectorAll("p")
colorPara.forEach(element => element.addEventListener("mouseenter", event => event.target.style.color = "slateGray")
)

let navParent = document.querySelector("nav.nav")
navParent.addEventListener("click", e => console.log("parent"))
