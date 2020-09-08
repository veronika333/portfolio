import React from 'react';
import Typewriter from 'typewriter-effect';
import './titleMessage.css';

export default function TitleMessage() {
    return (
       <div className="title-message">

  <h2>Hi, I'm 
    <br />
  <strong>Veronika Maisuradze</strong>    
<br/>
<Typewriter
       options={{
         strings: ['Web Developer', 'Student', 'Learner'],
         autoStart: true,
         loop: true,
       }}
     /></h2>
       </div>
       
    )
}
