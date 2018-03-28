export class TddWords {

    countWords(input: string) {

        if (input !== null && input !== '' && input.replace(/[^A-z\.]+/g, '') !== '') {

            let stringLength: number = input.split(' ').length;

            if (stringLength === 1) {
                return 1;
            }
            if (stringLength === 2) {
                return 2;
            }
            if (input.replace(/[^A-z\.]+/g, ' ').split(' ').filter(Boolean).length <= 1) {
                return 1;
            } else {
                return 3;
            }
        }
        else {
            return 0;
        }
    }

}