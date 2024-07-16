class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value){
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.size++;
    }

    prepend(value){
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    getSize(){
        return this.size;
    }

    getHead(){
        return this.head.value;
    }

    getTail(){
        if (this.head === null) {
            return null;
        }
        else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            return temp.value;
        }
    }

    at(index){
        if(this.size === 0 || index>=this.size){
            return null;
        }
        else{
            let count = 0;
            let temp = this.head;
            while(count!=index){
                temp = temp.next;
                count++;
            }
            return temp.value;
        }
    }

    pop(){
        if (this.head === null) {
            return null;
        }
        else if(this.size === 1){
            let poppedValue = this.head.value;
            this.head = null;
            this.size--;
            return poppedValue;
        }
        else{
            let temp = this.head;
            while(temp.next.next != null){
                temp = temp.next;
            }
            let poppedValue = temp.next.value;
            temp.next = null;
            this.size--;
            return poppedValue
        }
    }

    contains(value){
        if(this.head === null){
            return false;
        }
        else{
            let temp = this.head;
            while(temp!=null){
                if(temp.value === value){
                    return true;
                }
                temp = temp.next;
            }
            return false;
        }
    }

    find(value){
        if(this.head === null){
            return null;
        }
        else{
            let count = 0;
            let temp = this.head;
            while(temp!=null){
                if(temp.value === value){
                    return count;
                }
                count++;
                temp = temp.next;
            }
            return null;
        }
    }

    toString(){
        if(this.head === null){
            return "No nodes to display.";
        }
        else{
            let temp = this.head;
            let result = "";
            while(temp!=null){
                result+=`(${temp.value}) -> `;
                temp = temp.next;
            }
            result+=("null");
            return result;
        }
    }

    insertAt(value,index){
        if(this.size===0 || index>this.size){
            return null;
        }

        if (index === 0) {
            this.prepend(value);
            this.size++;
        }
        else{
            let count = 0;
            let temp = this.head;
            while(count < index - 1){
                count++;
                temp = temp.next;
            }
            const newNode = new Node(value);
            newNode.next = temp.next;
            temp.next = newNode;
            this.size++;
        }
    }

    removeAt(index){
        if(this.size===0 || index>=this.size){
            return null;
        }
        if (index === 0) {
            this.head = this.head.next;
            this.size--;
        }
        else{
            let count = 0;
            let temp = this.head;
            while(count < index - 1){
                count++;
                temp = temp.next;
            } 
            temp.next = temp.next.next;
            this.size--;
        }
    }
}

let linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

console.log("Linked List after append:");
console.log(linkedList.toString());
console.log("Size:", linkedList.getSize()); 
console.log("Head:", linkedList.getHead());
console.log("Tail:", linkedList.getTail()); 


linkedList.prepend(5);

console.log("\nLinked List after prepend:");
console.log(linkedList.toString()); 
console.log("Size:", linkedList.getSize()); 
console.log("Head:", linkedList.getHead()); 

console.log("\nElement at index 2:", linkedList.at(2)); 

linkedList.insertAt(35, 2); 
console.log("\nLinked List after inserting at index 2:");
console.log(linkedList.toString()); 

linkedList.removeAt(2); 
console.log("\nLinked List after removing element at index 2:");
console.log(linkedList.toString());

console.log("\nPopped element:", linkedList.pop()); 
console.log("Linked List after pop:");
console.log(linkedList.toString()); 
console.log("Size:", linkedList.getSize()); 

console.log("\nContains 10:", linkedList.contains(10)); 
console.log("Contains 30:", linkedList.contains(30)); 

console.log("\nIndex of value 10:", linkedList.find(10)); 
console.log("Index of value 30:", linkedList.find(30)); 