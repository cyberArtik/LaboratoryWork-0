import * as fs from 'fs';
import { Entity } from './Entities';

export class JsonOutput {
    public static writeToFile(filePath: string, data: Entity[]): void {
        try {
            const jsonData = JSON.stringify(data, null, 2);
            fs.writeFileSync(filePath, jsonData, 'utf8');
            console.log(`Data successfully written to ${filePath}`);
        } catch (error) {
            console.error(`Error writing to file: ${error}`);
        }
    }
}
