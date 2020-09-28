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

## Exaple usage of different moods/tenses with hablar and yo

### Indicitive Present

```node
SpanishConjugator.SpanishConjugator('hablar','present','indicitive','yo')
>>> hablo
```
### Indicitive Imperfect

```node
SpanishConjugator.SpanishConjugator('hablar','imperfect','indicitive','yo')
>>> hablaba
```
### Indicitive Preterite

```node
SpanishConjugator.SpanishConjugator('hablar','preterite','indicitive','yo')
>>> hablé
```
### Indicitive Future

```node
SpanishConjugator.SpanishConjugator('hablar','future','indicitive','yo')
>>> hablaré
```
### Indicitive Present_Perfect

```node
SpanishConjugator.SpanishConjugator('hablar','present_perfect','indicitive','yo')
>>> he hablado
```
### Indicitive Past_Anterior

```node
SpanishConjugator.SpanishConjugator('hablar','past_anterior','indicitive','yo')
>>> hube hablado
```
### Indicitive Future_Perfect

```node
SpanishConjugator.SpanishConjugator('hablar','future_perfect','indicitive','yo')
>>> habré hablado
```
### Conditional Simple

```node
SpanishConjugator.SpanishConjugator('hablar','simple_conditional','conditional','yo')
>>> hablaría
```
### Conditional Perfect

```node
SpanishConjugator.SpanishConjugator('hablar','perfect','conditional','yo')
>>> habría hablado
```
### Imperitive Afferative

```node
SpanishConjugator.SpanishConjugator('hablar','affirmative','imperitive','tu')
>>> habla
```
### Imperitive Negative

```node
SpanishConjugator.SpanishConjugator('hablar','negative','imperitive','tu')
>>> hables
```
### Subjunctive Present

```node
SpanishConjugator.SpanishConjugator('hablar','present','subjunctive','yo')
>>> hable
```
### Subjunctive Imperfect

```node
SpanishConjugator.SpanishConjugator('hablar','imperfect','subjunctive','yo')
>>> hablara
```
### Subjunctive Imperfect_se

```node
SpanishConjugator.SpanishConjugator('hablar','imperfect_se','subjunctive','yo')
>>> hablase
```
### Subjunctive Future

```node
SpanishConjugator.SpanishConjugator('hablar','future','subjunctive','yo')
>>> hablare
```

# Alternative Versions
Check out the python version of the library if you are working in a python enviroment

https://github.com/Benedict-Carling/spanish-conjugator
