import { 
    sum, 
    checkSentenceLength, 
    isPalindrom, 
    is_Array, 
    isArrayOfNumbers, 
    isArrayOfWords,
    highestNumberInArray, 
    highestWordInArray,
    highestValueInArray, 
    detectForbiddenWords,
    replaceForbiddenWords
} from "../app.js";


describe('adds 1 + 2 to be greater than 0 and equal to 3', () => {
    it('should be greater than 0', ()=> {
        expect(sum(1, 3)).toBeGreaterThan(0)
    })  
    it('should be equal to 3', () => {
        expect(sum(1, 2)).toBe(3);
    }) 
});
describe('Check palindrom', () => {
    it('should have a sentence', () => {
        expect(checkSentenceLength('kayak')).toBeGreaterThan(0)
    })
    it('should be a palindrom', () => {
        expect(isPalindrom('kayak')).toBeTruthy()
    })
})
describe('return the hightest number or world in an array', () => {
    it('should be an array', () => {
        expect(is_Array([1,2,'3'])).toBeTruthy()
    })
    it('should be an array of numbers', () => {
        expect(isArrayOfNumbers([2, 4])).toBeTruthy()
    })
    it('should be an array of words', () => {
        expect(isArrayOfWords(['test', '2'])).toBeTruthy()
    })
    it('should return the highest number of an array', () => {
        expect(highestNumberInArray([2, 4, 6])).toBe(6)
    })
    it('should return the biggest word of an array', () => {
        expect(highestWordInArray(['t', 'te', 'tes', 'test'])).toBe('test')
    })
    it('should return the highest value of an array', () => {
        expect(highestValueInArray([])).toBe('empty array')
        expect(highestValueInArray(['test', 3])).toBe('mixed values')
        expect(highestValueInArray([0, 2])).toBe(2)
        expect(highestValueInArray(['hello', 'testing'])).toBe('testing')
    })
})
describe('forbidden words', () => {
    it('should detect a forbidden word', () => {
        expect(detectForbiddenWords('Vous êtes tous des truffes')).toBeTruthy()
    })
    it('should NOT detect a forbidden word', () => {
        expect(detectForbiddenWords('Vous êtes tous des tomates cerise')).toBeFalsy()
    })
    it('should replace forbidden words by xxx', () => {
        expect(replaceForbiddenWords('Vous êtes tous des truffes que je roule dans la confiture')).toBe('Vous êtes tous des xxx que je roule dans la xxx')
    })
    it('should return the same sentence if no forbidden words detected', () => {
        expect(replaceForbiddenWords('Vous êtes tous des pommes joufflues')).toBe('Vous êtes tous des pommes joufflues')
    })
})