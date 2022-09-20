import React, { useState } from 'react';
import ResumePDF from '../../assets/images/Resume.pdf';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }
    const leftArrrow = <AiOutlineArrowLeft id="left-arrow" onClick={() => setPageNumber(1)} />
    const rightArrow = <AiOutlineArrowRight id="right-arrow" onClick={() => setPageNumber(2)} />
    const downloadButton = <a href={ResumePDF} target="_blank" rel="noreferrer"><AiOutlineDownload id="download-button"/></a>
    return (
        <section id="resume">
            <span id="resume-title-wrapper">
            <h2>
                RESUME
            </h2>
            {downloadButton}
            </span>
            
            <Document id="resume" file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <div id="page-selection">
                {leftArrrow}<span>page {pageNumber} of {numPages}</span>{rightArrow}
            </div>
        </section>
    )
};

export default Resume;