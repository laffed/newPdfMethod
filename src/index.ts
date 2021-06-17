import {createTemplate} from 'createTemplate';
import fs from 'fs';
import PDFDocument from 'pdfkit';

function main() {
	const name = 'test';
	const doc = new PDFDocument({autoFirstPage: false, size: 'Letter'});
	doc.pipe(fs.createWriteStream(`../pdfOutput/${name}.pdf`));

	//call your templator
	createTemplate(doc);
	//call your fill content

	doc.end();
	console.log('document created');
}

main();
