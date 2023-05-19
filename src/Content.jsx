import axios from "axios";
import { useState, useEffect } from "react";
import { BicyclesIndex } from "./BicyclesIndex";
import { BicyclesNew } from "./BicyclesNew";

export function Content () {
   const [bicycles, setBicycles] = useState([]);
   const handleCreateBicycle = (params, successCallback) => {
        console.log("handleCreateBicycle", params);
        axios.post("http://localhost:3000/bicycles.json", params).then((response) => {
          setBicycles([...bicycles, response.data]);
         successCallback();
       });
      };

   const handleIndexBicycles = () => {
     console.log("handleIndexBicycles");
     axios.get("http://localhost:3000/bicycles.json").then((response) => {      
      console.log(response.data);
      setBicycles(response.data);     
    });   
  };
   useEffect(handleIndexBicycles, []);

  return (
    <div>
      <BicyclesNew onCreateBicycle={handleCreateBicycle}/>
      <BicyclesIndex bicycles={bicycles}/>
    </div>
    );
  }