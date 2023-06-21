import React from 'react';
import { saveAs } from 'file-saver';

const Excel = () => {
    const handleButtonClick = () => {
        // Change the file path and name to match your Excel file
        const filePath = 'path/to/your/excel/file.xlsx';

        // Fetch the Excel file
        fetch(filePath)
            .then(response => response.blob())
            .then(blob => {
                // Save the file using the 'saveAs' function
                saveAs(blob, 'excel_file.xlsx');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    return (
        <div>
            <button onClick={handleButtonClick}>Open Excel</button>
        </div>
    );
}

export default Excel;
