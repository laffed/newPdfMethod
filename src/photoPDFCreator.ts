// import S3 from './s3Instance';
// import PDFDocument from 'pdfkit';
// import axios from 'axios';
// import {PhotoState, PhotoBuffObj, ClaimState, PhotoTuple} from './types';
// import cnc_logo from './assets/cnc_logo.svg';
// import cnc_footer_logo from './assets/cnc_footer_logo.svg';
// import line from './assets/line.svg';
// const SVGtoPDF = require('svg-to-pdfkit');
// import {opt} from './pdfkit_options';
// //DEV


// /**
//  *  
//  * @param photoData 
//  * @returns list of photos
//  */
// const getS3Buffers = async (photoData: PhotoState) => {
// 	const photoBuffObjects: PhotoBuffObj[] = [];

// 	//get base64 string for all photos
// 	for (let key in photoData) {
// 		for (let entry of photoData[key].entries) {
// 			try {
// 				const s3Obj = await S3.getObject({Bucket: ENV.s3Bucket, Key: entry.s3Key}).promise();
// 				photoBuffObjects.push({
// 					label: photoData[key].label,
// 					description: entry.description,
// 					formattedDate: entry.formattedDate,
// 					base64Str: `data:image/jpeg;base64,${s3Obj.Body?.toString('base64')}`
// 				})
// 			} catch (e) {console.log(e)}
// 		}
// 	}
// 	return photoBuffObjects;
// }

// /**
//  * Left Template Content
//  * @param doc 
//  */
// const fillLeftTemplate = (doc: PDFKit.PDFDocument) => {
// 	//svg's
// 	SVGtoPDF(doc, cnc_logo, opt.x_left, opt.y_top, {
// 		preserveAspectRatio: "xMinYMin meet",
// 		width: 63,
// 		height: 80
// 	});
// 	SVGtoPDF(doc, cnc_footer_logo, 300, 680, {
// 		preserveAspectRatio: "xMinYMin meet",
// 		width: 30,
// 		height: 26
// 	});
// 	SVGtoPDF(doc, line, opt.x_left, 162, {
// 		preserveAspectRatio: "xMinYMin meet",
// 		width: 2,
// 		height: 12
// 	});

// 	//left column
// 	doc.font('Helvetica-Bold')
// 		.fontSize(opt.font_size.sub_title)
// 		.fillColor(opt.color_blue)
// 		.text("INSURED", opt.x_left, 213)
// 		.text("POLICY", opt.x_left, 261)
// 		.text("DATE OF LOSS", opt.x_left, 309)
// 		.text("LOSS ADDRESS", opt.x_left, 357)
// 		.text("ADJUSTER", opt.x_left, 405)
// 		.text("WORK", opt.x_left, 453)
// 		.text("MOBILE", opt.x_left, 501)
// 		.text("ADJUSTER FCN", opt.x_left, 549);

// 	//title
// 	doc.font('Helvetica-Bold')
// 		.fontSize(opt.font_size.top_main_title)
// 		.fillColor(opt.color_blue)
// 		.text("PRELIMINARY PHOTOS", 275.145, opt.y_top);

// 	//footer
// 	doc.font('Helvetica')
// 		.fontSize(opt.font_size.content)
// 		.fillColor('black')
// 		.text("251-471-4718 ext 5", 106, 680)
// 		.text("2928 North McVay Drive", 106, 688)
// 		.text("Mobile, AL 36606", 106, 697)
// 		.text("claims@cncresource.com", 436, 688)
// 		.text("www.adjustingexpectations.com", 417, 697)
// }

// /**
//  * Left Content 
//  * @param doc 
//  */
// const fillLeftContent = (doc: PDFKit.PDFDocument, data: ClaimState) => {
// 	let fcn = '';
// 	for (let i in data.certifications) {
// 		if (data.certifications[i].state === 'NFIP License') {
// 			fcn = data.certifications[i].licenseNumber;
// 		}
// 	}

// 	doc.fill('black')
// 		.font('Helvetica')
// 		.fontSize(opt.font_size.content)
// 		.text(`${data.insuredFirstName} ${data.insuredLastName}`, opt.x_left, 223)
// 		.text(data.policyNumber, opt.x_left, 271)
// 		.text(`${data.lossDate}`, opt.x_left, 319)
// 		.text(`${data.lossStreet1} ${data.lossStreet2}`, opt.x_left, 367)
// 		.text(`${data.lossCity}, ${data.lossStateName} ${data.lossZip}`, opt.x_left, 375)
// 		.text(data.adjusterFullName, opt.x_left, 415)
// 		.text(data.adjusterPhoneWork, opt.x_left, 463)
// 		.text(data.adjusterPhoneMobile, opt.x_left, 511)
// 		.text(fcn, opt.x_left, 559)
// 		.fill(opt.color_blue)
// 		.font('Helvetica-Bold')
// 		.fontSize(opt.font_size.sub_title)
// 		.text(data.carrier, 69, 165);
// }


// /**
//  * Fill Main Content 
//  * @param doc 
//  * @param photoTuple 
//  */
// const fillPagePhotos = (doc: PDFKit.PDFDocument, photoTuple: PhotoTuple) => {
// 	const [first, second, third, fourth] = photoTuple;

// 	doc.fillColor("black")
// 		.font('Helvetica-Bold')
// 		.fontSize(opt.font_size.sub_title)
// 		.text(first.label, opt.x_l_content, opt.y_t_content)
// 		.font('Helvetica')
// 		.fontSize(opt.font_size.content)
// 		.text(first.description, opt.x_l_content, opt.y_t_desc)
// 		.text(first.formattedDate, opt.x_l_date, opt.y_t_content);
// 	doc.image(first.base64Str, opt.x_l_content, opt.y_t_img, {width: opt.w_photo, height: opt.h_photo})

// 	if (second) {
// 		doc.fillColor("black")
// 			.font('Helvetica-Bold')
// 			.fontSize(opt.font_size.sub_title)
// 			.text(second.label, opt.x_r_content, opt.y_t_content)
// 			.font('Helvetica')
// 			.fontSize(opt.font_size.content)
// 			.text(second.description, opt.x_r_content, opt.y_t_desc)
// 			.text(second.formattedDate, opt.x_r_date, opt.y_t_content);
// 		doc.image(first.base64Str, opt.x_r_content, opt.y_t_img, {width: opt.w_photo, height: opt.h_photo})
// 	}
// 	if (third) {
// 		doc.fillColor("black")
// 			.font('Helvetica-Bold')
// 			.fontSize(opt.font_size.sub_title)
// 			.text(third.label, opt.x_l_content, opt.y_b_content)
// 			.font('Helvetica')
// 			.fontSize(opt.font_size.content)
// 			.text(third.description, opt.x_l_content, opt.y_b_desc)
// 			.text(third.formattedDate, opt.x_l_date, opt.y_b_content);
// 		doc.image(third.base64Str, opt.x_l_content, opt.y_b_img, {width: opt.w_photo, height: opt.h_photo})
// 	}

// 	if (fourth) {
// 		doc.fillColor("black")
// 			.font('Helvetica-Bold')
// 			.fontSize(opt.font_size.sub_title)
// 			.text(fourth.label, opt.x_r_content, opt.y_b_content)
// 			.font('Helvetica')
// 			.fontSize(opt.font_size.content)
// 			.text(fourth.description, opt.x_r_content, opt.y_b_desc)
// 			.text(fourth.formattedDate, opt.x_r_date, opt.y_b_content);
// 		doc.image(fourth.base64Str, opt.x_r_content, opt.y_b_img, {width: opt.w_photo, height: opt.h_photo})
// 	}
// }

// export const buildPhotoPdf = async (data: ClaimState, userid: string) => {
// 	const doc = new PDFDocument({autoFirstPage: false, size: 'Letter'});
// 	const photoData = await getS3Buffers(data.photos);

// 	for (let i = 0; i < photoData.length; i += 4) {
// 		//1. Create page
// 		doc.addPage();
// 		//2. create left column content;
// 		fillLeftTemplate(doc);
// 		//3. fill left column data
// 		fillLeftContent(doc, data);
// 		//4. fill photos
// 		fillPagePhotos(doc, [
// 			photoData[i],
// 			photoData[i + 1] ?? false,
// 			photoData[i + 2] ?? false,
// 			photoData[i + 3] ?? false
// 		]);
// 	}

// 	//end pipe
// 	doc.end();
// 	console.log('doc created');

// 	//send to S3
// 	const keyPrefix = `cid${data.claimid}/published/`;
// 	const pdfFileName = `cid${data.claimid}-prelimPhotos-${data.sha1}.pdf`;
// 	const s3res = await S3.upload({
// 		Key: `${keyPrefix}${pdfFileName}`,
// 		Body: doc,
// 		Bucket: ENV.s3Bucket,
// 		ContentType: 'application/pdf',
// 		ACL: 'public-read'
// 	}).promise();
// 	console.log(s3res);

// 	//send S3 location to CNC
// 	const cncRes = await axios({
// 		method: 'post',
// 		url: ENV.cncUrl,
// 		data: {
// 			ft: 'Prelim Photos',
// 			fn: pdfFileName,
// 			cid: data.claimid,
// 			id: userid,
// 			sha1: data.sha1
// 		}
// 	});
// 	console.log(cncRes);
// }
