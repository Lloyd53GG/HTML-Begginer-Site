const body = document.body;
const darkModeToggler = document.getElementById("mode-toggle");
const cardsContainer = document.getElementsByClassName("cards-list")[0];
// Selectam formularul de search
const searchForm = document.getElementById("searchForm")

let searchInput

// Verificam daca exista searchForm in pagina
if (searchForm) {
    // Selectam elementul input din formular
    searchInput = searchForm.querySelector("input")
    // Atasam functia searchProjects la evenimentele de submit si input
    searchForm.addEventListener("submit", searchProjects)
    searchForm.addEventListener("input", searchProjects)
}

// Verificam daca valoarea introdusa in input se regaseste si in numele proiectului
function searchProjects(event) {
    event.preventDefault()
    setTimeout(function(){
        // console.log(event)
        const searchValue = searchInput.value
        // console.log(searchValue)
        const found = projects.find(proiect => proiect.nume.toLowerCase().includes(searchValue.toLowerCase()));

        if(!found || !searchValue) {
            // Nu s-a gasit valoarea, returnam toate proiectele
            cardsContainer.innerHTML = ""
            projects.forEach(function(proiect) {
                generateCard(proiect)
            })
            // projects.forEach(proiect => generateCard(proiect))
        } else {
            // S-a gasit o valoare, returnam proiectul respectiv
            cardsContainer.innerHTML = ""
            generateCard(found)
        }
    }, 200)

}


darkModeToggler.addEventListener("click", function() {
    body.classList.toggle('dark-mode');
});

// Verificam culoarea profilului(tema dispozitivului)
if(window.matchMedia('(prefers-color-scheme: dark)').matches && window.matchMedia) {
    body.classList.toggle("dark-mode")
}


// Lista in care vom salva proiectele din baza de date pentru a le putea filtra
let projects = [];

function generateCard(project) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.classList.add("card");

    const cardImg = document.createElement("img");
    cardImg.src = project.imagine;
    cardImg.alt = project.nume;

    div.append(cardImg);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    const title = document.createElement("h3");
    title.textContent = project.nume;
    cardContent.append(title);

    const descriere = document.createElement("p");
    descriere.textContent = project.descriere;
    cardContent.append(descriere)

    const cardBtn = document.createElement("button")
    cardBtn.textContent = "More"
    cardBtn.onclick = function() {
        location.href = project.link
    }

    cardContent.append(cardBtn)

    div.append(cardContent)

    li.append(div)
console.log(cardsContainer)
    cardsContainer.append(li)
}