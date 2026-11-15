function sieveOfEratosthenes(n){
    const AllNumbers = new Array(n+1).fill(true);
    AllNumbers[0]=AllNumbers[1] = false;

    for(let i=2;i*i<n;i++){
        if(AllNumbers[i]){
            for(let j=i*i;j<=n;j+=i){
                AllNumbers[j]=false;
            }
        }
    }
    const result = AllNumbers.reduce((acc, item, idx)=>{
        if(item){
            acc.push(idx);
        }
        return acc;
    },[]);
    return result;
}

let input = 10;
console.log('PrimeNumbers below',input, sieveOfEratosthenes(input));
input = 20;
console.log('PrimeNumbers below',input, sieveOfEratosthenes(input));
input = 30;
console.log('PrimeNumbers below',input, sieveOfEratosthenes(input));
input = 40;
console.log('PrimeNumbers below',input, sieveOfEratosthenes(input));
input = 50;
console.log('PrimeNumbers below',input, sieveOfEratosthenes(input));