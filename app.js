"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highestValueInArray = exports.highestWordInArray = exports.highestNumberInArray = exports.isArrayOfWords = exports.isArrayOfNumbers = exports.is_Array = exports.isPalindrom = exports.checkSentenceLength = exports.sum = void 0;
const sum = (a, b) => a + b;
exports.sum = sum;
// console.log('sum(1,2) =', sum(1,2))
const checkSentenceLength = (sentence) => sentence.length;
exports.checkSentenceLength = checkSentenceLength;
// console.log(checkSentenceLength('test'))
const isPalindrom = (sentence) => {
    const reverseSentence = sentence.split('').reverse().join('');
    const checkPalindrom = sentence === reverseSentence;
    return checkPalindrom;
};
exports.isPalindrom = isPalindrom;
// console.log(isPalindrom('kayak'));
const is_Array = (value) => {
    return Array.isArray(value);
};
exports.is_Array = is_Array;
// console.log(is_Array([1,2]));
const isArrayOfNumbers = (arr) => {
    return arr.every(value => typeof (value) === 'number');
};
exports.isArrayOfNumbers = isArrayOfNumbers;
const isArrayOfWords = (arr) => {
    return arr.every(value => typeof (value) === 'string');
};
exports.isArrayOfWords = isArrayOfWords;
const highestNumberInArray = (arr) => {
    let highest = 0;
    for (let value of arr) {
        highest < value ? highest = value : '';
    }
    return highest;
};
exports.highestNumberInArray = highestNumberInArray;
const highestWordInArray = (arr) => {
    let highest = '';
    for (let value of arr) {
        highest.length < value.length ? highest = value : '';
    }
    return highest;
};
exports.highestWordInArray = highestWordInArray;
const highestValueInArray = (arr) => {
    if (arr.length == 0)
        return 'empty array';
    else {
        if (isArrayOfWords(arr)) {
            return highestWordInArray(arr);
        }
        return highestNumberInArray(arr);
    }
};
exports.highestValueInArray = highestValueInArray;
