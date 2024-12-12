const main = document.querySelector('.main');
const hoverballs = document.getElementById("hoverballs");
const project = document.querySelector(".projects");

document.addEventListener("DOMContentLoaded", balls());

function balls() 
{
hoverballs.addEventListener("mouseover", () => {
    main.style = "text-shadow: 0 0 30px#00ff00, 0 0 400px #00ff00, 0 0 50px #00FF00;";
    project.style = "text-shadow: 0 0 300px #00ff00c9, 0 0 400px #00ff00ec, 0 0 500px #00FF00;";
    console.log("balls")
});

hoverballs.addEventListener("mouseout", () => {
    main.style = "text-shadow: 0 0 30px#00ff00a2, 0 0 400px #00ff00a6, 0 0 50px #00FF00;";
    project.style = "text-shadow: 0 0 30px#00ff00, 0 0 400px #00ff00, 0 0 50px #00FF00;";
});
}