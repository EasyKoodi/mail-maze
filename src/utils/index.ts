import { IContact } from '../@types/types';

export function chunkArray(emails: IContact[], limit: number) {
    const result = emails.reduce(
        (resultArray: IContact[], item: IContact, index: number) => {
            const chunkIndex = Math.floor(index / limit);

            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = []; // start a new chunk
            }

            resultArray[chunkIndex].push(item);
            return resultArray;
        },
        [],
    );

    return result; // result: [['a','b'], ['c','d'], ['e']];
}
