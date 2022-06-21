//return the result of the two numbers having that operator used on them. The four operators are "add", "subtract", "divide", "multiply". Try to do it without using if statements!

function arithmetic(a, b, operator){
    let pairs = {'add': '+','subtract':'-','multiply':'*','divide':'/'}
    return eval(a + pairs[operator] + b)
    }