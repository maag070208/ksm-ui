let products = [
    {
      id: "1001",
      code: "l340dk2r8",
      name: "Leather Backpack",
      description: "Stylish leather backpack with multiple compartments.",
      image: "leather-backpack.jpg",
      price: 120,
      category: "Accessories",
      quantity: 15,
      inventoryStatus: "INSTOCK",
      rating: 4.7,
    },
    {
      id: "1002",
      code: "s210xh1t9",
      name: "Stainless Steel Water Bottle",
      description: "Insulated water bottle with leak-proof lid.",
      image: "water-bottle.jpg",
      price: 25,
      category: "Accessories",
      quantity: 50,
      inventoryStatus: "INSTOCK",
      rating: 4.8,
    },
    {
      id: "1003",
      code: "w280fj4n7",
      name: "Wool Scarf",
      description: "Warm wool scarf available in various colors.",
      image: "wool-scarf.jpg",
      price: 40,
      category: "Accessories",
      quantity: 30,
      inventoryStatus: "INSTOCK",
      rating: 4.9,
    },
    {
      id: "1004",
      code: "c550rg7v1",
      name: "Canvas Tote Bag",
      description: "Eco-friendly canvas tote with reinforced handles.",
      image: "canvas-tote.jpg",
      price: 18,
      category: "Accessories",
      quantity: 40,
      inventoryStatus: "INSTOCK",
      rating: 4.6,
    },
    {
      id: "1005",
      code: "d112kl3u6",
      name: "Digital Watch",
      description:
        "Modern digital watch with backlight and multiple functions.",
      image: "digital-watch.jpg",
      price: 75,
      category: "Accessories",
      quantity: 20,
      inventoryStatus: "INSTOCK",
      rating: 4.5,
    },
    {
      id: "1006",
      code: "g990px5z2",
      name: "Classic Sunglasses",
      description: "Timeless sunglasses with UV protection.",
      image: "sunglasses.jpg",
      price: 55,
      category: "Accessories",
      quantity: 35,
      inventoryStatus: "INSTOCK",
      rating: 4.7,
    },
    {
      id: "1007",
      code: "b672mh4x1",
      name: "Silk Tie",
      description: "Elegant silk tie available in various patterns.",
      image: "silk-tie.jpg",
      price: 30,
      category: "Accessories",
      quantity: 25,
      inventoryStatus: "INSTOCK",
      rating: 4.8,
    },
    {
      id: "1008",
      code: "t830nv9k5",
      name: "Leather Belt",
      description: "High-quality leather belt with adjustable buckle.",
      image: "leather-belt.jpg",
      price: 45,
      category: "Accessories",
      quantity: 22,
      inventoryStatus: "INSTOCK",
      rating: 4.6,
    },
    {
      id: "1009",
      code: "h231lc6r9",
      name: "Canvas Sneakers",
      description: "Comfortable canvas sneakers in various sizes.",
      image: "canvas-sneakers.jpg",
      price: 85,
      category: "Footwear",
      quantity: 18,
      inventoryStatus: "INSTOCK",
      rating: 4.7,
    }, 
    {
      id: "1010",
      code: "p765jr8u4",
      name: "Wool Beanie",
      description: "Cozy wool beanie for cold weather.",
      image: "wool-beanie.jpg",
      price: 25,
      category: "Accessories",
      quantity: 28,
      inventoryStatus: "INSTOCK",
      rating: 4.8,
    },
    {
      id: "1011",
      code: "q549kp3w7",
      name: "Knitted Gloves",
      description: "Warm knitted gloves available in various colors.",
      image: "knitted-gloves.jpg",
      price: 22,
      category: "Accessories",
      quantity: 32,
      inventoryStatus: "INSTOCK",
      rating: 4.7,
    },
  ];

export const getProducts = () => {
    return products;
  }

export const getProductById = (id: string)=> {
    return products.filter((product)=> product.id===id);
}

export const getProductsPromise = async () => {
   return new Promise<any>((resolve, reject) => {
    setTimeout(()=>{resolve(products)},2000)    
    })
}

export const deleteProductById = (id: string)=> {
  return products.filter((product) => product.id!==id);
}