import React from 'react';
import Typewriter from 'typewriter-effect';
import './titleMessage.css';

export default function TitleMessage() {
    return (
       <div className="title-message">
 <div className="heading">
        <div className="main text-center mb-3">
  <h2 className="padded-multiline"><span>Hi, I'm 
    <br />
    <br />
  <strong>Veronika Maisuradze</strong>    
<br/> <br/>
<Typewriter
       options={{
         strings: ['Web Developer', 'Student', 'Learner'],
         autoStart: true,
         loop: true,
       }}
     /></span>
    </h2>
       </div>
       </div>
       </div>
    )
}
