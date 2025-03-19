//DAY 1

// Milestone 1
// Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
// Milestone 2
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
// Milestone 3
// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!




//Risposta chiamata endpoint link fornito
const oggetti = [
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


const imgElement = document.getElementById('container-box');
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
console.log(imgElement);

let result = '';

//Axios
axios.get(endpoint)
.then((response) => {

  console.log(response.data);

  const arrayElements = response.data;
  for (let i = 0; i < arrayElements.length; i++) {

    result += `<div id="${arrayElements[i].id}" class="container">
            <div class="box">
                <div class="immagine">
                    <img class="img" src="${arrayElements[i].url}" alt="${arrayElements[i].title}">
                </div>
                <div class="testo">
                    <p class="date">${arrayElements[i].date}</p>
                    <p class="title">${arrayElements[i].title}</p>
                </div>
                <img class="pin" src="img/pin.svg" alt="Pin">
            </div>
        </div>`

            
  }

  imgElement.innerHTML = result;
});


//DAY 2

// Milestone 1
// Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.
// Milestone 2
// Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
// Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
// Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
// Milestone 3
// Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
// Ci sono diversi modi di farlo, provate a sperimentare :faccia_leggermente_sorridente:
// Bonus
// Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare

//Compare overlay
// const containerElement = document.getElementsByClassName('.container');
// console.log(containerElement);
// const overlayShow = document.getElementsByClassName('.overlay');
// console.log(overlayShow);
// const imgReplace = document.getElementsByClassName('img');
// console.log(imgReplace);



// 	for (let i = 0; i < containerElement.length; i++) {

// 		containerElement[i].addEventListener("click", function (e) {

// 			const pageImg = containerElement[i].querySelector('.img-2');
// 			console.log(pageImg.src);
// 			// console.log(pageImg.alt);
// 			imgReplace.src = pageImg.src;
// 			console.log(imgReplace.src);

// 			overlayShow.classList.remove('.hidden');

			
// 		}
// 	  )}

// //Bottone chiude overlay
// const buttonClose = document.querySelector('.btn');
// console.log(buttonClose);

// buttonClose.addEventListener('click', function (e) {

// 	overlayShow.classList.add('.hidden');
// })


try {
	nonExistentFunction();
  } catch (error) {
	console.log("Errore!");
}