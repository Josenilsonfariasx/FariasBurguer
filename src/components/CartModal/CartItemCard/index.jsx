import { MdDelete } from "react-icons/md";
import style from "./style.module.scss";
import { toast } from "react-toastify";

export const CartItemCard = ({ product, cartList, setCartList}) => {
   const removeItensCart = () =>{
      let remove = cartList.filter((cart)=>{
         return cart.id !== product.id
      })
      remove ? toast.success("Retiramos o item do seu carrinho 🛒") : null 
      setCartList(remove)   
   }
   return (
      <li className={style.li}>
         <div>
            <img src={product.img} alt={product.name} />
            <h3 className="title three black">{product.name}</h3>
         </div>
         <button aria-label="delete" title="Remover item" onClick={()=>{removeItensCart()}}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
