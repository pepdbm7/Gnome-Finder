const logic = new Logic();
const view = new View();


const form = document.querySelector('#form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const selectedGnomoId = document.querySelector('#gnomo').selectedIndex;

    try {
        logic.getImage(selectedGnomoId)
            .then(() => logic.getGnomoSelectedData(selectedGnomoId))
            .then(gnomo => view.showResults(gnomo))
            .catch(err => view.showMessage(err, 'alert bg-danger text-center'))

    } catch (err) {
        view.showMessage(err, 'alert bg-danger text-center');
    };

});