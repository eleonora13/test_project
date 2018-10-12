describe('Check assertions', function () {
    it('check that 10 more than 5', function () {
        expect(10 > 5).toBeTruthy();
    });

    it('should be totally equal', function () {
        const firstString = 'testing';
        const secondString = 'testing';

        expect(firstString).toBe(secondString);
    });

    it('should contain text', function () {
        const test = 'test assertions';
        const assertions = 'assertions';

        expect(test).toContain(assertions);
    });

    it('check the arrays', function () {
        const one = [1, 2, 3];
        const two = [4, 5, 6];
        const three = [4, 5, 6];

        expect(one).not.toBe(two);
        expect(two).toEqual(three);
    });

    it('check the arrays of strings', function () {
        const firstArrString = ['1, 2, 3'];
        const secondArrString = ['1, 2, 3'];

        expect(firstArrString).toEqual(secondArrString);
    });
});
