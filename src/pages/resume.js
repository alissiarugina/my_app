import React from 'react';
import { useState, useEffect, useRef } from "react";
import '../App.css';
import { Document, Page, pdfjs  } from 'react-pdf'
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import { Row } from 'react-bootstrap';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


export default function Resume() {
	//const [numPages, setNumPages] = useState(0);

	//const container = useRef(null);

	// onLoadSuccess={({ numPages }) => setNumPages(numPages)

	const [numPages, setNumPages] = useState(null);
  	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setPageNumber(1);
	}

	function changePage(offset) {
		setPageNumber(prevPageNumber => prevPageNumber + offset);
	  }
	  
	  function previousPage() {
		changePage(-1);
	  }
	  
	  function nextPage() {
		changePage(1);
	  }

	return (
		<div style={{backgroundImage:'url("beach_background.jpg")', backgroundSize:'cover', height:'100%', boxSizing:'border-box', paddingLeft:'0', paddingRight:'0'}}>
			<section style={{backgroundColor:'transparent'}}>
				<div style={{display: 'flex', justifyContent:'center', backgroundColor:'white', width:'100%', justifyItems:'center', alignItems:'center',boxSizing:'border-box', paddingLeft:'0', paddingRight:'0'}}>
					<div class="firstHalf">
						<h1 class="text-big">
							My Resume! 
						</h1>
					</div>
				</div>
				</section>
        
			<div >	
			<nav class="d-flex justify-content-center"><a href={"AlissiaResumeFULL.pdf"} download="AlissiaRuginaResume.pdf" target="_blank" rel="noreferrer">
					<button class="button" style={{marginTop:'10px', marginBottom:'10px'}} >Download Resume</button>
				</a></nav>
				<div class="d-flex justify-content-center">
			<Document file="AlissiaResumeFULL.pdf" onLoadError={console.error} onLoadSuccess={onDocumentLoadSuccess}>
            	<Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
	
				</Document>
				</div>
				</div>

				
				</div>


		
	)
}

