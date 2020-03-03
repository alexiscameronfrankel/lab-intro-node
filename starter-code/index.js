class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length //you're referring to items within the constructor so you have to use this

  }


//   The add(item) method should add the value item to the items array, ensuring that the items array stays sorted in ascending order. What does this mean? Well, if an array of items has these elements: [2, 5, 7], and if 6 is added, the array of items should be as follows: [2, 5, 6, 7].
// Here you should also make sure that the length property gets updated accordingly when new items are added to the list.

  add(item) {
    this.items.push(item) // this adds the item into the items array 

    this.items.sort((a, b) => a - b); //this part sorts from lowest to highest

    this.length = this.items.length //then you have to update the length of the array or it will stay the same 
  }

//   The get(pos) method will get the value at index pos in the list.
// Example: if an instance of SortedList has elements: [2, 5, 7], when get(2) called, return should be 7 since this is element in that position in the array. Check the tests to see more examples.

// In addition, make sure you throw an error with the message OutOfBounds if a user tries to get an element in the non-existing position (e.g. if the array has 5 elements and we are trying to get the element on the position 7).

// To throw an error, you can do the following:

// throw new Error("OutOfBounds");


  get(pos) {

    if(pos > this.length -1){ //you're doing this because length will not start at 0...it will start at 1
      return(OutOfBounds)
    } else if (pos <= this.length -1)
    {
      return this.items[pos]
    }

      //you can also do it this way 

  // if(!this.items[pos]) {
  //   throw new Error("OutOfBounds");
  // }
  // return this.items[pos]; }


  }

  // The max() method should return the highest value of the array.

  // In case you have an empty SortedList, you must throw an error with the message "EmptySortedList". For this, you can use:
  
  // throw new Error("EmptySortedList");

  max() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList"); //if the array is empty it will throw this error OTHERWISE
    } else{
    this.items.sort((a, b) => b - a); // sort from highest to lowest and then I return the first value which would be the highest number
    return this.items[0] }

  }

//   The min() method should return the lowest value of the array.

// In case you have an empty SortedList, you must throw an error with the message "EmptySortedList".

  min() {

    if(this.items.length === 0){
      throw new Error("EmptySortedList"); //if the array is empty it will throw this error OTHERWISE
    } else{
    this.items.sort((a, b) => a - b); // sort from lowest to highest and then I return the first value which would be the highest number
    return this.items[0] }

  }

  // The sum() method should return the sum value of the array. At this point, we will not tell you anything else. Just go ahead and check the corresponding test and see if anything else needs to be added. You can do this! 

  sum() {

      if(this.items.length === 0){ //if array is empty then return 0 
        return 0
      } else { 
        let sum = 0 // as the for loop goes through each value in the array it will add it to sum and then return sum 
        for(let i = 0; i < this.items.length; i++) {
          sum += this.items[i];
        }
        return sum;
  }
}


// The avg() method should return the average value of the array.

// Just as before, check the corresponding test to see if there's anything else that needs to be added.

  avg() {

    if(this.items.length === 0){ 
      throw new Error("EmptySortedList"); 
    } else { 
      let sum = 0 // as the for loop goes through each value in the array it will add it to sum and then return sum 
      for(let i = 0; i < this.items.length; i++) {
        sum += this.items[i];
        sum = Math.ceil(sum/this.items.length)
      }
      return sum
    }
  
  }


}

module.exports = SortedList;
