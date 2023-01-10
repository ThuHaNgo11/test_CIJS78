function freeShipping(order){
    let isFreeShip = false
    let sumCost = 0;
    for (const prop in order){
        sumCost += order[prop];
    }
    if(sumCost > 50){
        isFreeShip = true;
    }
    return isFreeShip
}


console.log(freeShipping({ "1": 2.3, "2": 35.4, "3": 42.2 }))