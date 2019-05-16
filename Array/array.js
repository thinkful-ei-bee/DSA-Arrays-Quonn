const Memory = require('./memory');
const memory = new Memory(); 

class Array {
    constructor(){
        //length of memory set aside for array
        this.length = 0;

        // allocates memory per previosly set length
        this.ptr = memory.allocate(this.length);
        this._capacity = 0;
    }

    push(data) {
        // if the length of new data is longer than reserved memory capacity
        // the length of the memory block is incresed according to the Size ratio
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        // set the value of the last block to contain the newly added value
        memory.set(this.ptr + this.length, data);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;

        // allocates new chunk of memory for copy 
        this.ptr = memory.allocate(size);

        //if new chunk of memory isnt set throw an error
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }

        // copies values from old memory block to new memory block
        memory.copy(this.ptr, oldPtr, this.length);
        
        //frees up our no-longer used, old memory block
        memory.free(oldPtr);
        this._capacity = size;
    }

    get(index) {

        // throw an error if index is less than 0 or greater
        // than the size of our memory block 
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        // we retrieve our correct memory address by adding index
        // to the start of 
        return memory.get(this.ptr + index);
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }


        const data = memory.get(this.ptr + this.length - 1);
        this.length--;
        return data;
    }

    insert(index, data) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        // if new data is larger than our reserverved memory, resize
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        //copy values from old to new memory 
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        
        // set our new data in new memory location
        memory.set(this.ptr + index, data);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        // copy values, minus the index of the element data we want to remove
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

Array.SIZE_RATION = 3;

module.exports = Array;