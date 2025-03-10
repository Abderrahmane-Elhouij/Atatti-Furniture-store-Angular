export interface Product {
    id: number;
    name: string;
    ref: string;
    category: string;
    sub_category: string;
    description: string;
    price: number;
    color: string;
    tags: string;
    fabric: string;
    quantity: number;
    discount_percentage: number;
    rating: number;
    image: string;
    model: string;
    
  }

  
export interface ProductsWithImage {
    products: {
        id: number;
        category: string;
        color: string;
        description: string;
        discount_percentage: number;
        fabric: string;
        price: number;
        quantity: number;
        rating: number;
        sub_category: string;
        tags: string;
        image_path: string;
        model_path: string;
        name: string;
        ref: string;
      };
    
  }
