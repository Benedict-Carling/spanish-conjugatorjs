const { TestScheduler } = require('jest')
const SpanishConjugator = require('./index')

test("Irregulars verbs are found",()=>{
    let expected = SpanishConjugator.SpanishConjugator("ir","present","indicitive","yo");
    expect(expected).toBe('voy')
})

test("testing subjunctive present",()=>{
    let expected = SpanishConjugator.SpanishConjugator("hablar","present","subjunctive","yo");
    expect(expected).toBe('hable')
})