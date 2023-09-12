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
		<div>
			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							My Resume! 
						</h1>
					</div>
				</div>
				</section>
        
			<div>	
			<nav class="d-flex justify-content-center"><a href={"AlissiaResumeFULL.pdf"} download="AlissiaRuginaResume.pdf" target="_blank" rel="noreferrer">
					<button>Download AlissiaRuginaResume.pdf</button>
				</a></nav>
				<div class="d-flex justify-content-center">
			<Document file="AlissiaResumeFULL.pdf" onLoadError={console.error} onLoadSuccess={onDocumentLoadSuccess}>
            	<Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}/>
				</Document>
				</div>
				</div>

				<div className="pagec" class="d-flex justify-content-center">
				Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
				</div>
				<div className="buttonc" class="d-flex justify-content-center">
				<button
				type="button"
				disabled={pageNumber <= 1}
				onClick={previousPage}
				className="Pre"
					
				>
				Previous
				</button>
				<button
				type="button"
				disabled={pageNumber >= numPages}
				onClick={nextPage}>
				Next
				</button>
				</div>
				</div>


		
	)
}

