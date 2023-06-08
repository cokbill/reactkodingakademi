import SpaceBetween from "./spacebetween";
import Salam from "./selamatdatang";
import Copyright from "./copyright";

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
  return (  
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
      {/* <SpaceBetween />
      <Salam/>
      <Copyright/> */}
    </div>
  );
}

export default App;
