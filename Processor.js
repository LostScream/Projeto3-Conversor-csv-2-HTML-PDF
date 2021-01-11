class Processor{
    static process(data){
        let x = data.split("\r\n");
        let rows = [];
        x.forEach(row => {
            rows.push(row.split(","));
        });
        return rows;
    }
}

module.exports = Processor;