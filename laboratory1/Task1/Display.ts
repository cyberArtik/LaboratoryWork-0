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
    comparisonArea(display: Display): void {
        console.log(
            (this.width * this.height) > (display.width * display.height)
                ? `Model: ${this.model} has a larger screen area of ${this.width * this.height}px² than model: ${display.model} with screen area of ${display.width * display.height}px².`
                : this.width * this.height < display.width * display.height
                ? `The other model, ${display.model}, has a bigger size of ${display.width * display.height}px² than the current model, ${this.model}, which has a size of ${this.width * this.height}px².`
                : `Both models, ${this.model} and ${display.model}, have the same size of ${this.width * this.height}px².`
        );
    }
}



