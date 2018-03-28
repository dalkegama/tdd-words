import { TddWords } from './tdd-words';
import { expect } from 'chai';
import 'mocha';


describe('String Calculator', () => {
    let words;

    beforeEach(() => {
        words = new TddWords;
    })

    it('should return zero when input string is null', () => {
        expect(words.countWords(null)).to.equal(0);
    });

    it('should return zero when input string is empty', () => {
        expect(words.countWords('')).to.equal(0);
    });

    it('should return zero when input string consists whitespaces', () => {
        expect(words.countWords(' \n\n\t\r ')).to.equal(0);
    });

    it('should return 1 when input string is a single word', () => {
        expect(words.countWords('Hello')).to.equal(1);
    });

    it('should return 2 when input string is Two words and separated by a space', () => {
        expect(words.countWords('Hello world')).to.equal(2);
    });

    it('should return 1 when input string is surrounded by any whitespaces', () => {
        expect(words.countWords('  \nHello  \r ')).to.equal(1);
    });

    it('should return 3 when input string is separated by any whitespace(s)', () => {
        expect(words.countWords('Hello crazy \n  world')).to.equal(3);
    });

    // xit('should return 3 when input string count only unique words', () => {
    //     expect(words.countWords('Hello world in world')).to.equal(3);
    // });

});