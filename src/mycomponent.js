import React, {useState} from "react";

const Mycomponent = () => {
    const [flavor, setflavor] = useState("vanilla");

 const handleChange = (event) => {
     setflavor(event.target.value);
 }

 const handlesubmit = (event) => {
     alert(`SAYA PILIH : ${flavor}`);
     event.preventDefault();
 }
    return (
        <form onSubmit={handlesubmit}>
            <label>pilih Flavor : </label>
            <select value={flavor} onChange={handleChange}>
                <option value="vanilla">Vanilla</option>
                <option value="strawberry">Strawberry</option>
                <option value="chocolate">Chocolate</option>
            </select>
            <input type="submit" value="kirim" />
        </form>
    )
}

export default Mycomponent;