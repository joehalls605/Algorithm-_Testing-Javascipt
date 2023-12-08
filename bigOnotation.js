//Time Complexity

// data one - n
const data = ['A', 'B', 'C'];

// length of our data array is equal to 'n';
// as n goes from 3 - 300, 1 to 1 with the size of n.
// (O)n
// Our algorithm grows linearly

for (let i = 0; i < data.length; i++){
    console.log(data[i])
}

// data two - a
const data2 = [1, 2, 3, 4, 5];

// Now our Big O notation becomes O(n + a).
// We're now scaling off both data sets, looping through each of them.

for (let j = 0; j < data.length; j++){
    console.log(data2[j])
}

// Now modifying loops inside of each other
// Big O notation becomes O(n*a)

for (let j = 0; j < data.length; j++){
    for (let i = 0; i < data.length; i++){
        console.log(data[i] + data2[j])
}
 
}

// Adding Space Complexity

// data one - n
const out = [];

// length of our data array is equal to 'n';
// as n goes from 3 - 300, 1 to 1 with the size of n.
// (O)n
// Our algorithm grows linearly


//O(n) space complexity
for (let i = 0; i < data.length; i++){
    out[i] = data[i]
}

// this outputs A B and C repeated three times
// O(n^2)

for (let j = 0; j < data.length; j++){
    out[j] = []
    for (let i = 0; i < data.length; i++){
        out[i][j] = data[j]
}
 
}

// Discussing the above Time and Space Complexity.

//Time Complexity

/* The outer loop runs data.length times for each iteration of the outer loop, 
the inner loop also runs for data.length times. 
This means that the number of iterations is proportional to the square length of the data array.
This creates a notation of O(n^2) where n is the length of the data array

// Space Complexity

The code initialises a new two-dimensional array 'out' where each row is an array.
The new space required for this new array is proportional to the size of the input data.
This means the space complexity is O(n^2) also.



*/
