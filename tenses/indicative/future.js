function indicative_future(rootverb,pronoun) {
    if(pronoun=="yo"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb + 'é';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb + 'é';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb + 'é';
            return conjugation;
        }
    }
    if(pronoun=="tu"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb + 'ás';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb + 'ás';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb + 'ás';
            return conjugation;
        }
    }
    if(pronoun=="usted"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb + 'á';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb + 'á';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb + 'á';
            return conjugation;
        }
    }
    if(pronoun == "nosotros"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb + 'emos';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb + 'emos';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb + 'emos';
            return conjugation;
        }
    }
    if(pronoun == "vosotros"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb + 'éis';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb + 'éis';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb + 'éis';
            return conjugation;
        }
    }
    if(pronoun=="ustedes"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb + 'án';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb + 'án';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb + 'án';
            return conjugation;
        }
    }
    else{
        return 'Conjugation not found, please recheck documentation or submit an issue'
    }
}

module.exports.indicative_future = indicative_future;