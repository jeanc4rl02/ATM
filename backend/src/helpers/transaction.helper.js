import fetchDataHelper from "./fetchData.helper";

let denominations = [  
    { value: 100, count: 101 },  
    { value: 50, count: 101 },  
    { value: 20, count: 101 },  
    { value: 10, count: 101 },
    ];

let denominationsCopy = [  
    { value: 100, count: 0 },  
    { value: 50, count: 0 },  
    { value: 20, count: 0 },  
    { value: 10, count: 0 },
    ];

const percentages = [0.6, 0.3, 0.1, 0.1];

let result = [];
let remainder = 0;
let sum = 0;

 
const init = () =>{
    result = [];
    remainder = 0;
    sum = 0;
    denominations = fetchDataHelper(url, method, data) 
}

const calculateRemainder = (amount) => {
  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];
    const maxCount = Math.min(
      Math.floor(remainder / denomination.value),
      denomination.count
    );
    if (result[i]) {
      result[i].count += maxCount;
    } else {
      result.push({ value: denomination.value, count: maxCount });
    }
    remainder -= maxCount * denomination.value;
    denominations[i].count -= maxCount;
  }
   //console.log("sobrante",amount, result)
};

const calculateRemainders = (amount) => {
    let results= []
    let remainders = amount
    const denominations = [  
    { value: 100, count: 5 },  
    { value: 50, count: 100 },  
    { value: 20, count: 100 },  
    { value: 10, count: 0 },
    ];  ///otro llamado a la db
    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i];
         if(denomination.count*denomination.value>=remainders){
            const maxCount = Math.min( Math.floor(remainders / denomination.value), denomination.count );
           
            results.push({ value: denomination.value, count: maxCount });
        
            remainders -= maxCount * denomination.value;
            denominations[i].count -= maxCount;
             
         }else{
               results.push({ value: denomination.value, count: 0 });
         }
    } 
    
    if(remainders !==0){
      return []
    }
    return results
};

const getMoney = (amount) => {
  result = [];
  remainder = 0;
  sum = 0;

  if (amount % 10 !== 0) {
    return "No se puede retirar la cantidad exacta";
  }

  if (amount <= 100) {
    percentages[0] = 0.5;
    percentages[1] = 0.3;
    percentages[2] = 0.2;
    percentages[3] = 0.1;
  }
    
  for (let i = 0; i < denominations.length; i++) {
    if (denominations[i].count <= 100) {
      if (denominationsCopy[i].count === 0) {
        denominationsCopy[i].count = denominations[i].count;
      }
      denominations[i].count = 0;
    }

    let val = amount * percentages[i];

    if (i !== denominations.length - 1) {
      if (val <= denominations[i].value * denominations[i].count && sum < amount) {
        const carry = val - Math.floor(val / denominations[i].value) * denominations[i].value;
        val -= carry;
        sum += denominations[i].value * (val / denominations[i].value);
        remainder += carry;
        denominations[i].count -= val / denominations[i].value;
        result.push({ value: denominations[i].value, count: val / denominations[i].value });
      } else {
        sum += denominations[i].value * (val / denominations[i].value);
        denominations[i].count -= val / denominations[i].value;
        result.push({ value: denominations[i].value, count: val / denominations[i].value });
      }
    } else {
      calculateRemainder(remainder);
    }
  }

  if (remainder !== 0) {
      const rem = calculateRemainders(amount)
       
      if(rem.legth>0){
        return rem 
      }
      return "No se puede retirar la cantidad exacta"; 
  }
  
  console.log("denomination\n", denominations, denominationsCopy)    
  return result;
};

console.log(getMoney(1000));