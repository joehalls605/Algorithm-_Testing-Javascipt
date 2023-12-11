// Define a Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Reference to the next node, initially null
    }
}

// Define a LinkedList class
class LinkedList {
    constructor() {
        this.head = null; // Reference to the first node, initially null
    }

    // Method to add a new node to the end of the list
    append(data) {
        const newNode = new Node(data);

        // If the list is empty, set the new node as the head
        if (!this.head) {
            this.head = newNode;
            return;
        }

        // Traverse the list to find the last node
        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        // Set the new node as the next node of the current last node
        current.next = newNode;
    }

    // Method to print the elements of the list
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Create a linked list and add elements to it
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

// Print the elements of the linked list
linkedList.print();
