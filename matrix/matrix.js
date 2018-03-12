'use strict';

class Matrix {
    constructor(values) {
        this.rows = values.split('\n').map(elem => elem.split(' '));
        this.rows = this.rows.map(arr => {
            arr = arr.map(elem => parseInt(elem));
            return arr;
        });

        this.columns = [];
        this.rows.map(row => {
            row.map((elem, index) => {
                this.columns[index] || this.columns.push([]);
                this.columns[index].push(elem);
            });
        });
    }
}

module.exports = Matrix;