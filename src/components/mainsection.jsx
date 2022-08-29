import memeData from "../memeData"
import { useState } from "react";

const Mainsection = ()=>{
   
    
    
    const [memeImage,setMemeImage] = useState(" ");

    function getMeme(){
        const memeImages = memeData;
        const randomNumber = Math.floor(Math.random()*memeImages.length)
        setMemeImage(memeImages[randomNumber].img);
       }

    

    return(
        <section className="main__container">
            <div className="input__container">
                <div>
                    <input className="input" placeholder="Enter first line"></input>
                    <input className="input" placeholder="Enter second line"></input>
                    <div>
                    <button className="submit__btn" onClick={getMeme}>Get a new meme image</button>
                    </div>
                </div>
            </div>
            <section className="meme__container">
                <img className="meme__image" src={memeImage} alt="meme"/>
             </section>
        </section>
    )
}

export default Mainsection