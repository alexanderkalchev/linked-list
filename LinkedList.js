export default class LinkedList{
    #head
    constructor(){
        this.#head = null;
    }

    append(value){
        if(this.#head === null){
            this.#head = new Node(value);
            return;
        }

        let temp = this.#head;

        while(temp.nextNode !== null){
            temp = temp.nextNode;
        }

        temp.nextNode = new Node(value);
    }

    prepend(value){
        let temp = this.#head;
        this.#head = new Node(value);
        this.#head.nextNode = temp;
    }

    size(){
        if(this.#head === null) return 0;
        let temp = this.#head;
        let count = 1;
        while(temp.nextNode !== null){
            temp = temp.nextNode;
            count++;
        }
        return count;
    }

    head(){
        if(this.#head === null) return undefined;
        return this.#head.value;
    }

    tail(){
        if(this.#head === null) return undefined;
        let temp = this.#head;
        while(temp.nextNode !== null)temp = temp.nextNode;
        return (temp.value);
    }

    at(index){
        if(index < 0 || index >= this.size()) return undefined;
        let temp = this.#head;
        let count = 0;
        while(count++ < index){
            temp = temp.nextNode;
        }
        return temp.value;
    }

    pop(){
        if(this.#head === null) return undefined;
        let temp = this.#head.value;
        this.#head = this.#head.nextNode;
        return temp;
    }

    contains(value){
        if(this.#head === null) return false;
        let temp = this.#head;
        while(temp !== null){
            if(temp.value === value) return true;
            temp = temp.nextNode;
        }
        return false;
    }

    findIndex(value){
        if(this.#head === null) return -1;
        let temp = this.#head;
        let count = 0;
        while(temp !== null){
            if(temp.value === value) return count;
            temp = temp.nextNode;
            count++;
        }
        return -1;
    }

    toString(){
        if(this.#head === null) return "";
        let str = "";
        let temp = this.#head;
        while (temp !== null) {
            str += `( ${temp.value} ) -> `
            temp = temp.nextNode;
        }
        str += "null"
        return str;
    }

    insertAt(index, ...nums){
        if(index < 0 || index >= this.size()) throw new RangeError("Index out of range!");
        let temp = this.#head;
        let count = 0;
        while(count < index-1){
            temp = temp.nextNode;
            count++;
        }

        let memory;

        nums.forEach((num) => {
            memory = temp.nextNode;
            temp.nextNode = new Node(num);
            temp = temp.nextNode;
            temp.nextNode = memory;
        })
    }

    removeAt(index){
        if(index < 0 || index >= this.size()) throw new RangeError("Index out of range!");
        if(index === 0){
            this.#head = this.#head.nextNode;
            return;
        }
        let count = 0;
        let temp = this.#head;
        while(count < index-1){
            temp = temp.nextNode;
            count++;
        }

        temp.nextNode = temp.nextNode.nextNode;
    }
}

class Node{
    constructor(value = null){
        this.value = value;
        this.nextNode = null;
    }
}