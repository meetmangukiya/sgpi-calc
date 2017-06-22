function grade(score){
    if (score < 0)
        throw -1;
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
