class Logic {

    constructor() {
        this.allDataUrl = `https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`;
        this.imageUrl = '';
    };

    /**
         * GET all gnomo names for select/option
         * @returns {Array} Returns Array of Objects
     */

    async getAllGnomos() {

        const fetchData = await fetch(this.allDataUrl);

        const gnomos = await fetchData.json();

        if (!gnomos) throw Error('Oups, any gnomo was there!')

        return gnomos;

    };

    /**
         * get picture of selected gnomo first; it takes longer to print everything, but all is printed at the same time, not picture delayed, so better UX:
         * @param {Number} selectedGnomoId - the id of the selected Gnomo
    */

    async getImage(selectedGnomoId) {
        //show message when gnomo not selected
        if (!selectedGnomoId) throw Error('Gnomo not selected');
        if (typeof selectedGnomoId !== 'number') throw TypeError('Id is not a number');

        this.getAllGnomos()
            .then(res => {
                const url = res.Brastlewark.find(gnomo => gnomo.id === selectedGnomoId).thumbnail;

                //fetched picture, otherwise default picture:
                this.imageUrl = url || 'https://www.google.com/search?q=gnomo+picture&rlz=1C1CHBF_esES835ES835&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiBj8iXiOnhAhUDJBoKHTS3CCMQ_AUIDigB&biw=1884&bih=896#imgrc=paXUIVuJA1YoWM:';
            });

        if (typeof this.imageUrl !== 'string') throw TypeError('Image url not valid');
    };

    /**
         * get all info of selected gnomo:
         * @param {Number} selectedGnomoId - the id of the selected Gnomo
         * @returns {Object} Returns object with data of this Gnomo
     */

    async getGnomoSelectedData(selectedGnomoId) {

        //show message when gnomo not selected
        if (!selectedGnomoId) throw Error('Gnomo not selected');
        if (typeof selectedGnomoId !== 'number') throw TypeError('Id is not a number');

        const allGnomos = await this.getAllGnomos();

        const gnomo = await allGnomos.Brastlewark.find(gnomo => gnomo.id === selectedGnomoId);

        if (!gnomo) throw ('Gnomo not found!');

        return gnomo;

    };

    /**
         * get info of a friend:
         * @param {String} clickedFriendName - the name of the clicked friend of Gnomo
         * @returns {Object} Returns object with data of this Gnomo
     */

    async showFriend(clickedFriendName) {

        if (typeof clickedFriendName !== 'string') throw ("Friend's name is not a string");

        const allGnomos = await this.getAllGnomos()

        const gnomo = await allGnomos.Brastlewark.find(gnomo => gnomo.name === clickedFriendName)

        if (!gnomo) throw ('Gnomo not found!');

        return gnomo;

    };
};

module.exports = Logic;