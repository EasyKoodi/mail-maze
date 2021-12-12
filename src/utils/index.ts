export function chunkArray(emails: string[], limit: number) {
    const result = emails.reduce(
        (resultArray: any, item: string, index: number) => {
            const chunkIndex = Math.floor(index / limit);

            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = []; // start a new chunk
            }

            resultArray[chunkIndex].push(item);
            return resultArray;
        },
        [],
    );
    console.log('result is:', result); // result: [['a','b'], ['c','d'], ['e']]
    return result;
}
