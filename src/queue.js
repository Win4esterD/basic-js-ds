const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}


class Queue {

  firstNode 
  currentNode 
  
  

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    return this.firstNode
  }

  enqueue(value) {
    if(!this.firstNode){
      this.firstNode = new Node(value)
      this.currentNode = this.firstNode;
    }else if(!this.firstNode.next){
      this.firstNode.next = new Node(value)
      this.currentNode = this.firstNode.next;
    }else{
      this.currentNode.next = new Node(value);
      this.currentNode = this.currentNode.next;
    }
  }


  dequeue() {
    if(this.firstNode){
      let tempValue = this.firstNode.value;
      this.firstNode = this.firstNode.next;
      return tempValue;
    }else{
       return null;
    }
  }
    
}

module.exports = {
  Queue
};
