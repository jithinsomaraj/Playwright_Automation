import * as fs from 'fs';
import * as path from 'path';

// Specify directories
const allureResultsPath = path.join(__dirname, 'reports/allure-results');
const screenVideoPath = 'reports/screenvideo';

// Function to delete specific files in a folder
const deleteFiles = (folderPath: string, fileEndings: string[]) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${folderPath} - ${err.message}`);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(folderPath, file);

            if (fileEndings.includes(file) || fileEndings.some(ext => file.endsWith(ext))) {
                fs.unlink(filePath, err => {
                    if (err) {
                        console.error(`Error deleting ${filePath}: ${err.message}`);
                    } else {
                        console.log(`Deleted: ${filePath}`);
                    }
                });
            }
        });
    });
};

// Function to delete all files in a folder
const deleteAllFiles = (folderPath: string) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${folderPath} - ${err.message}`);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(folderPath, file);

            fs.unlink(filePath, err => {
                if (err) {
                    console.error(`Error deleting ${filePath}: ${err.message}`);
                } else {
                    console.log(`Deleted: ${filePath}`);
                }
            });
        });
    });
};

// Execute both deletion functions
deleteFiles(allureResultsPath, ['result.json', 'attachment.png', '.webm']);  // Delete specific files
deleteAllFiles(screenVideoPath);  // Delete all files inside screenvideo folder
