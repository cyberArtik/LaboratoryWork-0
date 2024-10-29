export class Display {
    private width: number;
    private height: number;
    private ppi: number;
    private model: string;

    // Methods --->

    constructor(width: number, height: number, ppi: number, model: string) {
        this.width = width;
        this.height = height;
        this.ppi = ppi;
        this.model = model;
    }

    // ---->
    comparisonArea(other: Display): void {
        console.log(
            (this.width * this.height) > (other.width * other.height)
                ? `Model: ${this.model} has a larger screen area of ${this.width * this.height}px² than model: ${other.model} with screen area of ${other.width * other.height}px².`
                : this.width * this.height < other.width * other.height
                ? `The other model, ${other.model}, has a bigger size of ${other.width * other.height}px² than the current model, ${this.model}, which has a size of ${this.width * this.height}px².`
                : `Both models, ${this.model} and ${other.model}, have the same size of ${this.width * this.height}px².`
        );
    }

    // ----->
    public comparisonPPI(other: Display): void {
        console.log(
            this.ppi > other.ppi
                ? `Model: ${this.model} is sharper (${this.ppi}ppi) than ${other.model} (${other.ppi}ppi)`
                : this.ppi < other.ppi
                ? `${other.model} is sharper (${other.ppi}ppi) than ${this.model} (${this.ppi}ppi)`
                : `${this.model} and ${other.model} are the same as they have the same sharpness (${this.ppi}ppi)`
        );
    }

    // -----> 
    public comparisonMonitor(other: Display): void {
        this.comparisonArea(other);
        this.comparisonPPI(other);
    }
}



