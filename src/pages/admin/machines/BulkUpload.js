import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const dropzoneStyles = {
    border: '2px dashed #ccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
};

const BulkUpload = ({ onUpload }) => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the accepted Excel file
        onUpload(acceptedFiles[0]);
    }, [onUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop, accept: {
            'sheet/xlsx': ['.xlsx'],
            'sheet/xls': ['.xls'],
        }
    });

    return (
        <div {...getRootProps()} style={dropzoneStyles}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the Excel file here...</p> :
                    <p>Drag 'n' drop an Excel file here, or click to select one</p>
            }
        </div>
    );
};

export default BulkUpload;
