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

## Developing - Cloning
if you would like to help develop spanish-conjugatorjs, follow succeeding code

Whilst in command line create a folder in which you would like to work (name only reccommended)

Clone Spanish-Conjugator

`$ git clone https://github.com/Benedict-Carling/spanish-conjugator.git`

Install developer dependencies for unit test e.g Jest

`$ npm install --dev`

## Developing - Testing

We have chosen to use the library Jest for our unit tests
we can check the code works by running it against out current unit tests located in the `index.test.js` file with the command:

`$ npm test`

## Developing - Submission

To submit code to this repositry please fork and submit a pull request 🚀
