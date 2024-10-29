import * as fs from 'fs';

class FileInput {
    static ContentFromFile(path: string | null): string | null {
        if (path) {
            if (fs.existsSync(path)) {
                return fs.readFileSync(path, 'utf-8');
            } else {
                console.warn(`WARNING: File at ${path}, couldn't be found!`);
            }
        } else {
            console.warn("WARNING: No path was provided!");
        }
        return null;
    }
}

export default FileInput;
