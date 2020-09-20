const irregular_dictionary = require('./irregulars/irregulars_dictionary')

const subjunctive_present = require('./tenses/subjunctive/present');
const subjunctive_present_perfect = require('./tenses/subjunctive/present_perfect');
const subjunctive_pluperfect = require('./tenses/subjunctive/pluperfect');
const subjunctive_imperfect = require('./tenses/subjunctive/imperfect');
const subjunctive_imperfect_se = require('./tenses/subjunctive/imperfect_se');
const subjunctive_future = require('./tenses/subjunctive/future');

const indicative_present = require('./tenses/indicative/present');
const indicative_preterite = require('./tenses/indicative/preterite');
const indicative_present_perfect = require('./tenses/indicative/present_perfect');
const indicative_past_perfect = require('./tenses/indicative/past_perfect');
const indicative_past_anterior = require('./tenses/indicative/past_anterior');
const indicative_imperfect = require('./tenses/indicative/imperfect');
const indicative_future = require('./tenses/indicative/future');
const indicative_future_perfect = require('./tenses/indicative/future_perfect');

const affirmative = require('./tenses/imperative/affirmative');
const negative = require('./tenses/imperative/negative');

const conditional_perfect = require('./tenses/conditional/perfect');
const conditional_simple_conditional = require('./tenses/conditional/simple_conditional');

function SpanishConjugator(rootverb,tense,mood,pronoun) {
    // Make all inputs lower case
    //console.log(irregular_dictionary.irregulars_dictionary.rootverb)
    // Initiates Variables
    var conjugate;
    var conjugation;
    // Queries Irregular database
    try {
        //let my_irregulars = irregular_dictionary.irregulars_dictionary;
        let conjugation = irregular_dictionary.irregulars_dictionary[rootverb][mood][tense][pronoun];
        return conjugation;
    } catch (error) {
        //------------------------ Indicitive
        //------------------------ Indicitive / Present
        if(tense == "present"){
            if(mood == "indicative"){
                conjugate = indicative_present.indicative_present;
            }
        }
        //------------------------ Indicitive / Imperfect
        if(tense == "imperfect"){
            if(mood == "indicative"){
                conjugate = indicative_imperfect.indicative_imperfect;
            }
        }
        //------------------------ Indicitive / Preterite
        if(tense == "preterite"){
            if(mood == "indicative"){
                conjugate = indicative_preterite.indicative_preterite;
            }
        }
        //------------------------ Indicitive / Future Simple
        if(tense == "future"){
            if(mood == "indicative"){
                conjugate = indicative_future.indicative_future;
            }
        }
        //------------------------ Indicitive / Present Perfect Compound Tense
        if(tense == "present_perfect"){
            if(mood == "indicative"){
                conjugate = indicative_present_perfect.indicative_present_perfect;
            }
        }
        //------------------------ Indicitive / Past Perfect Compound Tense
        if(tense == "past_perfect"){
            if(mood == "indicative"){
                conjugate = indicative_past_perfect.indicative_past_perfect;
            }
        }
        //------------------------ Indicitive / Past Anterior Compound Tense
        if(tense == "past_anterior"){
            if(mood == "indicative"){
                conjugate = indicative_past_anterior.indicative_past_anterior;
            }
        }
        //------------------------ Indicitive / Future Perfect Compound Tense
        if(tense == "future_perfect"){
            if(mood == "indicative"){
                conjugate = indicative_future_perfect.indicative_future_perfect;
            }
        }
        //------------------------ Conditional
        //------------------------ Conditional / Simple Conditional
        if(tense == "simple_conditional"){
            if(mood == "conditional"){
                conjugate = conditional_simple_conditional.conditional_simple_conditional;
            }
        }
        //------------------------ Conditional / Perfect 
        if(tense == "perfect"){
            if(mood == "conditional"){
                conjugate = conditional_perfect.conditional_perfect;
            }
        }
        //------------------------ Imperitive
        //------------------------ Imperitive / Affirmative
        if(tense == "affirmative"){
            if(mood == "imperitive"){
                conjugate = affirmative.affirmative;
            }
        }
        //------------------------ Imperitive / Negative
        if(tense == "negative"){
            if(mood == "imperative"){
                conjugate = negative.negative;
            }
        }
        //------------------------ Subjunctive
        //------------------------ Subjunctive / Present
        if(tense == "present"){
            if(mood == "subjunctive"){
                conjugate = subjunctive_present.subjunctive_present;
            }
        }
        //------------------------ Subjunctive / Present Perfect
        if(tense == "present_perfect"){
            if(mood == "subjunctive"){
                conjugate = subjunctive_present_perfect.subjunctive_present_perfect;
            }
        }
        //------------------------ Subjunctive / Pluperfect
        if(tense == "pluperfect"){
            if(mood == "subjunctive"){
                conjugate = subjunctive_pluperfect.subjunctive_pluperfect;
            }
        }
        //------------------------ Subjunctive / Future Perfect
        if(tense == "future_perfect"){
            if(mood == "subjunctive"){
                conjugate = subjunctive_future_perfect.subjunctive_future_perfect;
            }
        }
        //------------------------ Subjunctive / Imperfect
        if(tense == "imperfect"){
            if(mood == "subjunctive"){
                conjugate = subjunctive_imperfect.subjunctive_imperfect;
            }
        }
        //------------------------ Subjunctive / Imperfect se
        if(tense == "imperfect_se"){
            if(mood == "subjunctive"){
                conjugate = subjunctive_imperfect_se.subjunctive_imperfect_se;
            }
        }
        //------------------------ Subjunctive / Future
        if(tense == "future"){
            if(mood == "subjunctive"){
                conjugate = subjunctive_future.subjunctive_future;
            }
        }

        try {
            conjugation = conjugate(rootverb,pronoun);
            return conjugation;
        } catch (error) {
            return 'Error, unable to conjugate, please either submit issue or double check docs';
        }
    }
}


module.exports.SpanishConjugator = SpanishConjugator;