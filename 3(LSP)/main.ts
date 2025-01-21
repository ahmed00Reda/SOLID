class Bird {
    fly(): void {
        console.log("Flying");
    }
}

class Eagle extends Bird {
    fly(): void {
        console.log("Eagle is flying high");
    }
}

class Penguin extends Bird {
    fly(): void {
        throw new Error("Penguins can't fly");
    }

    swim(): void {
        console.log("Penguin is swimming");
    }
}

function makeBirdFly(bird: Bird): void {
    bird.fly();
}

// Usage
const eagle = new Eagle();
const penguin = new Penguin();

makeBirdFly(eagle); // Works fine
makeBirdFly(penguin); // Throws error: Penguins can't fly

// Correct approach adhering to LSP
abstract class BirdLSP {
    abstract move(): void;
}

class EagleLSP extends BirdLSP {
    move(): void {
        console.log("Eagle is flying high");
    }
}

class PenguinLSP extends BirdLSP {
    move(): void {
        console.log("Penguin is swimming");
    }
}

function makeBirdMove(bird: BirdLSP): void {
    bird.move();
}

// Usage
const eagleLSP = new EagleLSP();
const penguinLSP = new PenguinLSP();

makeBirdMove(eagleLSP); // Works fine
makeBirdMove(penguinLSP); // Works fine