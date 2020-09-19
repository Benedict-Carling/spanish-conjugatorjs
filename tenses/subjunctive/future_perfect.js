function subjunctive_future_perfect(rootverb,pronoun) {
    if(pronoun=="yo"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'hubiere ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'hubiere ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'hubiere ' + conjugation;
        }
    }
    if(pronoun=="tu"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'hubieres ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'hubieres ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'hubieres ' + conjugation;
        }
    }
    if(pronoun=="usted"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'hubiere ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'hubiere ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'hubiere ' + conjugation;
        }
    }
    if(pronoun == "nosotros"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'hubiéremos ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'hubiéremos ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'hubiéremos ' + conjugation;
        }
    }
    if(pronoun == "vosotros"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'hubiereis ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'hubiereis ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'hubiereis ' + conjugation;
        }
    }
    if(pronoun=="ustedes"){
        if(rootverb.slice(-2)=="ar"){
            let conjugation = rootverb.slice(0,-2) + 'ado';
            return 'hubieren ' + conjugation;
        }
        if(rootverb.slice(-2)=="er"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'hubieren ' + conjugation;
        }
        if(rootverb.slice(-2)=="ir"){
            let conjugation = rootverb.slice(0,-2) + 'ido';
            return 'hubieren ' + conjugation;
        }
    }
    else{
        return 'Conjugation not found, please recheck documentation or submit an issue'
    }
}

module.exports.subjunctive_future_perfect = subjunctive_future_perfect;