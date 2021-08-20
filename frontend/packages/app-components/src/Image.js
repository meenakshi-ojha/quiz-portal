
import React from 'react';
import './Image.css';
import quizimage from './quiz-image.png';
export const Image = (props) => (
  
    <div className="gallery">
  
    <img src={quizimage} alt="Cinque Terre" />
 
  <div class="desc">{props.desc}</div>
</div>
)