abstract class Melon {
    weight: number;
    melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
    elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }

    toString() {
        return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

class Firemelon extends Melon {
    elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }

    toString() {
        return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

class Earthmelon extends Melon {
    elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }

    toString() {
        return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

class Airmelon extends Melon {
    elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }

    toString() {
        return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

class Melolemonmelon extends Watermelon {
    element;

    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = [`Water`, `Fire`, `Earth`, `Air`];
    }

    morph() {
        let a = this.element.shift();
        this.element.push(a);
        return this;
    }

    toString() {
        return `Element: ${this.element[0]}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
 let test : Melon = new Melon(100, "Test");

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());