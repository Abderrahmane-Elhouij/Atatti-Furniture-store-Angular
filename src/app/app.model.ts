export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    tags: string[];
    image: string;
    threeDModel: string;
    quantity: number;
}

export interface FabricOption {
    name: string;
    count: number;
  }