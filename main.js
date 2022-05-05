const $btn = document.querySelector(".btn");
const $modal = document.querySelector(".modal");
const $close = document.querySelector(".close");

    $btn.addEventListener("click" , () => {
        $modal.classList.toggle("active");
    })

    $close.addEventListener("click" , () => {
        $modal.classList.remove("active" , "disable");
    })

// Añadir transiciones cuando click, etc, etc
