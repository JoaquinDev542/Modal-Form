const $btn = document.querySelector(".btn");
const $modal = document.querySelector(".modal");
const $close = document.querySelector(".close");

const $input = document.querySelector(".input");
const $formBtn = document.querySelector(".form__btn");
const regExEmail = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const $cardValidateMesagge = document.querySelector(".card__validateMesagge");
const $cardErrorMesagge = document.querySelector(".card__errorMesagge");

    const eventListenerFunction = function () {

        $btn.addEventListener("click" , () => {
            $modal.classList.toggle("active");
        })
    
        $close.addEventListener("click" , () => {
            $modal.classList.remove("active" , "disable");
        })    

    }
eventListenerFunction();

    const validateEmailFunction = function() {

        $formBtn.addEventListener("click" , () => {

            if(regExEmail.test($input.value) === true ) {
                $input.value = "";
                $cardValidateMesagge.classList.add("display");
                $cardErrorMesagge.classList.remove("display");

            } else {
                $cardValidateMesagge.classList.remove("display");
                $cardErrorMesagge.classList.add("display");
            }

        })
       
    }
validateEmailFunction();
