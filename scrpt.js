//Risposta chiamata endpoint link fornito

const imgElement = document.getElementById('container-box');
console.log(imgElement)
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

const overlayElement = document.getElementById('overlay-id');
const replaceImgElement = document.getElementById('replace-img');

let result = '';

//Axios
axios.get(endpoint)
    .then((response) => {

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



        //Compare overlay
        const boxElement = document.querySelectorAll('.box')
        console.log(boxElement)

        for (let i = 0; i < boxElement.length; i++) {

            boxElement[i].addEventListener("click", function () {
                const currentBox = boxElement[i].querySelector('.img')
                // console.log(currentcard)
                replaceImgElement.src = currentBox.src
                overlayElement.classList.remove('hidden')
            })
        }
    });

//Bottone che fa sparire l'overlay
const buttonElement = document.querySelector('.btn');

buttonElement.addEventListener('click', function () {

    overlayElement.classList.add('hidden')
})