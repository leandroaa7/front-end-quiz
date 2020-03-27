class Animate {
    constructor() {

    }


    removerClasses = (elemento, classe, range) => {
        let classes = Array.from(elemento.classList);
        if (range == true) {
            let elementosARemover = classes.slice(classes.indexOf(classe));
            for (let elementoARemover of elementosARemover) {
                elemento.classList.remove(elementoARemover);
            }
        } else {
            elemento.classList.remove(classe);
        }

    }

    transition = (
        idElementToShow,
        idElementToHide,
        animationInShow = "fadeInRightBig",
        animationInHide = "fadeOutLeftBig"
    ) => {
        let elementToShow, elementToHide;

        elementToShow = document.getElementById(idElementToShow);
        elementToHide = document.getElementById(idElementToHide);

        this.removerClasses(elementToHide, 'animated', true);

        elementToHide.classList.add('animated', animationInHide)
        elementToHide.setAttribute('hidden', '');

        this.removerClasses(elementToShow, 'animated', true);

        elementToShow.classList.add('animated', animationInShow)
        elementToShow.removeAttribute('hidden', '');



    }

}

export default Animate;