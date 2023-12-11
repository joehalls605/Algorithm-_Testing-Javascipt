

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
*/


// JOE REFER TO QUEUE FILE.