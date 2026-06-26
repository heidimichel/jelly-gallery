import { Brand, Colors, Product, ProductType } from "../../app/product/product.model";
//adding items in a new mock file closer to the tour of heroes

export const PRODUCTS: Product[] = [
    {
        id: "00001",
        name: 'Vixen',
        brand: Brand.Melissa,
        year: 2018,
        description: "aaaaaaaaaaaaa",
        colors: [Colors.Peach, Colors.Black, Colors.Red],
        features: ["sandals", "high heel"],
        type: ProductType.Shoe
    },
    {
        id: "00002",
        name: 'Rocking Horse Ballerina',
        brand: Brand.Melissa,
        year: 2016,
        description: "bbbbbbbbbbbb",
        colors: [Colors.Black, Colors.White, Colors.Red, Colors.Gray],
        features: ["ribbons", "platform", "pumps", "Vivienne Westwood"],
        type: ProductType.Shoe
    },
    {
        id: "00003",
        name: 'Ultragirl',
        brand: Brand.Melissa,
        year: 2006,
        description: "ccccccccccccc",
        colors: [Colors.White, Colors.Black, Colors.Yellow],
        features: ["flats"],
        type: ProductType.Shoe
    },
    {
        id: "00004",
        name: 'Ultragirl Bag',
        brand: Brand.Melissa,
        year: 2023,
        description: "dddddddddddddd",
        colors: [Colors.Pink, Colors.Black, Colors.Red],
        features: ["strap"],
        type: ProductType.Bag
    },
    {
        id: "00005",
        name: 'Lady Dragon II',
        brand: Brand.Melissa,
        year: 2020,
        description: "eeeeeeeeeeeeeee",
        colors: [Colors.Peach, Colors.Black, Colors.Red],
        features: ["sandals", "high heel"],
        type: ProductType.Shoe
    },
    {
        id: "00006",
        name: 'Flower Sandal',
        brand: Brand.KoiFootwear,
        year: 2022,
        description: "ffffffffffffffff",
        colors: [Colors.Peach, Colors.Black, Colors.Red, Colors.Pink],
        features: ["sandals", "platform", "flowers"],
        type: ProductType.Shoe
    },
    {
        id: "00007",
        name: 'Rainy Boots',
        brand: Brand.LemonJelly,
        year: 2020,
        description: "gggggggggggggggggg",
        colors: [Colors.White, Colors.Black, Colors.Pink],
        features: ["boots"],
        type: ProductType.Shoe
    },
    {
        id: "00008",
        name: 'Square Bag',
        brand: Brand.PetiteJolie,
        year: 2019,
        description: "hhhhhhhhhhhhhh",
        colors: [Colors.Peach, Colors.Yellow, Colors.Red],
        features: ["strap"],
        type: ProductType.Bag
    },
    {
        id: "00009",
        name: 'Example Product',
        brand: Brand.LemonJelly,
        year: 2025,
        description: "iiiiiiiiiiiiii",
        colors: [Colors.Peach, Colors.Black, Colors.Red],
        features: ["flower"],
        type: ProductType.Accessory
    },
]