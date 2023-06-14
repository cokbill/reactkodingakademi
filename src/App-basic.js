import SpaceBetween from "./spacebetween";
import Salam from "./selamatdatang";
import Copyright from "./copyright";
import React, {useState} from "react";

function App() {
  // create js variable 
  const cityName = "Denpasar";
  let number1 = 200;
  let number2 = 800;

  console.log(cityName);
  console.log(number1);
  console.log(number2);

  // sum 
  const sum = (number1, number2) => {
    return number1 + number2
  }

console.log(sum(number1, number2));

// looping fn 
const sample = (name) => {
  let word = "";
 for (let i = 0; i < 3; i++) {
   word = word + name + " ";
 };
   return word
};
console.log(sample('dodi'));


// 

const [getObjVal, setObjVal] = useState("");

const CartItem = {
      itemID : 1,
    itemName : "shoe nike",
    itemPrice : "$56",
    itemQuantity : 2,
    cartID: 201,
}
const GetNameQty = () => {
  setObjVal(CartItem.itemName + " " + CartItem.itemQuantity);
};

// return myobj.itemName + " " + myobj.itemQuantity;


// tampilkan string berupa backtick petik 2 petik 1
const stringA = 'this is bootcamp';
const stringB = "FULLSTACK WEB DEVELOPER";
const strC = `by "Koding Akademi"`;

// array 
const fruits = ["jambu", "mangga", "durian", "anggur"];

// jumlah array
  const jumlahFruits = fruits.length;

  // ganti value durian
  const newFruits = fruits.map((fruit, index) => {
    if (index === 2) {
      return "salak";
    } 
    return fruit;
  })

  // tambahkan value rambutan
  const tambahfruits = fruits.push("Rambutan");
  console.log(tambahfruits);

  // sum return a + b > 100
  function ifSum(a, b) {
  return a + b < 100 ? true : false;
  }

  console.log(ifSum(50, 40));


// for in statement 
const student = {
  name : "wayan suksma",
  age : 30,
  hobbies : ['membaca', 'ngoding', 'tidur'],
};

for ( const s in student ) {
  console.log(student[s]);

}

class Rectangle {
  constructor (height, width) {
    this.height = height;
    this.width = width;
  }
}

const square = new Rectangle(30, 30);

  return (  
    <>
    <div className="w-full h-screen text-center bg-slate-700">
     <div className="text-3xl text-white">
     2.a {cityName}
      </div>  
     <div className="text-3xl text-white">
     2.b {number1}
      </div>  
     <div className="text-3xl text-white">
     2.c {number2}
      </div>    
     <div className="text-3xl text-white">
     {sum(number1, number2)}
      </div>    
     <div className="text-3xl text-white">
      4.a {sample('dodi')}
      </div>    
     <div className="text-3xl text-white">
      4.b {sample('150')}
      </div>
      <div className=" textwrapper w-[450px] mx-auto bg-slate-300 rounded-lg py-6"> 
      <div className="text-3xl text-white">{stringA}</div>
      <div className="text-3xl text-white">{stringB}</div>
      <div className="text-3xl text-white">{strC}</div>
      </div>
      <div className="buttonwrapper w-[400px] mx-auto bg-slate-300 rounded-lg py-10 mt-4  ">
      <div className="text-3xl text-white">{getObjVal}</div>
        <button className="px-6 py-4 bg-black rounded-lg text-white" onClick={()=> GetNameQty()}>click me</button>
      </div>
      <div className="text-3xl text-white">jumlah dr array fruits : {jumlahFruits}</div>
      {/* <SpaceBetween />
      <Salam/>
      <Copyright/> */}
    </div>
    </>
  );
};

export default App;
