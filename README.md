# Cleasby & Vigfusson Dictionary

The Cleasby &amp; Vigfusson Old Norse to English Dictionary for Node.js. The dictionary consists of 35 000+ Old Norse words with English translations.

Based on the classic dictionary by Richard Cleasby and Gudbrand Vigfusson.


### Install

`yarn add cleasby-vigfusson-dictionary`

Or just copy json source file from `/json` folder in source.


### Use JSON files programmatically

The project provides a getter for the data. You can use it in your script to populate your own database or otherwise use the data.

```javascript
const { getDictionary } = require('cleasby-vigfusson-dictionary')

// Whole dictionary as array.
const dictionary = getDictionary()

// Get words starting with letter A
const aWords = dictionary.filter((entry) => entry.word.charAt(0) === 'a')

console.log(aWords)

```

Individual words are returned in format of:

```javascript
{
    word: String
    definitions: [String]
}
```


### About Cleasby & Vigfusson Dictionary

"Icelandic-English" dictionary was started by Richard Cleasby and finished by Gudbrand Vigfusson. It was published in 1874, which leads to there being many public domain versions of the book available.

