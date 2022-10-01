# Cleasby & Vigfusson Dictionary

The Cleasby &amp; Vigfusson Old Norse to English Dictionary for Node.js. The dictionary consists of 35 000+ Old Norse words with English translations.

Based on the classic dictionary by Richard Cleasby and Gudbrand Vigfusson. If you find this one too abbreviated, academic or hard to read, you might want to check out [A Concise Dictionary of Old Icelandic](https://github.com/stscoundrel/old-icelandic-zoega)

Related projects:
- [Cleasby & Vigfusson Dictionary in Next.js](https://github.com/stscoundrel/cleasby-vigfusson-next).
- [Cleasby & Vigfusson Abbreviations](https://github.com/stscoundrel/cleasby-vigfusson-abbreviations).
- [Cleasby & Vigfusson Gatsby Source Plugin](https://github.com/stscoundrel/gatsby-source-cleasby-vigfusson)

Other language ports:
- [Python](https://github.com/stscoundrel/old-norse-dictionary-py)
- [Rust](https://github.com/stscoundrel/cleasby-vigfusson-dictionary-rs)
- [C# / .NET](https://github.com/stscoundrel/old-norse-dictionary-cs)


### Install

`yarn add cleasby-vigfusson-dictionary`

Or just copy json source file from `/json` folder in source.

#### Usage with TypeScript

The dictionary has types available via [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

`yarn add @types/cleasby-vigfusson-dictionary`

#### Use JSON files programmatically

The project provides a getter for the data. You can use it in your script to populate your own database or otherwise use the data.

##### Default dictionary with formatting.

```javascript
const { getDictionary } = require('cleasby-vigfusson-dictionary')

/**
 * Whole dictionary as array.
 * Contains <strong> and <i> HTML tags
 * to match the layout of the printed book.
 */
const dictionary = getDictionary()


// Get words starting with letter A
const aWords = dictionary.filter((entry) => entry.word.charAt(0) === 'a')

console.log(aWords)

```

##### Version without any markup.

```javascript
const { getNoMarkupDictionary } = require('cleasby-vigfusson-dictionary')

// Same array, but no formatting with HTML tags.
const dictionary = getNoMarkupDictionary()

// Get words starting with letter B
const bWords = dictionary.filter((entry) => entry.word.charAt(0) === 'b')

console.log(bWords)

```

Individual words are returned in format of:

```javascript
{
    word: string
    definitions: string[]
}
```


### About Cleasby & Vigfusson Dictionary

"Icelandic-English" dictionary was started by Richard Cleasby and finished by Gudbrand Vigfusson. It was published in 1874, which leads to there being many public domain versions of the book available.

