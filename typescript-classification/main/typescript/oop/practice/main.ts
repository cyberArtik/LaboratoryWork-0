// its for json library, allows to work with the filePaths on my proj 
// Don't forget about @types/node
import { JsonOutput } from './JsonOutput';
import { Entity } from './Entities';
import { Race } from './Race';
import { Classifier } from './Classification';
import { Rules } from './Rules';
import * as fs from 'fs';

function main(): void {
    const filePath = '../../../resources/input.json'; 
    let rawData: string = '';
        rawData = fs.readFileSync(filePath, 'utf8');
        console.log("File contents:\n", rawData);

    let jsonObject: any;
        jsonObject = JSON.parse(rawData);

    if (!Array.isArray(jsonObject.data)) {
        console.log("JSON data is not an array.");
        return;
    }

    const entities: Entity[] = [];
    jsonObject.data.forEach((item: { id: number; isHumanoid?: boolean; planet?: string; age?: number; traits?: string[]; }) => {
        const entity = new Entity(item.id, item.isHumanoid, item.planet, item.age, item.traits);
        entities.push(entity);
    });

  
    const rules = new Rules({
        'Star Wars': [
            { isHumanoid: false, planet: "Kashyyyk", age: 400, traits: ["HAIRY", "TALL"] },
            { isHumanoid: false, planet: "Endor", age: 60, traits: ["HAIRY", "SHORT"] }
        ],
        'Hitchhiker\'s Universe': [
            { isHumanoid: true, planet: "Betelgeuse", age: 100, traits: ["EXTRA_ARMS", "EXTRA_HEAD"] },
            { isHumanoid: false, planet: "Vogsphere", age: 200, traits: ["GREEN", "BULKY"] }
        ],
        'Marvel Universe': [
            { isHumanoid: true, planet: "Asgard", age: 5000, traits: ["BLONDE", "TALL"] }
        ],
        'Lord of the Rings': [
            { isHumanoid: true, planet: "Earth", age: Infinity, traits: ["BLONDE", "POINTY_EARS"] },
            { isHumanoid: true, planet: "Earth", age: 200, traits: ["SHORT", "BULKY"] }
        ]
    });

    const classifier = new Classifier(entities);
    classifier.classifyEntities(rules);

    JsonOutput.writeToFile('../../../resources/output/StarWars.json', classifier.universes['Star Wars']);
    JsonOutput.writeToFile('../../../resources/output/Marvel.json', classifier.universes['Marvel Universe']);
    JsonOutput.writeToFile('../../../resources/output/Hitchhikers.json', classifier.universes['Hitchhiker\'s Universe']);
    JsonOutput.writeToFile('../../../resources/output/LordOfTheRings.json', classifier.universes['Lord of the Rings']);
}

main();
