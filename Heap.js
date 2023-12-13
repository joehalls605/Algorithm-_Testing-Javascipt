class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    extractMin() {
      if (this.isEmpty()) {
        return null;
      }
  
      const min = this.heap[0];
      const last = this.heap.pop();
  
      if (!this.isEmpty()) {
        this.heap[0] = last;
        this.heapifyDown();
      }
  
      return min;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
  
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex] <= this.heap[index]) {
          break;
        }
  
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex;
      }
    }
  
    heapifyDown() {
      let index = 0;
  
      while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallestChildIndex = index;
  
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
          smallestChildIndex = leftChildIndex;
        }
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
          smallestChildIndex = rightChildIndex;
        }
  
        if (smallestChildIndex === index) {
          break;
        }
  
        [this.heap[index], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[index]];
        index = smallestChildIndex;
      }
    }
  }
  
  // Example usage:
  const minHeap = new MinHeap();
  
  minHeap.insert(4);
  minHeap.insert(2);
  minHeap.insert(7);
  minHeap.insert(1);
  
  console.log("Extract Min:", minHeap.extractMin()); // Output: 1
  console.log("Extract Min:", minHeap.extractMin()); // Output: 2
  