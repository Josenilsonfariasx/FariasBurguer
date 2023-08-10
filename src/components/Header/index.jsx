import { useState } from "react";
import search from "../../assets/search.svg"
import Logo from "../../assets/Logo.svg";
import car from "../../assets/car.svg"
import style from "./style.module.scss"
export const Header = ({setVisible, visible, cartList}) => {
   const [value, setValue] = useState("");

   const openModal = () =>{
      if(visible){
         return setVisible(false)
      }
      return setVisible(true)
   }
   return (
      <header className={style.header}>
         <div className="container">
            <div>
               <div className={style.cardLogo}>
                  <img src={Logo} alt="Logo Kenzie Burguer" />
                  <button>
                     <img src={car} alt=""  onClick={()=>{openModal()}}/>
                     <span className="title body b-600 white" onClick={()=>{openModal()}} >{cartList.length}</span>
                  </button>
               </div>
               <div className={style.search}>
                  <form>
                     <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="input"
                        />
                     <button type="submit" className="button medium">
                        <img src={search} alt="" />
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </header>
   );
};
