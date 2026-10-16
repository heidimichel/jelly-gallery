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
    Beige = 'beige',
    Black = 'black',
    Blue = 'blue',
    Brown = 'brown',
    Gold = 'gold',
    Gray = "gray",
    Green = 'green',
    Orange = 'orange',
    Peach = 'peach',
    Pink = 'pink',
    Purple = 'purple',
    Red = 'red',
    Silver = 'silver',
    Transparent = 'transparent',
    White = 'white',
    Wine = 'wine',
    Yellow = 'yellow',
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

export enum Features {
  Sandals = 'sandals',
  Boots = 'boots',
  Ballerinas = 'ballerinas',
  Pumps = 'pumps',
  Mules = 'mules',
  Sneakers = 'sneakers',
  FlipFlops = 'flip flops',
  Hearts = 'hearts',
  Buckle = 'buckle',
  Elastic = 'elastic',
  MetalCharm = 'metal charm',
  PeepToe = 'peep toe',
  Ribbons = 'ribbons', //fabric ribbons
  Bows = 'bows', //plastic bows
  FabricStraps = 'fabric straps',
  Straps = 'straps',
  Stars = 'stars',
  Cherries = 'cherries',
  Pouch = 'pouch',
  Collab = 'collab',
  VivienneWestwood = 'Vivienne Westwood',
  JasonWu = 'Jason Wu',
  IrmaosCampana = 'Irmãos Campana',
}

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  year: number;
  description: string;
  colors: Colors[];
  features: Features[];
  heelhight?: HeelHeight;
  type: ProductType;
  pictures: string[];
}
