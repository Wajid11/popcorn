import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';
function Test(){
  const [defaultmovierate,setDefaultmovierate ] =useState(0);
  return(
    <>
    <StarRating numStar={3} onDefaultSetRating={setDefaultmovierate}/>
<p>This movie was rated {defaultmovierate} Stars</p>
</>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating numStar={5}  /> */}
    {/* message={['Terrible','Average','good','great','perfect']} */}
    {/* <StarRating numStar={2} /> */}
    {/* <StarRating numStar={5} defaultRating={3} color={'red'} className={'test'} message={['Terrible','Average','good','great','perfect']}  /> */}
<Test/>
 
  </React.StrictMode>
);
