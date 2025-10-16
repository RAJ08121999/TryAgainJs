import { useState } from "react";

import Card from "./Card";

const CardContainer = () => {

    const [ cards ] = useState<string[]>(Array(10).fill(""))
    
  return (
    <div className="flex flex-wrap justify-between items-center p-4">
      {
        cards.map((_,index)=>(
          <Card key={index} index={index}/>
        ))
      }
    </div>
  )
}

export default CardContainer
