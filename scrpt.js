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


const imgElement = document.getElementById('prova');
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
console.log(imgElement);

let result = '';

//Axios
axios.get(endpoint)
.then((response) => {

  console.log(response.data);

  const arrayElements = response.data;
  for (let i = 0; i < arrayElements.length; i++) {

    result += `<div id="${arrayElements[i].id}" class="box">
                <div class="immagine">
                    <img class="img" src="${arrayElements[i].url}" alt="${arrayElements[i].title}">
                </div>
                <div class="testo">
                    <p>${arrayElements[i].date}</p>
                    <p>${arrayElements[i].title}</p>
                </div>
                <img class="pin" src="img/pin.svg" alt="Pin">
            </div>`
  }

  imgElement.innerHTML = result;
});
