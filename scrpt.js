// Milestone 1
// Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
// Milestone 2
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
// Milestone 3
// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!




//Risposta chiamata endpoint link fornito
[
	{
		"id": 1,
		"title": "Skate Park",
		"date": "01-07-2024",
		"url": "https://marcolanci.it/boolean/assets/pictures/1.png"
	},
	{
		"id": 2,
		"title": "Passeggiata",
		"date": "16-07-2024",
		"url": "https://marcolanci.it/boolean/assets/pictures/2.png"
	},
	{
		"id": 3,
		"title": "Alpi",
		"date": "01-07-2024",
		"url": "https://marcolanci.it/boolean/assets/pictures/3.png"
	},
	{
		"id": 4,
		"title": "Sagra",
		"date": "21-08-2024",
		"url": "https://marcolanci.it/boolean/assets/pictures/4.png"
	},
	{
		"id": 5,
		"title": "Watergun",
		"date": "23-08-2024",
		"url": "https://marcolanci.it/boolean/assets/pictures/5.png"
	},
	{
		"id": 6,
		"title": "Riviera",
		"date": "30-08-2024",
		"url": "https://marcolanci.it/boolean/assets/pictures/6.png"
	}
]



// const projectImages = [
//     {
//       img: "img-content/summer-1.jpeg",
//       title: "Accusamos Beatae Ad Facilis Cum Similique Qui Sunt"
//     },
//     {
//     img: "img-content/summer-2.jpg",
//     title: "Reprehenderit Est Deserunt Velit Ipsam"
//     },
//     {
//     img: "img-content/summer-3.jpg",
//     title: "Officia Porro Iure Quia Iusto Qui Ipsa Ut Modi"
//     },
//     {
//     img: "img-content/summer-4.jpeg",
//     title: "Culpa Odio Esse Rerum Omnis Laboriosam Voluptate Repudiandae"
//     },
//     {
//     img: "img-content/summer-5.jpg",
//     title: "Natus Nisi Omnis Corporis Facere Molestiae Rerum In"
//     },
//     {
//     img: "img-content/summer-6.jpg",
//     title: "Accusamos Ea Et Amet Sequi Nemo"
//     }
    
//   ];
  
  
  
//   //render html
//   //create html element
  
//   const parentElement = document.querySelector('.container');
  
//   //aggancia il risultato ad un elemento parent
//   renderHTML(parentElement, projectImages);
  
//   //funzione
//   function renderHTML(parent, elements) {
  
//     //per ogni elemento creo html di riferimento
//     //dopo aver creato l'html lo 'appendo' al parent element
  
//     let items = '';
//     for (let i=0; i < elements.length; i++) {
//       const currentElement = elements[i];
  
//       console.log(currentElement);
  
//       items += createHTMLElement(currentElement);
//     }
  
//     //inserimento del prodotto del ciclo nell'innerHTML del parent
//     parent.innerHTML = items;
//   }
  
  
//   function createHTMLElement(object) {
  
//     return `<div class="box">
//                 <div class="immagine">
//                     <img class="img" src="${object.img}" alt="${object.title}">
//                 </div>
//                 <div class="testo">
//                     <p>${object.title}</p>
//                 </div>
//                 <img class="pin" src="img/pin.svg" alt="Pin">
//             </div>`;
//   }

const imgElement = document.getElementById('1');
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
console.log(imgElement);


//Axios
axios.get(endpoint)
.then((response) => {

  console.log(response.data);
  const photo = response.data.id;
  console.log(photo);



})
// const imgContainer = 'container';

// axios.get(endpoint)
// .then((response) => {
//   let items = '';

//   posts
// })