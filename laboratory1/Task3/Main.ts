import Display from "./Display";
import Assistant from "./Assistant";

const main = () => {
    const acer = new Display(3840, 2160, 163.18, "Acer Predator X27");
    const lg = new Display(1920, 1080, 60.00, "LG UltraGear 27GL850");
    const dell = new Display(2560, 1440, 109.68, "Dell UltraSharp U2720Q");

    let advisor = new Assistant("Robot_Assistant");
    advisor.assignDisplay(acer);
    advisor.assignDisplay(lg);
    advisor.assignDisplay(dell);

    advisor.assist();

    const purchased = advisor.buyDisplay(dell);
    if (purchased) {
        console.log(`The ${purchased.Model} display was bought!`);
    } else {
        console.log("No such display was found in the assigned list!");
    }

    advisor.assist();
};

main();
