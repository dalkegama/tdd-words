export class TddWords {

    countWords(input: string) {
        const validInput = input !== null && input !== '' && input.replace(/[^A-z\.]+/g, '') !== '';

        if (validInput) {

            const normalizedStr = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const stringAsArray: any[] = normalizedStr.replace(/[^A-z0-9\.]+/g, ' ').split(' ').filter(Boolean);
            const cleanedUniqueArray: any[] = stringAsArray.join(' ').replace(/\b[A-Z].*?\b/g, '').split(' ').filter(Boolean);

            let uniqueWords = (): any[] => (
                stringAsArray.filter((value, index, array) => array.indexOf(value) === index)
            );

            if (uniqueWords()) {
                if (stringAsArray.length === 2) {
                    return 2;
                }
                if (cleanedUniqueArray.length > 0 && !(/[0-9\r?\n|\r]/).test(normalizedStr)) {
                    return cleanedUniqueArray.length;
                }
                return uniqueWords().length;
            }
        }
        else {
            return 0;
        }
    }
}