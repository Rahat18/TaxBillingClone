const User = require ("../models/user");

const calculateTax = async (salary) => {

    /*
    0 - 2.5L  ---> 0%
    2.5 - 5L  ---> 5%
    5- 7.5L   ---> 10%
    7.5 - 10L ---> 15%
    10 - 12.5L --->20%
    12.5 - 15L ---> 25%
    15L +      ---> 30%
     */
    let slabs = [0 , 0.05 , 0.1 , 0.15 , 0.2 , 0.25 , 0.3] ;
    let taxValue = 0;
//     let range = 0;
//     let currentValue =250000;
//     let i =0;
//     for(let i = 0 ; i< slabs.length  -1; i++){
//         if(range + 250000 > salary){
//             currentValue = salary - range;
//             break;

//         } else{
//             taxValue += slabs[i] * currentValue;
//             range+= 250000
//         }
//     }
//         if(range < salary){
//             taxValue += (salary -range) * slabs[i];
//         }
//     return taxValue;


if(salary > 0 && salary < 250000)
  taxValue = 0;

else if (salary > 250000 && salary < 500000)
 taxValue = 0.05 * salary ;

 else if (salary > 500000 && salary < 750000)
 taxValue = 0.1 * salary ;

 else if (salary > 750000 && salary < 1000000)
 taxValue = 0.15 * salary ;

 else if (salary > 100000 && salary < 1250000)
 taxValue = 0.2 * salary ;

 else if (salary > 1250000 && salary < 1500000)
 taxValue = 0.25 * salary ;

 else 
 taxValue = 0.3 * salary;


 return taxValue;
 };





module.exports ={

    calculateTax

}