export enum Brand {
    Melissa = 'Melissa',
    PetiteJolie = 'Petite Jolie',
    LemonJelly = 'Lemon Jelly',
    KoiFootwear = 'Koi Footwear',
    //TODO: check other brands that regularly release jelly shoes. These are the biggest, but other designers (like Karl Lagerfeld) release tem too, add them later (not now)
}

export enum Colors {
    Purple = 'purple',
    Blue = 'blue',
    Gray = "gray",
    Green = 'green',
    Yellow = 'yellow',
    Orange = 'orange',
    Red = 'red',
    Pink = 'pink',
    Peach = 'peach',
    Black = 'black',
    White = 'white',
    //TODO: check and add more colors common for the products in the gallery
}

export enum ProductType {
  Shoe = 'shoe',
  Bag = 'bag',
  Accessory = 'accessory',
}

export enum HeelHeight {
  Flat = 'flat',
  Low = 'low',
  Medium = 'medium',
  High = 'high',
  Platform = 'platform',
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
  //pictures: []; //array of image addresses? how should that work?
}
