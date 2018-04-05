export class TddWords {

    countWords(input: string) {
        const validInput = input !== null && input !== '' && input.trim() !== '';

        if (validInput) {

            const normalizedStr = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const inputStringAsArray: string[] = normalizedStr.replace(/[^A-z0-9\.]+/g, ' ').split(' ').filter(Boolean);

            let replaceCapsToSimple = (word): string => {
                return word.replace(/[A-Z]/g, (match, offset, string) =>
                    (offset > 0 ? '' : '') + match.toLowerCase());
            }
            let lowerCaseWordList = replaceCapsToSimple(inputStringAsArray.join(' ')).split(' ');
            let uniqueStringList = (): string[] => (
                lowerCaseWordList.filter((value, index, array) => array.indexOf(value) === index)
            );

            return uniqueStringList().length;
        }
        else {
            return 0;
        }
    }

}