// find the optimal profit, given 1) an array of numbers, and
// 2) requirements to only buy once and then sell once
// 
var maxProfit = (prices) => {
    let minPrice = 99999;
    let maxprofit = null;

    prices.forEach(currentPrice => {
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        } else if ((currentPrice - minPrice) > maxprofit) {
            maxprofit = currentPrice - minPrice;
        }

        
    });
    return maxprofit;
}

console.log(maxProfit([7,1,5,3,6,4]))