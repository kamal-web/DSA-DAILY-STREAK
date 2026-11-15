let input = [
    {
        name:'PERSONX',
        list:[1,2,3,4,5,6,7]
    },
    {
        name:'PERSONY',
        list:[8,9,10,11,12,13]
    }
]

//expected output
// {
//     PERSONX: [2,3,5,7],
//     PERSONY: [11,13]
// }

function transformObject(arr){
    const isPrime = (n) =>{
        if(n<2) return false;
        for(let i=2;i*i<=n;i++){
            if(n%i === 0){
                return false
            }
        }
        return true;
    }
    const result = arr.reduce((acc, item)=>{
        acc[item.name] = item.list.filter(isPrime)
        return acc;
    },{})

    return result;
}

console.log('formatted output', transformObject(input))