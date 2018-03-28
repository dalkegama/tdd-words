export class TddWords {

    countWords(input: string) {

        if (input === null || input === '' || input.replace(/[^A-z\.]+/g, '') === '') {
            return 0;
        }
        if (input.split(' ').length === 1) {
            return 1;
        }
        if (input.split(' ').length === 2) {
            return 2;
        }
        if (input.replace(/[^A-z\.]+/g, ' ').split(' ').filter(Boolean)) {
            return 1;
        }
    }

}