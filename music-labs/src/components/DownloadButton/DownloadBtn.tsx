import { Button } from "@mui/material";
import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import styles from './DownloadButton.module.css'

function DownloadButton() {

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `sample_music_sheets.pdf`;
    link.href = "./music_sheets_pdf/sample_music_sheets.pdf";
    link.click();
  };

  return (
    <React.Fragment>
      <Button 
        onClick={onDownload} 
        size='large' 
        variant="contained" 
        color="primary" 
        startIcon={<DownloadIcon />} 
        className={styles.marginLeft10}>
        Download
      </Button>
    </React.Fragment>
  );
}

export default DownloadButton;
