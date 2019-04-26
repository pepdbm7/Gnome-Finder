class View {

    constructor() {
        this.buildSelector()
    };

    /**
         * create the options of select/options:
         * @param {String} clickedFriendName - the name of the clicked friend of Gnomo
         * @returns {Object} Returns object with data of this Gnomo
     */
    
    buildSelector() {
        
        logic.getAllGnomos()
            .then(gnomos => {

                const gnomoSelector = document.querySelector('#gnomo');

                //create its option in select:
                gnomos.Brastlewark.forEach(gnomo => {
                    const option = document.createElement('option');
                    option.value = gnomo.name;

                    const name = document.createTextNode(gnomo.name);

                    option.append(name);

                    gnomoSelector.appendChild(option);

                });
            });

    };

    /**
         * show an error message:
         * @param {String} text - the error message
         * @param {String} classname - the class of the div container of the message
     */

    showMessage(text, classname) {

        const message = document.createElement('div');
        message.className = classname;
        message.appendChild(document.createTextNode(text));

        const messageContainer = document.querySelector('.message');
        messageContainer.appendChild(message);

        setTimeout(() => {
            while (messageContainer.firstChild) {
                messageContainer.removeChild(messageContainer.firstChild);
            }

        }, 2000);

    };

    /**
         * create Html content:
         * @param {Object} gnomoData - the gnomo's data retrieved by function logic.getGnomoSelectedData() or logic.showFriend()
     */

    showResults(gnomoData) {

        if (!gnomoData) throw Error (`Data of this gnomo not found. Try another!`);
        if (typeof gnomoData !== 'object') throw TypeError (`Data of this gnomo not an object!`);
        if (gnomoData.length > 1) throw Error (`Returned more than one gnomo!`);

        //delete previous results:
        const previousResult = document.querySelector('#result > div');

        if (previousResult) previousResult.remove()

        let name = gnomoData.name,
            age = gnomoData.age,
            weight = gnomoData.weight.toFixed(2),
            height = gnomoData.height.toFixed(2),
            hair_color = gnomoData.hair_color,
            professions = gnomoData.professions.join(', ').replace(/,(?=[^,]*$)/, ' and'),
            friends = gnomoData.friends.map(f => (`<a href="#" onClick="view.anchorEvent('${f}')" >${f}</a>`)).join(', ').replace(/,(?=[^,]*$)/, ' and'),
            gnomoImg = logic.imageUrl,

            templateResults =
                ` <div class="card">
                    <div class="card-body text-light">
                        <img src="${gnomoImg}" alt="gnomo profile pic">
                        <h2 class="card-title">${name}</h2>
                        <p>Hello!!!</p>
                        <p>I am ${age} old.</p>
                        <p>My hair is ${hair_color}</p>
                        <p>I am ${weight} kg and ${height} cms tall.</p>
                    ${professions.length ? `<p>I work as a ${professions}</p>` : "I don't work"}
                    ${friends.length ? `<p>My friends are: </br> ${friends}</p>` : "I don't have time to make nor keep friends"}
                    </div>
                </div>`;

        //show spinner:
        this.showSpinner('block');

        //after 1sec spinner disappears and show results:
        setTimeout(() => {
            document.querySelector('#result').innerHTML = templateResults;

            this.showSpinner('none');
        }, 1000);

    };

    /**
         * change style of div container of spinner:
         * @param {String} visibility - 'block' or 'none'
     */

    showSpinner(visibility) {

        const spinner = document.querySelector('#spinner__container');

        spinner.style.display = visibility;
    };

    /**
         * call logic function to retrieve data of friend, set the value in gnomoselector and call showresults to show friends info:
         * @param {String} clickedFriendName - the name of the clicked friend of Gnomo
         * @returns {Object} Returns the function showResults with the data of the friend as a parameter
     */

    anchorEvent(clickedFriendName) {

        logic.showFriend(clickedFriendName)
            .then(dataGnomo => {
                document.querySelector('#gnomo').value = clickedFriendName;
                this.showResults(dataGnomo);
            })
            .catch(err => view.showMessage(err, 'alert bg-danger text-center'));
            
    };

};
