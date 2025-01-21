// The Open/Closed Principle states that software entities should be open for 
// extension but closed for modification.
// This means that the behavior of a module can be extended without modifying its source code.

interface Product {
    getPrice(): number;
}

class Electronics implements Product {
    constructor(private price: number) {}

    getPrice(): number {
        return this.price;
    }
}

class Clothing implements Product {
    constructor(private price: number) {}

    getPrice(): number {
        return this.price;
    }
}

// New product type: Groceries
class Groceries implements Product {
    constructor(private price: number) {}

    getPrice(): number {
        return this.price;
    }
}

class ShoppingCart {
    static calculateTotal(products: Product[]): number {
        return products.reduce((total, product) => total + product.getPrice(), 0);
    }
}

// Usage
const products: Product[] = [
    new Electronics(299.99),
    new Clothing(49.99),
    new Groceries(19.99) // Adding new product type without modifying existing code
];

console.log(`Total: $${ShoppingCart.calculateTotal(products)}`);