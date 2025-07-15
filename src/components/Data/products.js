const products= [
  {
    id: 1,
    name: "Combo preescolar",
    price: 15.00,
    image: "/img/Captura de pantalla_20-4-2025_235638_www.instagram.com.jpeg",
    category: "combos",
  },
  {
    id: 2,
    name: "Combo Básico",
    price: 20.00,
    image: "/img/Captura de pantalla_20-4-2025_235649_www.instagram.com.jpeg",
    category: "combos",
  }
];
const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }   , 3000);
  })
}

const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((products) => products.id === productId);
      resolve(product); 
    }, 3000);
  });
};

export  {getProducts, getProductById};