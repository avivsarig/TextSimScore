const { rankText } = require('../rank.js');

// Test the rankText function
describe('rankText', () => {
    it('Three unique strings', () => {
        const data = ['apple', 'banana', 'orange'];
        const expectedMatrix = [
            [0, 0.16666666666666663, 0.16666666666666663],
            [0.16666666666666663, 0, 0.16666666666666663],
            [0.16666666666666663, 0.16666666666666663, 0]
        ];

        const resultMatrix = rankText(data);
        expect(resultMatrix).toEqual(expectedMatrix);
    });

    it('Some identical strings', () => {
        const data = ['some', 'some', 'some'];
        const expectedMatrix = [
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 0]
        ];

        const resultMatrix = rankText(data);
        expect(resultMatrix).toEqual(expectedMatrix);
    });

    it('Large diff in sizes', () => {
        const data = [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate luctus risus, id cursus libero ultricies et. Praesent vehicula nibh eget lacus malesuada pulvinar. Aenean congue cursus lectus lobortis luctus. Integer velit diam, posuere commodo neque eget, fringilla dignissim ipsum. Quisque vel ipsum bibendum, interdum erat quis, lobortis velit. Phasellus sit amet vulputate erat. Donec in scelerisque dolor. Sed eu mauris maximus, feugiat nisi a, condimentum ex. Integer ac ante commodo, rutrum nisi at, lacinia augue. Nam viverra ipsum et magna placerat molestie. Nulla dolor enim, rutrum et neque vel, condimentum consequat ligula. Duis vel tincidunt felis, nec rhoncus nisi. Maecenas aliquam porta cursus. Nullam ut tellus nec orci viverra gravida. Donec lacinia odio luctus urna cursus blandit. Proin urna orci, posuere et consequat eu, rutrum non libero.',
            'also here'
        ];
        const expectedMatrix = [
            [0, 0],
            [0, 0]
        ];

        const resultMatrix = rankText(data);
        expect(resultMatrix).toEqual(expectedMatrix);
    });

    it('Two long similar texts', () => {
        const data = [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada eu purus eget ornare. Donec sagittis auctor arcu, in luctus nisi vulputate quis. Vestibulum augue enim, dapibus at sagittis vel, ornare sed nisl. Ut sagittis condimentum ipsum, non dignissim nisi facilisis at. Pellentesque elementum tempus sapien in finibus. Etiam vitae.',
            'Lorem ipsum pain sit amet, consectetur adipiscing elit. Duis expected eu purus eget ornare. Donec sagittis auctor arcu, in mourning nisi vulputate quis. Vestibulum augue enim, dapibus at sagittis vel, ornare sed nisl. Ut arrows condimentum ipsum, non dignissim nisi facilisis at. Pellentesque elementum tempus sapien in finibus. Even life.'];
        const expectedMatrix = [
            [0, 0.9067055393586005],
            [0.9067055393586005, 0]
        ];

        const resultMatrix = rankText(data);
        expect(resultMatrix).toEqual(expectedMatrix);
    });

});
