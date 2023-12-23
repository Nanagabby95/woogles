const data = [
  {
    cateImg: "https://5.imimg.com/data5/YH/MJ/SP/SELLER-44481004/bentech-solar-pv-module-500x500.jpg",
    cateName: "PV Module Solar"
  },
  {
    cateImg: "https://shop.gennextechnologies.com/storage/2021/11/Jinko-390w-Solar-Panel1.jpg",
    cateName: "Jinko Solar"
  },
  {
    cateImg: "https://energymall.ng/wp-content/uploads/2019/07/Canadian-Solar-300-Watts-Monocrystalline-solar-panel-3.jpg",
    cateName: "Canadian Solar"
  },
  {
    cateImg: "https://fouanistore.com/storage/data/products/956.png?v=0",
    cateName: "Growatt Inverter"
  },
  {
    cateImg: "https://fouanistore.com/storage/data/products/956.png?v=0",
    cateName: "Deep-Circle Inverter Batteries"
  },
  {
    cateImg: "https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/Q/Q/118295_1549123595.jpg",
    cateName: "Online UPS"
  }
 
]
const Categories = () => {
  return (
    <div className="category">
      {data.map((value, index) => {
        return (
          <div className="box f_flex" key={index}>
            <img src={value.cateImg} alt="solar"  />
            <span>{value.cateName}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
