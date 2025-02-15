export type Product =  {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

export type Categories= {
    id:number;
    image: string;
    name: string;
}

export type Subcategories =  {
    id: number;
    name: string;
}

export interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}
