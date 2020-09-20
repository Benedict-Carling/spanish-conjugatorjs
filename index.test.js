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

test("error message",()=>{
    let error_message = 'Error, unable to conjugate, please either submit issue or double check docs'
    let output = SpanishConjugator.SpanishConjugator("vdvd","vdvd","vdvd","vdvd")
    expect(error_message).toBe(output)
})