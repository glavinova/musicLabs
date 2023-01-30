import { Button } from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import styles from "./DownloadBtn.module.scss";

export const onDownload = () => {
  const link = document.createElement("a");
  link.download = `sample_music_sheets.pdf`;
  link.href = "./music_sheets_pdf/sample_music_sheets.pdf";
  link.click();
};

export default function DownloadButton() {
  return (
    <React.Fragment>
      <Button
        id="downloadBtn"
        data-testid="downloadBtn"
        onClick={onDownload}
        size="large"
        variant="contained"
        color="secondary"
        startIcon={<DownloadIcon />}
        className={styles.marginLeft10}
      >
        Download
      </Button>
    </React.Fragment>
  );
}
