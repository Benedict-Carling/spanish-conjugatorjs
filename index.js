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
        //------------------------ Indicitive
        //------------------------ Indicitive / Present
        if(tense == "present"){
            if(mood == "indicitive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Indicitive / Imperfect
        if(tense == "imperfect"){
            if(mood == "indicitive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Indicitive / Preterite
        if(tense == "preterite"){
            if(mood == "indicitive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Indicitive / Future Simple
        if(tense == "future"){
            if(mood == "indicitive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Indicitive / Present Perfect Compound Tense
        if(tense == "present_perfect"){
            if(mood == "indicitive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Indicitive / Past Perfect Compound Tense
        if(tense == "past_perfect"){
            if(mood == "indicitive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Indicitive / Past Anterior Compound Tense
        if(tense == "past_anterior"){
            if(mood == "indicitive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Indicitive / Future Perfect Compound Tense
        if(tense == "future_perfect"){
            if(mood == "indicitive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Conditional
        //------------------------ Conditional / Simple Conditional
        if(tense == "simple_conditional"){
            if(mood == "conditional"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Conditional / Perfect 
        if(tense == "perfect"){
            if(mood == "conditional"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Imperitive
        //------------------------ Imperitive / Affirmative
        if(tense == "affirmative"){
            if(mood == "imperitive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Imperitive / Negative
        if(tense == "negative"){
            if(mood == "imperitive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Subjunctive
        //------------------------ Subjunctive / Present
        if(tense == "present"){
            if(mood == "subjunctive"){
                let conjugation = subjunctive_present.subjunctive_present(rootverb,pronoun)
                return conjugation
            }
        }
        //------------------------ Subjunctive / Present Perfect
        if(tense == "present_perfect"){
            if(mood == "subjunctive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Subjunctive / Pluperfect
        if(tense == "pluperfect"){
            if(mood == "subjunctive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Subjunctive / Future Perfect
        if(tense == "future_perfect"){
            if(mood == "subjunctive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Subjunctive / Imperfect
        if(tense == "imperfect"){
            if(mood == "subjunctive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Subjunctive / Imperfect se
        if(tense == "imperfect_se"){
            if(mood == "subjunctive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        //------------------------ Subjunctive / Future
        if(tense == "future"){
            if(mood == "subjunctive"){
                let conjugation = 'not implemented yet'
                return conjugation
            }
        }
        return 'Error, unable to conjugate, please either submit issue or double check docs'
    }
}

console.log(SpanishConjugator("hablar","present","subjunctive","yo"));
console.log(SpanishConjugator("ir","present","indicitive","yo"));

module.exports.SpanishConjugator = SpanishConjugator;