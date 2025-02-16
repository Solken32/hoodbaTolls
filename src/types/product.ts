export type Product =  {
    id: number;
    name: string;
    price: number;
    image: string;
    image2: string;
    image3: string;
    description: string;
    description2: string;
    adicional: string;
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
