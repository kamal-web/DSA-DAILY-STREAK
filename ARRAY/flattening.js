const arr = [1,2,[3,4,5,[6,7],8],9,10];

//Bruteforce
function flattenArrayBruteforce(input){
    let result = [];
    for(const item of input){
        if(Array.isArray(item)){
            result = result.concat(flattenArrayBruteforce(item));
        }else{
            result.push(item);
        }
    }
    return result;
}

console.log('flattenArrayBruteforce', flattenArrayBruteforce(arr));
//without concat
function flattenArrayOptimized(input, result=[]){
    for(const item of input){
        if(Array.isArray(item)){
            flattenArrayOptimized(item, result);
        }else{
            result.push(item);
        }
    }
    return result;
}

console.log('flattenArrayOptimised', flattenArrayOptimized(arr));

//with builtin function flat()
const flattenArray = arr.flat(Infinity);
console.log('FlattenArrayWithFlat', flattenArray);
