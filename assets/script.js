const array = [{
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
},
{
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
},
{
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
},
{
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
},
{
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
},
{
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
},
];

const out = document.querySelector(".output");
for (const key in array) {
    console.log(`Nome: ${array[key].name}, Ruolo: ${array[key].role}, Immagine: ${array[key].image}`);
    out.innerHTML += `<div> Nome: ${array[key].name}, Ruolo: ${array[key].role} <img src="assets/img/${array[key].image}" alt=""> </div>`;
}