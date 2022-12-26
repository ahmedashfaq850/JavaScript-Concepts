// this question is solved using currying 

function addInfinite(a){
    return function (b){
        if (b) return addInfinite(a+b);
        return a;
    }
}

const res = addInfinite(2)(2)(3)(4)()
console.log(res)



