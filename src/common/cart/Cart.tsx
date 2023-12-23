import { FaTimes, FaPlus, FaMinus} from "react-icons/fa";
import "./style.css"
interface CartProps {
  cartItem: any[]; // Replace 'any[]' with the actual type of cart items
  addToCart: (product: any) => void;
  decreaseQty: (product: any) => void;
}

const Cart: React.FC<CartProps> = ({ cartItem, addToCart, decreaseQty }) => {
    const totalPrice = cartItem.reduce((total, item) => total + (item.price * item.qty), 0);
    return (
    <>
      <section className='cart-items'>
        <div className="container d_flex">
            <div className="cart-details">
                {cartItem.length === 0 && <h1 className='no-items product'> No Items are added in the cart</h1> }

                {cartItem.map((PItem) =>{
                    const prodcutQty = PItem.price * PItem.qty
                    return (
                        <div className="cart-list product d_flex">
                            <div className="img">
                                <img src={PItem.img} alt="" className='cart-img'/>
                            </div>
                            <div className="cart-details">
                                <h3>{PItem.name}</h3>
                                <h4>
                                    {PItem.price}.00 {PItem.qty}
                                    <span>${prodcutQty}.00</span>
                                </h4>
                            </div>
                            <div className="cart-items-function">
                                <div className="removeCart">
                                    <button className=""><FaTimes /></button>
                                </div>
                                <div className="cartContol d_flex">
                                    <button className="incCart" onClick={()=> addToCart(PItem)}>
                                        <FaPlus />
                                    </button>
                                    <button className="desCart" onClick={()=> decreaseQty(PItem)}>
                                        <FaMinus />
                                    </button>
                                </div>
                            </div>
                            <div className="cart-item-price">

                            </div>
                        </div>
                    )
                })}
               
               <div className="cart-total product">
                    <h2>Cart Summary</h2>
                    <div className="d_flex">
                        <h4>Total Price:</h4>
                        <h3>{totalPrice}.00</h3>
                    </div>
               </div>
            </div>
        </div>

      </section>
    </>
  );
};

export default Cart;
