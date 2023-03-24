import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from "./DUNE_IMPERIUM_Rules_2020_10_26.pdf";

export default function PDFReader() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <button onClick={(e) => setPageNumber(pageNumber - 1)}>  </button>
            <button onClick={(e) => setPageNumber(pageNumber + 1)}>  </button>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
      </>
      );
}