import React, { useEffect, useState} from "react";
import Amounts from "./amounts";
import ShoppingList from "./list";

const Toggle = () => {

    const [ hide, show ] = useState(true);

    const [ button, setButton ] = useState('Hide Shopping List');

    const [ plus, minus ] = useState(false);

    const changeBtn = () => {
        
        if (hide === false) {
          setButton('Hide Shopping List');
          show(!hide);
          minus(!plus);
        } else if (hide === true) {
          setButton('Show Shopping List');
          show(!hide);
          minus(!plus);
        }
    };

    return (
        <>
        <Amounts/>
        <button className={`btn toggle ${plus ? "": "close"}`} onClick={changeBtn}>
        {button}
        </button>
        { hide && <ShoppingList/>}
        </>
    );
};

export default Toggle;