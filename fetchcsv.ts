import { parseCsv } from "./deps.ts";

/*
v0.2
*/

export const fetchCSV = async (url: string, encoding = 'utf-8', seperator = ',') => {
    const decoder = new TextDecoder(encoding)
    const file = await (await fetch(url)).arrayBuffer();
    try {
        const content = await parseCsv(decoder.decode(file), {separator: seperator});
        return content;
    } catch (e) {
        console.log("An error occured while trying to parse the csv file.");
        console.error(e);
    }
    return [];
}