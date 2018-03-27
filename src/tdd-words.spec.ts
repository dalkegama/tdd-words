import { TddWords } from './tdd-words';
import { expect } from 'chai';
import 'mocha';


describe('String Calculator', () => {
    let words;

    beforeEach(() => {
        words = new TddWords;
    })

    it('should return zero when input is null', () => {
        expect(words.add(null)).to.equal(0);
    });

});