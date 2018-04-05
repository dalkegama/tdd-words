export class TddWords {

    countWords(input: string) {
        const validInput: boolean = input !== null && input !== '' && input.trim() !== '';

        if (validInput) {

            const normalizedStr = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const inputStringAsList: string[] = normalizedStr.replace(/[^A-z0-9\.]+/g, ' ').split(' ').filter(Boolean);

            let replaceCapsToSimple = (word: string): string => {
                return word.replace(/[A-Z]/g, (match: any, offset: any, string: string) =>
                    (offset > 0 ? '' : '') + match.toLowerCase());
            }

            let lowerCaseWordList = replaceCapsToSimple(inputStringAsList.join(' ')).split(' ');

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