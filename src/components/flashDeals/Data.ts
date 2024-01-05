export interface productItems {
  id: number;
  discount: number;
  img: string;
  name: string;
  price: number;
  qty: number;
}

const Data: productItems[] = [
  {
    id: 1,
    discount: 20,
    img: "https://ml1kku4azrnz.i.optimole.com/rmtOYHo-xvDIjOSl/w:800/h:533/q:auto/https://www.advancedcontrolcorp.com/wp-content/uploads/2020/07/cctv-post-img.jpg",
    // img: "img",
    name: "CCTV System",
    price: 800,
    qty: 0, 
  },
  {
    id: 2,
    discount: 25,
    img: "https://caledonsecurity.com/wp-content/uploads/2014/06/EventysFamily.jpg",
    // img: "img",
    name: "CCTV System",
    price: 650,
    qty: 0, 
  },
  {
    id: 3,
    discount: 10,
    img: "https://domar.com/cdn/shop/collections/face-detection-camera.jpg?v=1623940012&width=2048",
    // img: "img",
    name: "CCTV System",
    price: 960,
    qty: 0, 
  },
  {
    id: 4,
    discount: 30,
    img: "https://i0.wp.com/mozabo.com/engineering/wp-content/uploads/2021/08/CCTV-Cameras-That-Work-At-Night.jpg?resize=800%2C400&ssl=1",
    // img: "img",
    name: "CCTV System",
    price: 450,
    qty: 0, 
  },
  {
    id: 5,
    discount: 25,
    img: "https://m.media-amazon.com/images/I/515T2YfsGhL.jpg",
    // img: "img",
    name: "Waterproof CCTV System",
    price: 500,
    qty: 0, 
  },
  {
    id: 6,
    discount: 15,
    img: "https://www.maceden.com/sites/default/files/inline-images/cameras.jpg",
    // img: "img",
    name: "WiFi CCTV System",
    price: 300,
    qty: 0, 
  },
];
export default Data;
