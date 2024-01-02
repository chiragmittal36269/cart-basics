import { useState } from "react";
import data from "../../Components/Data.json";
import List from "./List";
import "./Main.css";

function Main({ setTotalCartItemsAmount }) {
    const [productList, setproductList] = useState([]);

    const [localList, setLocalList] = useState({});

    function addToLocalList(e) {
        let product = data.filter((item) => item.title === e.target.value);
        setLocalList(product[0]);
    }

    const [totalProductListPrice, setTotalProductListPrice] = useState(0);

    let calculateTotalProductListPrice = (currentProductList) => {
        let total = currentProductList.reduce((sum, item) => {
            return sum + item.price * item.amount;
        }, 0);
        setTotalProductListPrice(total);
    };

    function setListInProductList() {
        if (localList.title === undefined) {
            alert("please select a product");
            return;
        } else if (localList.price === undefined) {
            alert("please select a product");
            return;
        } else if (isNaN(localList.amount)) {
            alert("please enter the amount");
            return;
        } else if (localList.amount > 10) {
            alert("please enter the amount upto 10");
            return;
        } else if (localList.amount === "") {
            alert("please atleast buy a unit");
            return;
        }
        let currentProductList = [...productList];
        currentProductList.push(localList);
        setproductList(currentProductList);
        calculateTotalProductListPrice(currentProductList);
        setTotalCartItemsAmount(currentProductList.length);
        setLocalList({});
    }

    function updateProductList(type, index) {
        let currentProductList = [...productList];
        if (type === "inc") {
            currentProductList[index].amount++;
            setproductList(currentProductList);
        } else if (type === "dec") {
            if (currentProductList[index].amount > 1) {
                currentProductList[index].amount--;
                setproductList(currentProductList);
            } else {
                currentProductList.splice(index, 1);
                setproductList(currentProductList);
            }
        } else {
            currentProductList.splice(index, 1);
            setproductList(currentProductList);
        }
        calculateTotalProductListPrice(currentProductList);
        setTotalCartItemsAmount(currentProductList.length);
    }

    function clearList() {
        setproductList([]);
        setTotalProductListPrice(0);
        setTotalCartItemsAmount(0);
    }

    return (
        <main>
            <div className="inputs">
                <select value={localList.title} onChange={addToLocalList}>
                    <option value="select">select</option>
                    {data.map((item) => (
                        <option key={item.id} value={item.title}>
                            {item.title}
                        </option>
                    ))}
                </select>

                <input
                    type="text"
                    name=""
                    id=""
                    disabled
                    value={
                        localList.price && localList.amount
                            ? localList.price * localList.amount
                            : 0
                    }
                />

                <input
                    type={isNaN(localList.amount) ? "text" : "number"}
                    min={1}
                    max={10}
                    value={
                        localList.amount !== undefined ? localList.amount : 0
                    }
                    onChange={(e) => {
                        setLocalList({ ...localList, amount: e.target.value });
                    }}
                />

                <button onClick={setListInProductList} className="add-btn">
                    Add
                </button>
            </div>

            <p style={{ display: productList.length === 0 ? "block" : "none" }}>
                Not found any items in your cart
            </p>

            <div className="card-list">
                {productList.map((item, idx) => (
                    <List
                        key={item.id}
                        itemData={item}
                        idx={idx}
                        updateFunction={updateProductList}
                    />
                ))}
            </div>

            <div className="item-total">
                <p>Total</p>
                <h2>{totalProductListPrice}</h2>
            </div>

            <button
                onClick={clearList}
                className="clear-btn"
                style={{
                    display: productList.length === 0 ? "none" : "flex",
                }}>
                Clear All
            </button>
        </main>
    );
}

export default Main;
