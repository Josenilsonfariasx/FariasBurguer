import { MdDelete } from "react-icons/md";
import style from "./style.module.scss"

export const CartItemCard = ({ product, len, setLen }) => {
   const removeItensCart = () =>{
      localStorage.clear()
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
