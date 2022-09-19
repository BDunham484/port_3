import React, { useState } from 'react';
import ResumePDF from '../../assets/images/Resume.pdf';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
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
    return (
        <section id="resume">
            <h2>
                RESUME
            </h2>
            <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <div id="page-selection">
                {leftArrrow}<span>page {pageNumber} of {numPages}</span>{rightArrow}
            </div>
        </section>
    )
};

export default Resume;