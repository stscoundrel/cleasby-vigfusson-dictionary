const { oldNorseSort } = require('old-norse-alphabet-sort')
const { getDictionary, getNoMarkupDictionary } = require('../index')

describe('Dictionary: with formatting', () => {
  test('Returns dictionary in array format', () => {
    const result = getDictionary()

    expect(Array.isArray(result)).toBeTruthy()
  })

  test('Dictionary contains expected content', () => {
    const result = getDictionary()

    expect(result[1].word).toBe('abbadís')
    expect(result[1].definitions[0]).toBe('f. <i>abbess.</i> Hkr. iii. 398, Fms. vii. 239, Gþl. 365.')

    expect(result[30789].word).toBe('undan-bragð')
    expect(result[1989].definitions[0]).toBe('adj. <i>greedy, voracious,</i> Hkv. 2. 41.')
  })

  test('Dictionary contains 35 207 words', () => {
    const result = getDictionary()

    expect(result.length).toBe(35207)
  })

  test('Dictionary does not contain malformatted numeral definitions', () => {
    const dictionary = getDictionary()

    const malformatted = ['<strong>1.</strong>', '<strong>2.</strong>', '<strong>3.</strong>']

    let hasMalformatted = false

    dictionary.forEach((entry) => {
      entry.definitions.forEach((definition) => {
        if (malformatted.includes(definition)) {
          hasMalformatted = true
        }
      })
    })

    expect(hasMalformatted).toBeFalsy()
  })

  test('Dictionary entries are alphabetically sorted', () => {
    const maybeUnsorted = getDictionary()

    const sortedDictionry = [...maybeUnsorted].sort((a, b) => (
      oldNorseSort(a.word, b.word)))

    expect(maybeUnsorted).toEqual(sortedDictionry)
  })

  test('Dictionary entries do not start with dash (-)', () => {
    const dictionary = getDictionary()

    let hasDashStarts = false

    dictionary.forEach((entry) => {
      if (entry.word.charAt(0) === '-') {
        hasDashStarts = true
      }
    })

    expect(hasDashStarts).toBeFalsy()
  })
})

describe('Dictionary: without formatting', () => {
  test('Returns dictionary in array format', () => {
    const result = getNoMarkupDictionary()

    expect(Array.isArray(result)).toBeTruthy()
  })

  test('Dictionary contains expected content', () => {
    const result = getNoMarkupDictionary()

    expect(result[1].word).toBe('abbadís')
    expect(result[1].definitions[0]).toBe('f. abbess. Hkr. iii. 398, Fms. vii. 239, Gþl. 365.')

    expect(result[30789].word).toBe('undan-bragð')
    expect(result[1989].definitions[0]).toBe('adj. greedy, voracious, Hkv. 2. 41.')
  })

  test('Dictionary entries do not contain HTML markup.', () => {
    const dictionary = getNoMarkupDictionary()

    const html = ['<strong>', '</strong', '<i>', '</i>']

    let hasHTML = false

    dictionary.forEach((entry) => {
      html.forEach((element) => {
        if (entry.word.includes(element)) {
          hasHTML = true
        }

        entry.definitions.forEach((definition) => {
          if (definition.includes(element)) {
            hasHTML = true
          }
        })
      })
    })

    expect(hasHTML).toBeFalsy()
  })

  test('Dictionary contains 35 207 words', () => {
    const result = getNoMarkupDictionary()

    expect(result.length).toBe(35207)
  })

  test('Dictionary does not contain malformatted numeral definitions', () => {
    const dictionary = getNoMarkupDictionary()

    const malformatted = ['1.', '2.', '3.']

    let hasMalformatted = false

    dictionary.forEach((entry) => {
      entry.definitions.forEach((definition) => {
        if (malformatted.includes(definition)) {
          hasMalformatted = true
        }
      })
    })

    expect(hasMalformatted).toBeFalsy()
  })

  test('Dictionary entries are alphabetically sorted', () => {
    const maybeUnsorted = getNoMarkupDictionary()

    const sortedDictionry = [...maybeUnsorted].sort((a, b) => (
      oldNorseSort(a.word, b.word)))

    expect(maybeUnsorted).toEqual(sortedDictionry)
  })

  test('Dictionary entries do not start with dash (-)', () => {
    const dictionary = getNoMarkupDictionary()

    let hasDashStarts = false

    dictionary.forEach((entry) => {
      if (entry.word.charAt(0) === '-') {
        hasDashStarts = true
      }
    })

    expect(hasDashStarts).toBeFalsy()
  })
})
