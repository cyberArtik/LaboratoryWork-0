import { Entity } from './Entities';
import { JsonOutput } from './JsonOutput';
import { Rules } from './Rules';

export class Classifier {
    private entities: Entity[];
    public universes: {
        [key: string]: Entity[];
    } = {
        'Star Wars': [],
        'Marvel Universe': [],
        'Hitchhiker\'s Universe': [],
        'Lord of the Rings': []
    };

    constructor(entities: Entity[]) {
        this.entities = entities;
    }

    classifyEntities(rules:Rules): void {
        this.entities.forEach(entity => {
            let univ = rules.getTheAffinity(entity);
            if (univ) this.universes[univ].push(entity);

        }
    )}
}
