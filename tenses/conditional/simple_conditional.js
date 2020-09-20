function conditional_simple_conditional(rootverb,pronoun) {
    if(pronoun=="yo"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb + 'ía';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb + 'ía';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb + 'ía';
            return conjugation;
        }
    }
    if(pronoun=="tu"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb + 'ías';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb + 'ías';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb + 'ías';
            return conjugation;
        }
    }
    if(pronoun=="usted"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb + 'ía';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb + 'ía';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb + 'ía';
            return conjugation;
        }
    }
    if(pronoun == "nosotros"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb + 'íamos';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb + 'íamos';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb + 'íamos';
            return conjugation;
        }
    }
    if(pronoun == "vosotros"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb + 'íais';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb + 'íais';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb + 'íais';
            return conjugation;
        }
    }
    if(pronoun=="ustedes"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb + 'ían';
            return conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb + 'ían';
            return conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb + 'ían';
            return conjugation;
        }
    }
    else{
        return 'Conjugation not found, please recheck documentation or submit an issue'
    }
}

module.exports.conditional_simple_conditional = conditional_simple_conditional;