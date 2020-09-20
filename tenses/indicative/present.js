function indicative_present(rootverb,pronoun) {
    if(pronoun=="yo"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'o';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'o';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'o';
            return conjugation;
        }
    }
    if(pronoun=="tu"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'as';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'es';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'es';
            return conjugation;
        }
    }
    if(pronoun=="usted"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'a';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'e';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'e';
            return conjugation;
        }
    }
    if(pronoun == "nosotros"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'amos';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'emos';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'imos';
            return conjugation;
        }
    }
    if(pronoun == "vosotros"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'áis';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'éis';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'is';
            return conjugation;
        }
    }
    if(pronoun=="ustedes"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'an';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'en';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'en';
            return conjugation;
        }
    }
    else{
        return 'Conjugation not found, please recheck documentation or submit an issue'
    }
}

module.exports.indicative_present = indicative_present;