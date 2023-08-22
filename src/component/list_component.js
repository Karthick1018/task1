import React from "react";
import { Childcomponent } from "./child_list_component";

const List = () => {
   const data = {
      num: ["one", "two", "three", "four"],
      item: ["abc", "acb", "acd", "cab"],
      letter:["a","b","c"]
   }

   return (
      <div>
         <h1>List Component<br/>Task-3</h1>
         <Childcomponent item={data} />
      </div>

   )
}


export default List;