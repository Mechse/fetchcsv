import { parseCsv } from "./deps.ts";

export const fetchCSV = async (url: string, encoding = 'utf-8', seperator = ',') => {
    const decoder = new TextDecoder(encoding)
    const file = await (await fetch(url)).arrayBuffer();
    const content = await parseCsv(decoder.decode(file), {separator: seperator});
    return content;
}