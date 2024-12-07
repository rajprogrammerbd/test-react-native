import * as FileSystem from 'expo-file-system';
import { IData } from '../../types';

let isInitiated = false;


abstract class Directories {
    static isDirectoryEmpty() {

    }
}

abstract class Files extends Directories {
    protected static fileName = "";

    static async isFileExist(fileName: string): Promise<boolean> {
        try {
            const fileInfo = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}${fileName}`);
            console.log('filename - ', fileInfo);

            if (!fileInfo.exists) {
                return false;
            }

            return true;
        } catch (er) {
            console.error(er);
            throw new Error("Internal Error");
        }
    }

    static async creationFile(fileName: string): Promise<void> {
        try {
            await FileSystem.writeAsStringAsync(`${FileSystem.documentDirectory}${fileName}`, JSON.stringify([]));
            Files.fileName = fileName;

        } catch (er) {
            console.error(er);
            throw new Error("Internal Error");
        }
    }

    static async addData(new_data: IData) {
        try {
            const isExist = await Files.isFileExist(Files.fileName);
            if (!isExist) {
                throw new Error("File doesn't exist");
            }

            const fileUri = `${FileSystem.documentDirectory}${Files.fileName}`;

            // Read the existing file content
            const fileContent = await FileSystem.readAsStringAsync(fileUri);
            const data = JSON.parse(fileContent);
            data.push(new_data);
            
            await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(data));
        } catch (er) {
            console.error(er);
            throw new Error("Internal Error");
        }
    }
}

export default abstract class FileSystemModule extends Files {
    static async initiate() {
        if (isInitiated) {
            throw new Error("Can't initialize FileSystem multiple times");
        }

        isInitiated = true;
    }
}