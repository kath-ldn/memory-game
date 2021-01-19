import React from 'react';

export default function MessageBoard(props) {
   return(
       <div className="messageBoard">
            {props.message}
       </div>
   ) 
}