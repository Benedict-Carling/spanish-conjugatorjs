function subjunctive_future(rootverb,pronoun) {
    if(pronoun=="yo"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'are';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'iere';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'iere';
            return conjugation;
        }
    }
    if(pronoun=="tu"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ares';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ieees';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ieres';
            return conjugation;
        }
    }
    if(pronoun=="usted"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'are';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'iere';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'iere';
            return conjugation;
        }
    }
    if(pronoun == "nosotros"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'áremos';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'iéremos';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'iéremos';
            return conjugation;
        }
    }
    if(pronoun == "vosotros"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'areis';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'iereis';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'iereis';
            return conjugation;
        }
    }
    if(pronoun=="ustedes"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'aren';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ieren';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ieren';
            return conjugation;
        }
    }
    else{
        return 'Conjugation not found, please recheck documentation or submit an issue'
    }
}

console.log(subjunctive_future("hablar","usted"))

module.exports.subjunctive_future = subjunctive_future;