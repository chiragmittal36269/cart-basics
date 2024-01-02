import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
    const [totalCartItemsAmount, setTotalCartItemsAmount] = useState(0);

    // const calculateTotalCartItemsAmount = (cartItems) => {
    //     let total = 0;
    //     cartItems.forEach((item) => {
    //         total += item.amount;
    //     });
    //     setTotalCartItemsAmount(total);
    // };

    // const [choose, setChoose] = useState("");
    // console.log(choose);

    return (
        <div>
            <Header totalCartItemsAmount={totalCartItemsAmount} />
            <Main setTotalCartItemsAmount={setTotalCartItemsAmount} />
            {/* <select
                name=""
                id=""
                value={choose}
                onChange={(e) => setChoose(e.target.value)}>
                <option value="Choose">Choose</option>
                <option value="one">One</option>
                <option value="two">Two</option>
            </select>

            <button onClick={() => setChoose("")}>Click</button> */}
        </div>
    );
}

export default App;
