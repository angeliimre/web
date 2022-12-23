import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { useState } from "react";

export const Kategoria=function(props){
    return <div style={{display:"flex",justifyContent:"center"}}>
        <Link to="/"><button>Cipő</button></Link>
        <Link to="/Nadrag"><button>Nadrag</button></Link>
        <Link to="/Pullover"><button>Pullover</button></Link>
    </div>
}

export const Termékek=function(props){
    const [kosar,hozzaad]=useState({});
    const [ossz,novel]=useState(0);
    return <div style={{display:"flex",justifyContent:"center"}}>
        
    <Routes>
        <Route index element={<table>
            <Sor Márka="Nike" Ár="22000" Kosár={kosar} Hozzáad={hozzaad}/>
            <Sor Márka="Adidas" Ár="20000" Kosár={kosar} Hozzáad={hozzaad}/>
            <Sor Márka="Puma" Ár="21000" Kosár={kosar} Hozzáad={hozzaad}/>
        </table>}/>
        <Route path="Nadrag" element={<table id="gatya">
            <Sor Márka="Blue" Ár="10000" Kosár={kosar} Hozzáad={hozzaad}/>
            <Sor Márka="Dark" Ár="9000" Kosár={kosar} Hozzáad={hozzaad}/>
        </table>}/>
        <Route path="Pullover" element={
            <table id="pulcsi">
            <Sor Márka="Original" Ár="13000" Kosár={kosar} Hozzáad={hozzaad}/>
            <Sor Márka="Fundango" Ár="8000" Kosár={kosar} Hozzáad={hozzaad}/>
        </table>
        
        }/>
        
    </Routes>
        <div style={{position:"absolute",left:"0px",top:"0px"}}>
            <span>Csomagom:</span>
            {
                Object.keys(kosar).map(function(k){
                    return <div style={{display:"flex",flexDirection:"row"}}><div style={{backgroundColor:"yellow"}}>{k+" "+kosar[k][0]+" "+kosar[k][1]}</div>
                        <button onClick={function(){kosar[k][0]>=2?kosar[k][0]-=1:delete(kosar[k]);hozzaad({...kosar})}}>-</button>
                    </div>
                })
            }
            <button onClick={function(){
                let szam=0
                Object.keys(kosar).forEach(function(k){
                    szam+=(kosar[k][0]*kosar[k][1])
                })
                novel(szam)
            }}>Számol</button>
            <span>{ossz}</span>
        </div>
    </div>
}
export const Sor=(props)=>{
    return <tr>
            <td>
                {props.Ár}
            </td>
            <td>
                {props.Márka}
            </td>
            <td>
                <img style={{maxWidth:80}} src={require("./img/"+props.Márka+".jpg")} />
            </td>
            <td>
                <Number Márka={props.Márka} Ár={props.Ár} Kosár={props.Kosár} Hozzáad={props.Hozzáad}/>
            </td>
            <td>
                
            </td>
        </tr>
}


export const Number=(props)=>{
    const [mennyiseg,valtoztat]=useState(0)
    return <>
            <div style={{display:"flex",flexDirection:"row"}}><input type="textbox" style={{width:"20px",height:"30px"}} value={mennyiseg}/>
            <div style={{display:"flex",flexDirection:"column"}}><button style={{width:"25px",height:"15px"}} onClick={function(){valtoztat(mennyiseg+1)}}>^</button>
            <button style={{width:"25px",height:"15px"}} onClick={function(){mennyiseg>=1?valtoztat(mennyiseg-1):valtoztat(0)}}>ˇ</button></div><button onClick={function(){props.Kosár.hasOwnProperty(props.Márka)?props.Kosár[props.Márka][0]+=mennyiseg:props.Kosár[props.Márka]=[mennyiseg,props.Ár];props.Hozzáad({...props.Kosár});valtoztat(0)}}>Hozzáad</button></div>
        </>
}
