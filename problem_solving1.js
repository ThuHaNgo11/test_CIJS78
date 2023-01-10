function hailstone(num) {
    let sequence = [num];
    let element = num;
        while(element != 1){
            if(element % 2 == 0){
                element = element/2;
                sequence.push(element);
            } else {
                element = element*3 + 1;
                sequence.push(element);
            }
        }
    return sequence;
}

console.log(hailstone(10));

