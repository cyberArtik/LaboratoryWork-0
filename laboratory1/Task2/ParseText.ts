class ParseText {
    private inputFileName: string | null;
    private inputText: string | null;
    private vowelCount: number;
    private consonantCount: number;
    private letterCount: number;
    private sentenceCount: number;
    private longestWordFound: string | null;

    constructor(filePath: string | null, textContent: string | null) {
        this.inputFileName = this.extractFileName(filePath);
        this.inputText = textContent;
        this.vowelCount = this.countVowels();
        this.consonantCount = this.countConsonants();
        this.letterCount = this.vowelCount + this.consonantCount;
        this.sentenceCount = this.countSentences();
        this.longestWordFound = this.findLongestWord();
    }

    private extractFileName(filePath: string | null): string | null {
        if (filePath) {
            return filePath.split(/[/\\]/).pop() || null; 
        }
        return null;
    }

    private countVowels(): number {
        const currentText = this.getInputText();
        if (currentText) {
            return (currentText.match(/[aeiou]/gi) || []).length;
        }
        return 0;
    }

    private countConsonants(): number {
        const currentText = this.getInputText();
        if (currentText) {
            return (currentText.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
        }
        return 0;
    }

    private countSentences(): number {
        const currentText = this.getInputText();
        if (currentText) {
            const sentences = currentText.split(/[.!?]+/).filter(Boolean);
            return sentences.length; 
        }
        return 0;
    }

    private findLongestWord(): string | null {
        const currentText = this.getInputText();
        if (currentText) {
            const words = currentText.replace(/[^\w\s]|_/g, ' ').split(/\s+/);
            return words.reduce((longest, word) => word.length > longest.length ? word : longest, ""); //  longest word
        }
        return null;
    }

    public getFileName(): string | null {
        return this.inputFileName;
    }

    public getInputText(): string | null {
        return this.inputText;
    }

    public getNumberOfLetters(): number {
        return this.letterCount;
    }

    public getNumberOfVowels(): number {
        return this.vowelCount;
    }

    public getNumberOfConsonants(): number {
        return this.consonantCount;
    }

    public getSentenceCount(): number {
        return this.sentenceCount;
    }

    public getLongestWord(): string | null {
        return this.longestWordFound;
    }
}

export default ParseText;
