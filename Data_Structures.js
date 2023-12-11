

/* 

DICTIONARIES

- A data structure that organises and stores data in pairs
- It consists of a unique key and a value
- Keys are unique within a dictionary 
- Values can be of any data type
- Can also be known as a map.
*/

my_dict = {"name": "john", "age": 25, "city": "New York"}


/*
TUPLES

- Ordered immutable sequence of elements
- They remain in the order they were defined
- Cannot be modified 
*/


my_tuple = (1, 2, 'apple')
print(my_tuple[0]);


/*
ARRAYS
- Is a data structure that stores a collection of elements. Each element identified by an index or a key
- Elements are typically the same data type
- Provide constant time access to any element index
- Have a fixed size meaning you must specify size by the number of elements when declaring array (apart from Javascript)
- Arrays are ordered collections
*/

numbers = [1,2,3,4,5]
print(numbers)

/* DYNAMIC ARRAYS (LISTS)
- Arrays that dynamically resize themselves for more elements
- Dynamic arrays manage more memory behind the scenes, allocating more memory when elements added and releasing memory after removal
- Dynamic arrays provide efficient operations for adding, inserting and deleting in contrast to fixed arrays
*/

dynamic_array = [];
dynamic_array.push(1);

dynamic_array.print();


/* LINKED LISTS
- A collection of nodes where each node contains a data element in reference to the next node in the sequence
- Unlike arrays, linked lists do not have a fixed size
- The elements are not stored in contiguous memory locations
- Each node points to the next node forming a chain
*/

// JOE REFER TO LINKED LIST FILE.



/* MAPS
- A data structure that stores key-value pairs like a dictionary
*/


/* QUEUES
- A collection of elements with operations to add (enqueue) elements at the back and remove (dequeue) elements from the front. First in first out
- This is similar to building  a queue.
*/


// JOE REFER TO QUEUE FILE.

/* QUEUES
A collection of elements with operations to push (add) elements onto the top and pop (remove) elements from the top.
- This is similar to putting books on a stack and pulling them off one at a time.
*/

//HASH FUNCTION

// Simple hash function for strings
function simpleHash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash;
}

// Example usage
const hashedValue = simpleHash("hello");
console.log(hashedValue);

// HASH TABLE

/*
Hash Table:
A hash table is a data structure that uses a hash function to map keys to indices (positions) in an array for efficient data retrieval.
*/

class HashTable {
    constructor() {
        this.table = new Array(10); // Size of the array (adjustable)
    }

    // Hash function for simplicity (you may use a more sophisticated one)
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length; // Ensure the index is within the array size
    }

    // Insert key-value pair into the hash table
    insert(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
    }

    // Retrieve value based on key
    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }
}

// Example usage
const myHashTable = new HashTable();
myHashTable.insert("name", "John");
console.log(myHashTable.get("name")); // Output: John

// LINEAR SEARCH

/*
Hash Table:
A search algorithm that sequentially checks each element in the list until a match is found
*/

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found in the array
}


// BIG O NOTATION

/*
A notation used to describe the upper bound (worst case scenario) of the growth rate of the algorithm in terms of space or time complexity
Example: O(n) for linear time complexity.
*/

/*
O(1) Constant Time Complexity
Constant time complexity refers to algorithms where the execution time remains the same,
regardless of the size of the input data.
*/

function access_element(array, index){
    return array[index];
}

/*
O(n) - Linear Time Complexity
Linear time complexity indicates that the running time of an 
algorithm grows proportionally with the size of the input data.

*/

function find_max(target) {
    const length = target.length;

    if (length === 0) {
        // Handle the case where the array is empty
        return undefined;
    }

    let max_val = target[0];

    for (let i = 1; i < length; i++) {
        if (target[i] > max_val) {
            max_val = target[i];
        }
    }

    return max_val;
}



