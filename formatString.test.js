describee('formatTimeStrings tests', () => {
    it('returns None if no opening hours passed', () => {
        const expected = 'None';
        const received = formatTimeStrings([]);
        expect(received).toEqual(expected);
    });
});