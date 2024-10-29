import Display from "./Display";

class Assistant {
    private assistantName: string;
    private assignedDisplays: Display[];

    constructor(name: string) {
        this.assistantName = name;
        this.assignedDisplays = [];
    }

    get AssistantName(): string {
        return this.assistantName;
    }

    get AssignedDisplays(): Display[] {
        return this.assignedDisplays;
    }

    public assignDisplay(display: Display): void {
        this.assignedDisplays.push(display);
    }

    public assist(): void {
        console.log(`\n${this.assistantName} shows this:`);
        if (this.assignedDisplays.length > 1) {
            for (let i = 0; i < this.assignedDisplays.length - 1; i++) {
                const display1 = this.assignedDisplays[i];
                const display2 = this.assignedDisplays[i + 1];
                display1.comparisonMonitor(display2);
                console.log();
            }
        } else {
            console.log("There are not enough assigned Displays in order to assist you with choosing one!");
        }
    }

    public buyDisplay(display: Display): Display | null {
        const index = this.assignedDisplays.indexOf(display);
        if (index !== -1) {
            this.assignedDisplays.splice(index, 1);
            return display;
        }
        return null;
    }
}

export default Assistant;
