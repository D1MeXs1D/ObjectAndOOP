class Gadjet {
     constructor  (name ,color, power) {
        this.name = name,
        this.color = color,
        this.power = power
        }


     ElectricalAppliances() {        
            let PC = new Gadjet("Компьютер","красный",  10000);
            console.log(PC)
            let lamp = new Gadjet("Лампа","синяя",  1000);
            console.log(lamp)
            let dishwasher = new Gadjet("Посудомойка","серебристая",  5000);
            console.log(dishwasher)    
        }       
}


class Print extends Gadjet{
    print() {
       super.ElectricalAppliances();
    }
}

const resultPrint = new Print();
resultPrint.print();
// ======================================

