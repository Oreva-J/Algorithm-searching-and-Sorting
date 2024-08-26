// Algorithm searching and Sorting

const products = [

    { name: "Beans", price: 1000 },
    { name: "Bread", price: 500 },
    { name: "Water", price: 600 },
]

const sortedProduct = products.sort(( a,b )=>{
   return a.price - b.price
    
})

console.log(sortedProduct)

// MERGE SORT

const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  };
  
  
  const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  };
  
  const unsortedArray = [34, 7, 23, 32, 5, 62];

  console.log(mergeSort(unsortedArray))