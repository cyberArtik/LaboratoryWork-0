// its for json library, allows to work with the filePaths on my proj 
import * as fs from 'fs';
// Don't forget about @types/node

class Entities {
    id: number;
    isHumanoid?: boolean;
    planet?: string;
    age?: number;
    traits: string[];

    constructor(id: number, isHumanoid?: boolean, planet?: string, age?: number, traits: string[] = []) {
        this.id = id;
        this.isHumanoid = isHumanoid;
        this.planet = planet;
        this.age = age;
        this.traits = traits;
    }

    toString(): string {
        return `Entity - ID: ${this.id}, Humanoid: ${this.isHumanoid}, Planet: ${this.planet}, Age: ${this.age}, Traits: ${this.traits.join(', ')}`;
    }
}

class JsonInput {
    private filePath: string;
    private entities: Entities[] = [];
    private universes: {
        [key: string]: Entities[];
    } = {
        'Star Wars': [],
        'Marvel Universe': [],
        'Hitchhiker\'s Universe': [],
        'Lord of the Rings': []
    };

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    readFile(): void {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            console.log("File contents:\n", data);
            this.parseJson(data);
        } catch (err) {
            console.error(`Error reading file: ${err}`);
        }
    }

    private parseJson(data: string): void {
        try {
            const jsonObject = JSON.parse(data);
            console.log("Parsed JSON Object:\n", jsonObject);

            if (Array.isArray(jsonObject.data)) {
                jsonObject.data.forEach((item: { id: number; isHumanoid?: boolean; planet?: string; age?: number; traits?: string[]; }) => {
                    const entity = new Entities(item.id, item.isHumanoid, item.planet, item.age, item.traits);
                    this.entities.push(entity);
                });
                this.classifyEntities();
                this.printEntities();
                this.writeToOutput();
            } else {
                console.log("JSON data is not an array.");
            }
        } catch (error) {
            console.error(`Error parsing JSON: ${error}`);
        }
    }

    private classifyEntities(): void {
        this.entities.forEach(entity => {
            const isHumanoid = entity.isHumanoid ?? false;
            const planet = entity.planet ?? ''; 
            const age = entity.age ?? null; 
            const traits = entity.traits ?? []; 
    
            if (isHumanoid) {
                // Handle humanoid entities
                if (planet === 'Asgard' && (age === null || age <= 5000)) {
                    this.universes['Marvel Universe'].push(entity); // Asgardian
                } else if (planet === 'Betelgeuse' && (age === null || age <= 100)) {
                    this.universes['Hitchhiker\'s Universe'].push(entity); // Betelgeusian
                } else if (planet === 'Earth' && (age === null || age <= 200)) {
                    if (traits.includes('BLONDE') && traits.includes('POINTY_EARS')) {
                        this.universes['Lord of the Rings'].push(entity); // Elf
                    } else if (traits.includes('SHORT') && traits.includes('BULKY')) {
                        this.universes['Lord of the Rings'].push(entity); // Dwarf
                    } else {
                        this.universes['Marvel Universe'].push(entity); 
                    }
                } else if (planet === '') {
                    if (traits.includes('BLONDE') || traits.includes('TALL')) {
                        this.universes['Marvel Universe'].push(entity); 
                    }
                }
            } else {
                if (planet === 'Kashyyyk' && (age === null || (age >= 0 && age <= 400))) {
                    this.universes['Star Wars'].push(entity); // Wookie
                } else if (planet === 'Endor' && (age === null || (age >= 0 && age <= 60))) {
                    this.universes['Star Wars'].push(entity); // Ewok
                } else if (planet === 'Vogsphere' && (age === null || (age >= 0 && age <= 200))) {
                    this.universes['Hitchhiker\'s Universe'].push(entity); // Vogon
                } else if (planet === 'Earth' && traits.includes('SHORT') && traits.includes('BULKY')) {
                    this.universes['Lord of the Rings'].push(entity); // Dwarf entity from Earth
                } else if (planet === '' && traits.includes('GREEN')) {
                    this.universes['Hitchhiker\'s Universe'].push(entity); 
                }
            }
    
            if (planet === '' && age === null && traits.length === 0) {
                if (isHumanoid) {
                    this.universes['Marvel Universe'].push(entity); 
                } else {
                    this.universes['Star Wars'].push(entity); 
                }
            }
        });
    }
    
    private printEntities(): void {
        for (const [universe, entities] of Object.entries(this.universes)) {
            console.log(`\nEntities in ${universe}:`);
            entities.forEach(entity => {
                console.log(entity.toString());
            });
        }
    }

    private writeToOutput(): void {
        const output = new JsonOutput();

        output.writeToFile('../../../resources/output/StarWars.json', this.universes['Star Wars']);
        output.writeToFile('../../../resources/output/Marvel.json', this.universes['Marvel Universe']); 
        output.writeToFile('../../../resources/output/Hitchhikers.json', this.universes['Hitchhiker\'s Universe']); 
        output.writeToFile('../../../resources/output/LordOfTheRings.json', this.universes['Lord of the Rings']);
    }
}

class JsonOutput {
    writeToFile(filePath: string, data: Entities[]): void {
        try {
            const jsonData = JSON.stringify(data, null, 2); 
            fs.writeFileSync(filePath, jsonData, 'utf8');
            console.log(`Data has been sucessfully upload to the ${filePath}`);
        } catch (error) {
            console.error(`Something wrong with the write/copy into: ${error}`);
        }
    }
}

// Working ts-node
let jsonReader = new JsonInput('../../../resources/input.json');
jsonReader.readFile();
