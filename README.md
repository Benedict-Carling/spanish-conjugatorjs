# Spanish Conjugator JS 🇪🇸
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Benedict-Carling/spanish-conjugatorjs/Node.js%20CI)
![npm](https://img.shields.io/npm/v/spanishconjugator)
![npm](https://img.shields.io/npm/dm/spanishconjugator)
![GitHub top language](https://img.shields.io/github/languages/top/Benedict-Carling/spanish-conjugatorjs)
![GitHub repo size](https://img.shields.io/github/repo-size/Benedict-Carling/spanish-conjugatorjs)

A npm package to conjugate spanish verbs by mood, tense and pronoun.

## Installation

`npm i spanishconjugator`

## Example usage

Example node usage; the `conjugate` function takes 4 parameters being root-verb, tense, mood, pronoun respectively  
```node
const SpanishConjugator = require('spanishconjugator');
let conjugation = SpanishConjugator.SpanishConjugator('hablar','imperfect','indicitive','yo');
console.log(conjugation);
>>> hablaba
```

## Tenses, Moods and Pronouns implemented

All pronouns are implemented
```yo, tu, usted, nosotros, vosotros, ustedes```

All moods currently implemented are
```indicitive, conditional```

All tenses currently implemented are
```present, imperfect, preterite, future, present_perfect, past_anterior, future_perfect, conditional_simple```
