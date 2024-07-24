import React from 'react'
import './Catalouge.css'
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Catalouge = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        ssetInitialTab: (doc) => Promise.resolve(0),
    });
    return (
        <div className="div-container">
            <div className="header-1">
                <h1>Our Catalouge</h1>
            </div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div className="pdf-reader">
                    <Viewer fileUrl=".\src\assets\SHARK CATALOUGE.pdf" plugins={[defaultLayoutPluginInstance]}></Viewer>
                </div>
            </Worker>
        </div>
    )
}

export default Catalouge