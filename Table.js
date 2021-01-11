class Table{

    constructor(arr){
        this.header = arr[0];
        arr.shift();
        this.rows = arr;
    }

    get rowsCount(){
        return this.rows.length;
    }

    get columnsCount(){
        return this.header.length;
    }
}

module.exports = Table;