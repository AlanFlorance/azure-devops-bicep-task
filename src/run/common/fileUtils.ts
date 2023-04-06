import * as path from 'path';
import * as fs from 'fs';
import * as glob from 'glob';

export function getFilesList(directory: string): string[] {
    let directoryToGetFiles: string = directory;
    
    directoryToGetFiles = directoryToGetFiles.replace(/\\/g, '/');
    if (!glob.hasMagic(directoryToGetFiles)) {
        directoryToGetFiles = path.join(directoryToGetFiles, '**');
        directoryToGetFiles = directoryToGetFiles.replace(/\\/g, '/');
    }

    return glob.sync(directoryToGetFiles, { nodir: true });
}

export function createDirectoryIfNotExists(directory: string, checkDirname: boolean): void {
    const dirnamePath = checkDirname ? path.dirname(directory) : directory;
    if (!fs.existsSync(dirnamePath)) {
        fs.mkdirSync(dirnamePath, { recursive: true });
    }
}
