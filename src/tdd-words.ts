export class TddWords {

    countWords(input: string) {
        const validInput = input !== null && input !== '' && input.replace(/[^A-z\.]+/g, '') !== '';

        if (validInput) {
            // console.log(input);

            const stringAsArray: any[] = input.replace(/[^A-z\.]+/g, ' ').split(' ').filter(Boolean);
            const cleanUniqueArrayLength: any[] = stringAsArray.join(' ').replace(/\b[A-Z].*?\b/g, '').split(' ').filter(Boolean);

            if (stringAsArray.length === 1) {
                return 1;
            }
            if (stringAsArray.length === 2) {
                return 2;
            }
            // if ((/\b[A-Z].*?\b/g).test(stringAsArray.join(' '))) {
            //     return cleanUniqueArrayLength;
            // }
            if (stringAsArray.filter((value, index, array) => array.indexOf(value) === index)) {
                return 3;
            }
        }
        else {
            return 0;
        }
    }

}