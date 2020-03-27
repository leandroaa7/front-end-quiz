import Questionario from '../new/Questionario';

document.addEventListener('DOMContentLoaded', () => {

    const questionario = new Questionario(2);

    document
        .getElementById('voltar')
        .addEventListener('click', questionario.voltar);

    document
        .getElementById('avancar')
        .addEventListener('click', questionario.avancar)

})

