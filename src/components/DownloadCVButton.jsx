import React from 'react';
import './DownloadCVButton.css'; // Make sure the path is correct
import { cv } from "../assets";

const DownloadCVButton = () => {
  return (
    <div>
      <a href={cv} download="KRIMI-Ibrahim_CV.pdf" className="download-link">
        Download My CV
      </a>
    </div>
  );
};

export default DownloadCVButton;
