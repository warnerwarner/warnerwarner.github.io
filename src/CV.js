import React from 'react';

import {Link} from "react-router-dom"

// pdfjs.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js';



const CV = () => (
    
    /**
     * A React component representing the publications section
     * of the webpage. Displays all publications in a list of
     * Publication components.
     *
     * publications: an array of json objects corresponding to each publication.
     */
    <div className="cv" id="cv" aos-duration="500">
        <h1 className="cvTitle">CV</h1>
    
        {/* <hr className='hrStyleBlue'></hr> */}
        <div>
        <a href="./files/CV - Liam Eloie.pdf" download>Click to download</a>
        {/* <Document file = {samplePdf}>
            <Page pageNumber={1} />
        </Document> */}
        </div>
    </div>
);

export default CV;