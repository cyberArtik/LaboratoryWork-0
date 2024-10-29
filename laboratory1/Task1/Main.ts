import { Display } from "./Display";

class Program {
    static main() {

        let acer = new Display(3840, 2160, 163.18, "Acer Predator X27");
        let lg = new Display(1920, 1080, 60.00, "LG UltraGear 27GL850");
        let dell = new Display(2560, 1440, 109.68, "Dell UltraSharp U2720Q");
        lg.comparisonMonitor(dell);
        acer.comparisonMonitor(lg);
        dell.comparisonMonitor(acer);
    }
}

Program.main();
