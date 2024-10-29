import ParseText from "./ParseText";
import FileInput from "./FileInput";

let args = process.argv.slice(2); 

if (args.length > 0) {
    let fileData = FileInput.ContentFromFile(args[0]);
    let parsedText = new ParseText(args[0], fileData);
    console.log(`The file, ${parsedText.getFileName()}, contains a total of ${parsedText.getNumberOfVowels()} vowels, ` +
        `${parsedText.getNumberOfConsonants()} consonants, so in total ${parsedText.getNumberOfLetters()} letters. ` +
        `Moreover, out of ${parsedText.getNumberOfLetters()} available sentences, '${parsedText.getLongestWord()}' is the longest word.`);
} else {
    console.error("ERROR: No arguments were provided!");
}
