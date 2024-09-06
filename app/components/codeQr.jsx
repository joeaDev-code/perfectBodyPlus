"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { QRCode } from "react-qr-code";

const CodeQr = () => {
  return (
    <div id="QR_code">
            <div className="container">  
            <QRCode
              value="https://192.169.1.8:3000"
              size={100}
              fgColor="purple" // Couleur du QR Code
              level="L" // Niveau de correction d'erreur ('L', 'M', 'Q', 'H')
            />

        </div>
      
      
    </div>
  );
};

export default CodeQr;
