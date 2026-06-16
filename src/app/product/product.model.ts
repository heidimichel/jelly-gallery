export enum Brand {
    Melissa = 'Melissa',
    PetiteJolie = 'Petite Jolie',
    LemonJelly = 'Lemon Jelly',
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
}

export enum ProductType {
  Shoe = 'shoe',
  Bag = 'bag',
  Accessory = 'accessory',
}

//TODO: add possible features to identify a shoe with, ex, heels or flats, closed toe (pumps) or open toe (sandals), etc.

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
