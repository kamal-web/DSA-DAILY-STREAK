function validPolindromBruteForce(s){
    const isPolindrom = (l,r) =>{
        while(l<r){
            console.log('real', l,r);
            console.log('l,r',l++, r--);
            if( s[l++] !== s[r--]){
                return 'Is not a polindrom';
            }
        }
        return 'Is a polindrom when at most one element removed';
    }
    let left=0;
    let right=s.length-1;
    while(left<right){
        if(s[left] !== s[right]){
            return (isPolindrom(left+1, right) || isPolindrom(left, right-1));
        }
        left++;
        right--;
    }
    return 'Is a polindrom';
}

let input='aba'
console.log(input, validPolindromBruteForce(input));
input='abca'
console.log(input, validPolindromBruteForce(input))
input='abc'
console.log(input, validPolindromBruteForce(input))

