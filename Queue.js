class Queue {
    constructor(){
        this.items = []
    }

enqueue(element){
    this.items.push(element);
}

dequeue(){
    return this.items.shift();
}
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
