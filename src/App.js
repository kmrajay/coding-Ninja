import React from "react";
import "./styles.css";
import Wrapper from "./Componenets/Wrapper";
import Maintabx from "./Componenets/Maintabx.1";
import Secondarytab from "./Componenets/Secondarytab"
import Wrapper1 from "./Componenets/Wrapper1";

import View from "./Componenets/View";
import { useState,useEffect } from "react";
import Cards from "./Componenets/Cards";

//import cards from "./Componenets/cards";

//const {Tab1,setTab1}=useState("All Events");
//const {Tab2,setTab2}=useState("Upcoming");


//const {Tag,SetTag}=useState("All");

export default function App() {
  const {Tab1,setTab1}=useState({
    tabmain:"All Events",
    tab:"Upcoming",
    tags:[],
  });
  const values=["All Events","Webinars","Coding Events","Bootcamp Events","Workshop"];
  const {Items,setItems}=useState([]);
  useEffect(() => {
    fetch("https://api.codingninjas.com/api/v3/event_tags")
      .then(res => res.json())
      .then(
        (result) => {
        
          //setIsLoaded(true);
          setItems(result.data.tags);
          console.log(typeof(result.data.tags));
          console.group(Items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          //setIsLoaded(true);
          //setError(error);
        }
      )
  }, [])

  return (
    <div className="App">
      <Wrapper>
       <Maintabx>
       </Maintabx>
       <Wrapper1>
         <Secondarytab>

         </Secondarytab>
         <View items="Items">
           <Cards>

           </Cards>
           <Cards >
            
           </Cards>

         </View>
       </Wrapper1>
        
      
        
       
      </Wrapper>
{/*       
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
