import React from "react";

// import the Contact component
import Contact from "./Course";

function CourseList(props) {
    return (
      <div>
        {props.courses.map(c => <Contact key={c.name} name={c.name} url={c.url} />)}
       </div> 
    ); 
  } 

export default CourseList;