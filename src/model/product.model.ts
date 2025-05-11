export interface Product {
    id: number,
    name: string,
    price: {
        main: number,
        fractional: number;
    }
}

export interface CartProduct {
    id: number,
    name: string,
    price: {
        main: number,
        fractional: number;
    },
    quantity: number
}