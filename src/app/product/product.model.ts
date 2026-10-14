export enum Brand {
    Melissa = 'Melissa',
    PetiteJolie = 'Petite Jolie',
    LemonJelly = 'Lemon Jelly',
    KoiFootwear = 'Koi Footwear',
    JimmyChoo = 'Jimmy Choo',
    Chloe = 'Chloé',
    HandM = 'H&M',
    Zara = 'Zara',
    AncientGreek = 'Ancient Greek Sandals',
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
    Beige = 'beige',
    Brown = 'brown',
    Black = 'black',
    White = 'white',
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

//TODO: add possible features to identify a shoe with, ex, heels or flats, closed toe (pumps) or open toe (sandals), etc. They could also be bag or accessories features. For now they will appear in the DB as a plain string.

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  year: number;
  description: string;
  colors: Colors[];
  features: string[];
  heelhight?: HeelHeight;
  type: ProductType;
  pictures: string[];
}
