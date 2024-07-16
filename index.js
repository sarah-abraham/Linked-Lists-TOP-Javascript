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
        if(size === 0 || index>=this.size){
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
            let poppedValue = temp.value;
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
}