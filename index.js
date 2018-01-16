var fs = require('fs');
var request = require('request');
var PDFParser = require("pdf2json");

var pdfUrl = "http://url/to/your/.pdf";
var pdfParser = new PDFParser(this, 1);

var pdfPipe = request({
    url: pdfUrl,
    encoding: null
}).pipe(pdfParser);

pdfPipe.on("pdfParser_dataError", err => console.error(err));
pdfPipe.on("pdfParser_dataReady", pdf => {

    console.log(pdfParser.getRawTextContent())

    // write content into text file
    // fs.writeFile("./content.txt", pdfParser.getRawTextContent());

    // get text from the object(to get the text from a page in particular)
    // for (var i in pdf.formImage.Pages) {
    //     var page = pdf.formImage.Pages[2];
    //     for (var j in page.Texts) {
    //         var text = page.Texts[j];
    //         console.log(text.R[0].T);
    //     }
    // }
});