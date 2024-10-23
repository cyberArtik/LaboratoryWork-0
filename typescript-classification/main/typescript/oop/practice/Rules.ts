import { Race } from "./Race";
import { Entity } from "./Entities";


export class Rules {
    private rulesForUniverses: Record<string, Race[]>;

    constructor(rule: Record<string, Race[]>) {
        this.rulesForUniverses = rule;
    }

    public getTheAffinity(ent: Entity): string | null {
        for (const [key, races] of Object.entries(this.rulesForUniverses)) {
            for (const race of races) {
                if (ent.isHumanoid!== undefined && race.isHumanoid!== undefined && ent.isHumanoid !== race.isHumanoid) {
                    continue;
                }

                if (ent.planet !== undefined && race.planet !== null && race.planet!== undefined && ent.planet.toLowerCase() !== race.planet.toLowerCase()) {
                    continue;
                }

                if (ent.age !== undefined && race.age !== undefined && ent.age > (race.age ?? Infinity)) {
                    continue;
                }

                if (ent.traits.length > 0 && (!ent.traits.every(trait => race.traits?.includes(trait)))) {
                    continue;
                }
                console.log(ent);
                return key;
            }
        }
        return null;
    }
}