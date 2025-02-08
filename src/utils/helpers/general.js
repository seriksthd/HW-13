export const products = [
  {
    id: 1,
    name: "iPhone 15",
    description: "The latest iPhone with cutting-edge features.",
    price: 999,
    image:
      "https://my-apple-store.ru/wa-data/public/shop/products/12/43/14312/images/26509/26509.500@2x.jpeg",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    description: "Lightweight, powerful, and fast laptop with Apple's M2 chip.",
    price: 1199,
    image:
      "https://ipac31.ru/image/cache/data/product/mac/Macbook%20Air%20M2/macbook-air-m2-starlight-2-700x700.png",
  },
  {
    id: 3,
    name: "Apple Watch Series 9",
    description: "The most advanced Apple Watch yet, with new health features.",
    price: 399,
    image: "https://ir.ozone.ru/s3/multimedia-l/c1000/6771606561.jpg",
  },
  {
    id: 4,
    name: "AirPods Pro (2nd generation)",
    description: "Noise-cancelling earbuds with excellent sound quality.",
    price: 249,
    image:
      "https://static.insales-cdn.com/images/products/1/272/597385488/MQD83.jpeg",
  },
];
export const orderData = [
  {
    id: 1,
    name: "iPhone 15",
    date: "2024-10-15",
    status: "Жеткирилди",
    total: 999,
  },
  {
    id: 2,
    name: "MacBook Air M2",
    date: "2024-09-10",
    status: "Жөнөтүлдү",
    total: 1199,
  },
  {
    id: 3,
    name: "Apple Watch Series 9",
    date: "2024-08-25",
    status: "Жеткирилди",
    total: 399,
  },
  {
    id: 4,
    name: "AirPods Pro (2nd generation)",
    date: "2024-07-12",
    status: "Артка кайтарылды",
    total: 249,
  },
];

export const statusColors = {
  Жеткирилди: "green",
  Жөнөтүлдү: "blue",
  "Артка кайтарылды": "red",
};
