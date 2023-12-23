import Ndata,  {NdataProps} from "./Ndata"
import "./styles.css"
const Cart = () => {
  return (
    <>
    {/* NEW ARRIVALS */}
      <div className="content grid product display_flex">
         {Ndata.map((value: any, index: number) =>{
          return(
            <div className="box" key={index}>
              <div className="img">
                <img src={value.img} alt="" />
              </div>
              <h4 className="names">{value.desc}</h4>
              <h4>{value.price}</h4>
            </div>
          )
         })}
      </div>
    </>
  )
}

export default Cart
