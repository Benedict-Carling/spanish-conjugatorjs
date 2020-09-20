function conditional_perfect(rootverb,pronoun) {
    if(pronoun=="yo"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'habría ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habría ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habría ' + conjugation;
        }
    }
    if(pronoun=="tu"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'habrías ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habrías ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habrías ' + conjugation;
        }
    }
    if(pronoun=="usted"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'habría ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habría ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habría ' + conjugation;
        }
    }
    if(pronoun == "nosotros"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'habríamos ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habríamos ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habríamos ' + conjugation;
        }
    }
    if(pronoun == "vosotros"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'habríais ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habríais ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habríais ' + conjugation;
        }
    }
    if(pronoun=="ustedes"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'habrían ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habrían ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habrían ' + conjugation;
        }
    }
    else{
        return 'Conjugation not found, please recheck documentation or submit an issue'
    }
}

console.log(conditional_perfect("hablar","usted"))

module.exports.conditional_perfect = conditional_perfect;