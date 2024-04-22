const OPERATIONS = {
    umno: '*',
    minus: '-',
    plus: '+',
    delem: '/',
    stepen: '^',
    koren: '^1/2',
    percent: '%',
    Logarif: 'log()'
}

function claculate({a, b, operation}) {
    let result = null;

switch (operation) {
    case OPERATIONS.plus:
        result = plus(a, b)
        break;
    
    case OPERATIONS.minus:
        result = minus(a, b)
        break;

    case OPERATIONS.umno:
        result = umno(a, b)
        break;

    case OPERATIONS.delem:
        result = delem(a, b)
        break;

    case OPERATIONS.stepen:
        result = stepen(a, b)
        break;    

    case OPERATIONS.koren:
        result = koren(a)
        break;

    case OPERATIONS.percent:
        result = percent(a)
        break;    

    case OPERATIONS.Logarif:
    result = Logarif(a)
    break;       

    default:
        break;
}
    return result;
}