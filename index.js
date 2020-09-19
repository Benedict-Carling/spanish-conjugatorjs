const irregular_dictionary = require('./irregulars/irregulars_dictionary')
const subjunctive_present = require('./tenses/subjunctive/present');

function SpanishConjugator(rootverb,tense,mood,pronoun) {
    // Make all inputs lower case
    //console.log(irregular_dictionary.irregulars_dictionary.rootverb)
    // Queries Irregular database
    try {
        //let my_irregulars = irregular_dictionary.irregulars_dictionary;
        let conjugation = irregular_dictionary.irregulars_dictionary[rootverb][mood][tense][pronoun];
        return conjugation;
    } catch (error) {
        //Add all tenses
        return subjunctive_present.subjunctive_present("hablar","yo");
    }
}

console.log(SpanishConjugator("hablar","present","subjunctive","yo"));
console.log(SpanishConjugator("ir","present","indicitive","yo"));

module.exports.SpanishConjugator = SpanishConjugator;