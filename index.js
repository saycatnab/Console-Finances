var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655], 
  ['Mar-2010', 322013], 
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];


// the total number of months added up
// 1. find how to target each month inside of the array
// 2. have a way to add them up

// console.log(finances[0[2]].length)

// const arr = [11, 21, 19, 21, 46]

// const elementToCount = 21; 

// let count = arr.filter(x => x == elementToCount).length

// console.log(count)

// const elementToCount = [0]["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]

// let count = arr.filter(x => x == elementToCount).length

// console.log(count)


// V TOTAL MONTHS
// console.log(`Total Months: ${finances.length}`)

// in var finances i target the first array by adding [0] (position 1 as this is the only array item), then use the .slice method to return selected elements in an array, as a new array. And added the start 0 and end number 82 within a bracket.
// next added a .length within the 'new array' in console.log.


// notes: write code again and again to keep it in his memory.

let total = 0;

let change = 0;

let average;

let net = 0;

let netArray = []

let netChangeSum = 0;

let least = ['', 9999999999999]
let greatest = ['', 0]
// greatest has to be bigger than 0
// least has to be smaller than 13, 9s



for(let index = 0; index < finances.length; index++){

//^ bscally this first for loop is for everything inside the first array (iterates through all 86 items), not the 84 arrays inside with the [month, money]

  for(let index2 = 0; index2 < finances[index].length; index2++){
    //This second for loop is targetting the items months/ yr, $money inside the 86 arrays [month/ yr, $money]. like the first for loop is iterating thru the first array (finances, with all 84 items), this is a child for loop within, which would iterate inside the items IN the 84 arrays, so the month/yr and $money will be manipulated.
    if(typeof finances[index][index2] !== `string`){
      total += finances[index][index2]
      // ^ also means total = total + finances[index][index2], but in an easy way
      // What is happening above is while getting the $no. through iterating, it is adding to the total (so 1st: 0 + 867884 2nd: 867884 + 984655 and so on)
      //always console.log to see if it works: console.log(finances)
      change = finances[index][index2] - net
      net = finances[index][index2]
      // from screen shots
      // change is current amount - previous amount(net)
      //net is the previous amount
      // netArray just keeps each net amount in an array(basically all the amounts) 
      //refer to the screenshot img in folder
      netArray.push(change)
      // console.log(`total: ${total}`)
      // console.log(`change: ${change}`)
      // console.log(`net: ${net}`)
      // console.log(`netArray: ${netArray}`)
      //commented out ^
      if(change > greatest[1]){
        greatest = [finances[index][0], finances[index][1]]
      }
      if(change < least[1]){
        least = [finances[index][0], finances[index][1]]
      }
    }

  }

}

for (let i=0; i< netArray.length; i++){
  netChangeSum += netArray[i]
  //bscally here the for loop is iterating through the netArray items (which has net items *check netArray in the screenshot) and adding up every net no.
  
}

// console.log(netChangeSum)

// console.log(`Total: $${total}`)

average = Math.round((netChangeSum / finances.length) * 100) /100
// Math.round() static method returns the value of a number rounded to the nearest integer.
// e.g.  console.log(Math.round(0.9));
//       Expected output: 1

analysis = `
Financial Analysis
-------------------
Total Months: ${finances.length}
Total: $${total}
Average Change: $${average}
Greatest Increase in Profit: ${greatest[0]} : $${greatest[1]}
Least Increase in Profit: ${least[0]} : $${least[1]}
`

