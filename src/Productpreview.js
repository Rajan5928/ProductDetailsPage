import React from 'react'
import classes from './Productpreview.module.css'
 const Productpreview = (props) => {
     const currentHours = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
     const currentMins = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
     return(
         <div className={classes.productpreview}>
             <img src={props.currentproductpreview} alt="watch"/>
             {
                 props.showheartbeat === 1 ? 
                     <div className={classes.heartdata}>
                         <i className="fas fa-heartbeat icon" />
                         <div>78</div>
                     </div> :
                     <div className={classes.timedata}>
                         <p>{`${currentHours}:${currentMins}`}</p>
                     </div>
             }
             
         </div>
     );
 }
 export default Productpreview;