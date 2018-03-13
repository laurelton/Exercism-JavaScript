'use strict';

class LinkedList {
    constructor() {
        this._list ;
    }

    unshift(number) {
        let entry = {
            value: number,
            prev: null,
            next: null
        };
        
        entry.next = this._list;
    }

    push(number) {
        let entry = {
            value: number,
            prev: null,
            next: null
        };

        entry.prev = this._list;
    }

    shift() {}

    pop(){}
}

module.exports = LinkedList;