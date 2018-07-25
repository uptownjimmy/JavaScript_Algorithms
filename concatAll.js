// flatten any multi-dimensional array into the next lower dimension:
// 2-D array becomes 1-D, 3-D array becomes 2-D, etc.

Array.prototype.concatAll = function() {
    var results = [];
    
    this.forEach(function(subArray) {
        subArray.forEach(item => {
            results.push(item);    
        });
    });  
  
    return results;
};

var exchanges = [
    [
        { symbol: "XFX", price: 240.22, volume: 23432 },
        { symbol: "TNZ", price: 332.19, volume: 234 }
    ],
    [
        { symbol: "JXJ", price: 120.22, volume: 5323 },
        { symbol: "NYN", price: 88.47, volume: 98275 }
    ]
  ];

  console.log(exchanges.concatAll());