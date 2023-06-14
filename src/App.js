import React from "react";

function App() {
  const tittle = "koding akademi"

  const wellcome = {
    greeting : "Selamat datang",
    tittle : "koding"
  }

   const myElement = <h1> react is {5 + 5} better than JSX </h1>

   const myCar = (
    <ul>
      <li> Toyota </li>
      <li> Honda </li>
      <li> Mazda </li>
    </ul>
   );
   function Car() {
    return <h3> ini mobil saya </h3>;
   };
   function Car2(props) {
    return <h3> ini mobil saya {props.name}</h3>;
   };

   const myList = [
     {
      tittle : "React",
      url : "https://reactjs.org/",
      author : "Jordan Walke",
      num_comments : 20,
      points : 4,
      objectID : 1,
     },
     {
      tittle : "React",
      url :'https://reactjs.org/',
      author : "Jordan ball",
      num_comments : 50,
      points : 10,
      objectID : 2,
     },
   ]
   
  return (    
    <div className="App text-center font-bold text-3xl">
      selamat datang di {tittle}
      <h1 className="my-5">{wellcome.greeting} di {wellcome.tittle}</h1>
      <h1 className="text-red-600"> {myElement} </h1>
      <label htmlFor="search"> Search </label>
      <input type="text" id="search" placeholder="Cokbill ganteng" className=" w-80 h-10 border border-cyan-300 rounded-md text-xs px-2 text-slate-300"/>
      {myCar}
      <Car/>
      <Car2 name="lamborgini"/>
      { 
        myList.map(item => {
          return (
            <div key={item.objectID}>
              <span>
                <a href="{item.url}">{item.tittle}</a>
              </span>
              <span> {item.author} </span>
              <span> {item.num_comments} </span>
              <span> {item.points} </span>
            </div>
          )
        })
      }   
    </div>
          
  );
};

export default App;
