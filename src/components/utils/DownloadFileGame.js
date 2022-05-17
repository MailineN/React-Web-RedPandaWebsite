import React from "react";
import { saveAs } from "file-saver";
const DownloadFileGame = () => {
    saveAs(
        "src/assets/panda.gif",
        "panda.gif"
    );
};
export default DownloadFileGame;
