function grade(score){
    if (score < 0)
        throw new Error("Grade cannot be negative");
    if (score >= 95 && score <=100)
        return 'AP';
    else if (score >= 85 && score < 95)
        return 'AA';
    else if (score >= 75 && score < 85)
        return 'AB';
    else if (score >= 70 && score < 75)
        return 'BB';
    else if (score >= 60 && score < 70)
        return 'BC';
    else if (score >= 50 && score < 60)
        return 'CC';
    else if (score >= 45 && score < 50)
        return 'CD';
    else if (score >= 40 && score < 45)
        return 'DD';
    else if (score >= 0 && score < 40)
        return 'FF';
}

function scaleTo100(score, total){
    var multiplying_factor = 100 * total;
    return score * multiplying_factor;
}

function score(grade){
    var grade_score_mapping = {
        'AP': 10,
        'AA': 10,
        'AB': 9,
        'BB': 8,
        'BC': 7,
        'CC': 6,
        'CD': 5,
        'DD': 4,
        'FF': 0
    };
    return grade_score_mapping[grade];
}

class SubMarks {
    constructor(name, marks, total, credits){
        this.name = name;
        this.scores = score(grade(scaleTo100(marks, total)));
        this.credits = credits;
    }

    get cg() {
        return this.credits * this.scores;
    }
}

function sgpi(marks){
    var credits = 0;
    var cgs = 0;
    for(var i = 0; i < marks.length; i++){
        var mark = marks[i];
        credits += mark.credits;
        cgs += mark.cg();
    }
    return cgs / credits;
}
