AOS.init();
const button = document.querySelector("header button");
const ul = document.getElementById("links-list");
const svgs = document.querySelectorAll("header button svg");

button.onclick = function() {
    ul.classList.toggle("d-flex");
    svgs.forEach( svg => svg.classList.toggle("d-none") );
};


const technologyGroup = document.getElementById("group");
const icons = [
    {icon: './images/apexcharts.png', name: "apexcharts"},
    {icon: 'images/bootstrap.png', name: "bootstrap"},
    {icon: 'images/css.png',name: "css"},
    {icon: 'images/html.png', name: "html"},
    {icon: 'images/js.png', name: "js"},
    {icon: 'images/react.png', name: "react js"},
    {icon: 'images/redux.png', name: "redux toolkit"},
    {icon: 'images/sass.png', name: "sass"},
];

icons.forEach((element, index) => technologyGroup.innerHTML += `<div class="box" data-aos="zoom-in" data-aos-delay="${index * 100}"><img src=${element.icon} alt="Technology" /><p>${element.name}</p></div>`);
