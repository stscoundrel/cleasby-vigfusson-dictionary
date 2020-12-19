const { getDictionary, getNoMarkupDictionary } = require('../index.js')

describe('Dictionary: with formatting', () => {
  test('Returns dictionary in array format', () => {
    const result = getDictionary()

    expect(Array.isArray(result)).toBeTruthy()
  })

  test('Dictionary contains expected content', () => {
    const result = getDictionary()

    expect(result[1].word).toBe('-ærr')
    expect(result[1].definitions[0]).toBe('adj. <i>-oared;</i> in compds.')

    expect(result[30789].word).toBe('troðningr')
    expect(result[1989].definitions[0]).toBe('and <strong>ættbogi,</strong> a, m. <i>lineage,</i> Landn. 357, Eluc. 26, Stj. 425, Fms. i. 287, Post. 686 B. 14.')
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

    const sortedDictionry = [...maybeUnsorted].sort((a, b) => a.word.localeCompare(b.word))

    expect(maybeUnsorted).toEqual(sortedDictionry)
  })
})

describe('Dictionary: without formatting', () => {
  test('Returns dictionary in array format', () => {
    const result = getNoMarkupDictionary()

    expect(Array.isArray(result)).toBeTruthy()
  })

  test('Dictionary contains expected content', () => {
    const result = getNoMarkupDictionary()

    expect(result[1].word).toBe('-ærr')
    expect(result[1].definitions[0]).toBe('adj. -oared; in compds.')

    expect(result[30789].word).toBe('troðningr')
    expect(result[1989].definitions[0]).toBe('and ættbogi, a, m. lineage, Landn. 357, Eluc. 26, Stj. 425, Fms. i. 287, Post. 686 B. 14.')
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

    const sortedDictionry = [...maybeUnsorted].sort((a, b) => a.word.localeCompare(b.word))

    expect(maybeUnsorted).toEqual(sortedDictionry)
  })
})
