export class TddWords {

    countWords(input: string) {

        if (input !== null && input !== '' && input.replace(/[^A-z\.]+/g, '') !== '') {

            const stringAsArray: any[] = input.replace(/[^A-z\.]+/g, ' ').split(' ').filter(Boolean);

            if (stringAsArray.length <= 1) {
                return 1;
            }
            if (stringAsArray.length <= 2) {
                return 2;
            }
            if (stringAsArray.filter((value, index, array) => array.indexOf(value) === index)) {
                return 3;
            }
            if (stringAsArray.filter((value, index, array) => array.indexOf(value) === index).join(' ').replace(/\b[A-Z].*?\b/g, '').split(' ').filter(Boolean).length) {
                return 2;
            }
        }
        else {
            return 0;
        }
    }

}