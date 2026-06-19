export enum Brand {
    Melissa = 'Melissa',
    PetiteJolie = 'Petite Jolie',
    LemonJelly = 'Lemon Jelly',
    KoiFootwear = 'Koi Footwear',
    //todo: check other brands that regularly release jelly shoes. These are the biggest, but other designers (like Karl Lagerfeld) release tem too, add them later (not now)
}

export enum Colors {
    Purple = 'purple',
    Blue = 'blue',
    Green = 'green',
    Yellow = 'yellow',
    Orange = 'orange',
    Red = 'red',
    Pink = 'pink',
    Black = 'black',
    White = 'white',
    //todo: check and add more colors common for the products in the gallery
}

export enum ProductType {
  Shoe = 'shoe',
  Bag = 'bag',
  Accessory = 'accessory',
}

//TODO: add possible features to identify a shoe with, ex, heels or flats, closed toe (pumps) or open toe (sandals), etc. They could also be bag or accessories features.

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  year: number;
  description: string;
  colors: Colors[];
  features: string[];
  type: ProductType;
}
