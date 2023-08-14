import { useState } from "react";
import searchimg from "../../assets/search.svg";
import Logo from "../../assets/Logo.svg";
import car from "../../assets/car.svg";
import style from "./style.module.scss";
export const Header = ({setVisible, visible, cartList, search, setSearch}) => {
   const [value, setValue] = useState("");

   const submit = (e)=>{
      e.preventDefault()
      setSearch(value)
   }

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
                     <button type="submit" className="button medium" onClick={(e)=>{submit(e)}}>
                        <img src={searchimg} alt="" />
                     </button>
                  </form>
               <div>
                  {search ? <span className="title body grey">Buscando por: {search}</span> : null}
                  {search ? <span id="sp" className="title body grey" onClick={()=> {setValue(""), setSearch("")}}>Limpar filtros</span> : null}
               </div>
               </div>
            </div>
         </div>
      </header>
   );
};
