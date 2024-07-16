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

    size(){
        return this.size;
    }

    head(){
        return this.head;
    }

    tail(){
        if (this.head === null) {
            return null;
        }
        else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            return temp;
        }
    }


}