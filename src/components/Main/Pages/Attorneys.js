import React from 'react';
// import Link from 'react-router-dom';
// import { ReactComponent } from '*.svg';


const Attorneys = (props) => (
   
<div className="container text-center">
    <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8 text-center'>
        <h2> Attorney Profiles </h2>
        </div>
        <div className='col-md-2'></div>
    </div>
    {/* IMAGE ROW */}
    <div className='row'>
        <div className="col-md-6"><img src={require('../../../images/cori-hs.jpg')} alt='correen-ferrentino'></img></div>
        <div className="col-md-6"><img src={require('../../../images/Erica-Gambale.jpg')} alt='erica-gamble' height='200px' width='150px'></img></div>
       
    </div>
    {/* CAPTION ROW */}
    <div className='row'>
        <div className="col-md-6">Correen Ferrentino</div>
        <div className="col-md-6">Erica Gamble</div>
    </div>
</div>
    
    
)

export default Attorneys;