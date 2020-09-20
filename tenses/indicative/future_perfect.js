function indicative_future_perfect(rootverb,pronoun) {
    if(pronoun=="yo"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'habré ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habré ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habré ' + conjugation;
        }
    }
    if(pronoun=="tu"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'habrás ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habrás ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habrás ' + conjugation;
        }
    }
    if(pronoun=="usted"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'habrá ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habrá ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habrá ' + conjugation;
        }
    }
    if(pronoun == "nosotros"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'habremos ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habremos ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habremos ' + conjugation;
        }
    }
    if(pronoun == "vosotros"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'habréis ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habréis ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habréiss ' + conjugation;
        }
    }
    if(pronoun=="ustedes"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'habrán ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habrán ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'habrán ' + conjugation;
        }
    }
    else{
        return 'Conjugation not found, please recheck documentation or submit an issue'
    }
}

module.exports.indicative_future_perfect = indicative_future_perfect;