const sum = (a:number, b: number):number => a + b
// console.log('sum(1,2) =', sum(1,2))

const checkSentenceLength = (sentence: String): number => sentence.length
// console.log(checkSentenceLength('test'))

const isPalindrom = (sentence:String) => {
    const reverseSentence = sentence.split('').reverse().join('')
    const checkPalindrom = sentence === reverseSentence
    return checkPalindrom
}
// console.log(isPalindrom('kayak'));
const is_Array = (value:Array<any>) => {
    return Array.isArray(value)
}
// console.log(is_Array([1,2]));
const isArrayOfNumbers = (arr : Array<Number>) => {
    return arr.every(value => typeof(value) === 'number')
}
const isArrayOfWords = (arr : Array<string>) => {
    return arr.every(value => typeof(value) === 'string')
}
const highestNumberInArray = (arr : Array<number>) => {
    let highest = 0;
    for(let value of arr) {
        highest < value ? highest = value : ''
    }
    return highest
}
const highestWordInArray = (arr : string[]) => {
    let highest = '';
    for(let value of arr) {
        highest.length < value.length ? highest = value : ''
    }
    return highest

}
const highestValueInArray = (arr : Array<any>) => {
    if(arr.length == 0) return 'empty array' 
    else {
        if(isArrayOfWords(arr)) {
            return highestWordInArray(arr)
        }
        return highestNumberInArray(arr)        
    }
}
export {
    sum,
    checkSentenceLength,
    isPalindrom,
    is_Array,
    isArrayOfNumbers,
    isArrayOfWords,
    highestNumberInArray,
    highestWordInArray,
    highestValueInArray
}
