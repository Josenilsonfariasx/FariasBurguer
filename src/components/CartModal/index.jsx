import { useState } from "react";
import close from "../../assets/x.svg";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss"
import { toast } from "react-toastify";

export const CartModal = ({ cartList, setVisible, setCartList}) => {

   const removeAllItemsCart = ()=>{
      let remove = cartList.filter((cart)=>{
         
         return cart.id === ''
      })
      remove ? toast.success('Limpamos seu carrinho de compras 🛒') : null
      setCartList(remove)
   }

   const [len, setLen] = useState(false)

   const closeModal = () =>{
      setVisible(false)
   }
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={style.modalOverlay}>
         <div className={style.modal}>
            <div className={style.modalHeader}>
               <h2 className="title three white">Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" onClick={()=>{closeModal()}}>
                  <img src={close} alt="X" />
               </button>
            </div>
            <div className={style.modalList}>
               {cartList.length === 0 ? (
                  <span className="title headline grey">A lista de produtos está vazia😢</span>
               ): (
                  <ul>
                     {cartList.map((product) => (
                        <CartItemCard key={product.id} product={product} cartList={cartList} setCartList={setCartList} />
                     ))}
                  </ul>
                  )}
            </div>   
            <div className={style.modalFooter}>
               <div>
                  <span className="title four black">Total</span>
                  <span className="title grey">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button className="button" onClick={()=>{removeAllItemsCart()}}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
