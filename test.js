const countMinus = require('./index.js');

describe('count', () => {
    it('count minus numbers', () => {
        const result = countMinus(5)
        expect(result).toBe(5, 4, 3, 2, 1)
    })
    it('count minus numbers', () => {
        const result = countMinus(3)
        expect(result).toBe(3, 2, 1)
    })
    it('count minus numbers', () => {
        const result = countMinus(7)
        expect(result).toBe(6, 5, 4, 3, 2, 1) 
    })
})