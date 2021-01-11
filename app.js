const reader = require("./Reader.js");
const processor = require("./Processor.js");
const table = require("./Table.js");
const htmlParser = require("./HtmlParser.js");
const writer = require("./Writer.js");
const pdfWriter = require("./PDFWriter.js");


async function main(){
    let datas = await new table(processor.process(await reader.read("./users.csv")));
    let html = await htmlParser.parse(datas);
    writer.write(`csv${Date.now()}.html`, html);
    pdfWriter.writePDF(`csv${Date.now()}.pdf`, html)
}

main();
