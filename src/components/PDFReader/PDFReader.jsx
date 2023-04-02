import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import "react-pdf/dist/esm/Page/TextLayer.css";
import pdf from "./DUNE_IMPERIUM_Rules_2020_10_26.pdf";
import "./PDFReader.css"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function PDFReader() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
            <div className="pdfReader">
                <div className="pdfButtons">
                    <BsFillArrowLeftCircleFill size={30} onClick={() => pageNumber === 1 ? setPageNumber(1) : setPageNumber(pageNumber - 1) }/> 
                    &nbsp;&nbsp;&nbsp;
                    <BsFillArrowRightCircleFill size={30}onClick={() => pageNumber === 20 ? setPageNumber(20) : setPageNumber(pageNumber + 1)}/>
                </div>
                <div className="pdfPages">
                    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page height={600} pageNumber={pageNumber} />
                    </Document>
                    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page height={600} pageNumber={pageNumber + 1} />
                    </Document>
                </div>
            </div>
      </>
      );
}