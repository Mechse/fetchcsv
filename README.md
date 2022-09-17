# fetchcsv
A simple third-party Deno module to fetch &amp; parse a csv file.

Default encoding: 'utf-8'

Default seperator: ','


```
import { fetchCSV } from 'https://deno.land/x/fetchcsv';

const data = await fetchCSV(url, encoding, seperator);
```
