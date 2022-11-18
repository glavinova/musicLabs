import { Button } from "@mui/material";
import React from "react";
import DownloadIcon from '@mui/icons-material/Download';

function DownloadButton() {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `sample_music_sheets.pdf`;
    link.href = "./music_sheets_pdf/sample_music_sheets.pdf";
    link.click();
  };

  return (
    <React.Fragment>
      <Button onClick={onDownload} size='large' variant="contained" color="primary" startIcon={<DownloadIcon />} sx={{marginLeft: "10px"}}>
        Download
      </Button>
    </React.Fragment>
  );
}

export default DownloadButton;
