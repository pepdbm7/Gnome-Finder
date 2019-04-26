const Logic = require('./logic');

describe('logic', () => {

    let logic;

    beforeEach(() => {
        logic = new Logic
    });

    test('should be an instance of Logic', () => {
        expect(logic).toBeInstanceOf(Logic)
    });

    test('should fail if route of getAllGnomos is wrong', () => {
        logic.allDataUrl = `https://raw.githubusercontent.com/abcdfg`;
        logic.getAllGnomos()
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe('Id is not a number');
            })
    });

    test('should fail on finding gnomo with boolean parameter', () =>
        logic.getGnomoSelectedData(true)
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe('Id is not a number');
            })
    );

    test('should fail on finding gnomo with string parameter', () =>
        logic.getGnomoSelectedData('str')
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe('Id is not a number');
            })
    );

    test('should fail on finding gnomo with array parameter', () =>
        logic.getGnomoSelectedData(['hire', 'me'])
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe('Id is not a number');
            })
    );

    test('should fail on finding gnomo with null parameter', () =>
        logic.getGnomoSelectedData(null)
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe('Gnomo not selected');
            })
    );

    test('should fail on finding gnomo with no parameter', () =>
        logic.getGnomoSelectedData()
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe('Gnomo not selected');
            })
    );

    test('should fail on finding picture with url of type boolean', () => {
        logic.imageUrl = true;
        logic.getImage()
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe('Image url not valid');
            })
    });

    test('should fail on finding picture with url of type array', () => {
        logic.imageUrl = ['hire', 'me'];
        logic.getImage()
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe('Image url not valid');
            })
    });

    test('should fail on finding picture with url of type undefined', () => {
        logic.imageUrl = undefined;
        logic.getImage()
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe('Image url not valid');
            })
    });

    test('should fail on finding picture with url of type number', () => {
        logic.imageUrl = 123;
        logic.getImage()
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe('Image url not valid');
            })
    });

    test('should fail on finding friend with parameter type of boolean', () => {
        logic.showFriend(true)
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe("Friend's name is not a string");
            })
    });

    test('should fail on finding friend with parameter type of boolean', () => {
        logic.showFriend(true)
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe("Friend's name is not a string");
            })
    });

    test('should fail on finding friend with parameter type of number', () => {
        logic.showFriend(123)
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe("Friend's name is not a string");
            })
    });

    test('should fail on finding friend with parameter type of array', () => {
        logic.showFriend(['hire', 'me'])
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe("Friend's name is not a string");
            })
    });

    test('should fail on finding friend with parameter type of object', () => {
        logic.showFriend({ hire: 'me'})
            .catch(err => err)
            .then(({ message }) => {
                expect(message).toBeDefined();

                expect(message).toBe("Friend's name is not a string");
            })
    });
});