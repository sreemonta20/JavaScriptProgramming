class Mystack{
    constructor(){
        this.queue = [];
    }

    push(val){
        this.queue.push(val);
        for(let i=0; i < this.queue.length - 1; i++){
            this.queue.push(this.queue.shift());
        }
    }

    pop(){
        return this.queue.shift();
    }

    top(){
        return this.queue[0];
    }

    isEmpty(){
        return this.queue.length == 0;
    }
}

const myStack = new Mystack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.queue);
console.log(myStack.pop());
console.log(myStack.top());