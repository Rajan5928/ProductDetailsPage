import React from 'react'
import classes from './Sidesection.module.css'
 const Sidesection = (props) => {
     const featureList = props.data.featureList.map((item,pos) => {
         const classArr = [classes.features];
         if(pos === props.showheartbeat){
             classArr.push(classes.selectedbutton)
         }
         return (
             <button onClick={()=>{props.onFeatureitemClick(pos)}} key ={pos} className={classArr.join(" ")}>{item}</button>
         )
     })
     const colorOptions = props.data.colorOptions.map((item,pos) => {
         const classArr = [classes.productimage];
         if(pos === props.currentproductpreviewpos) {
             classArr.push(classes.selectedproduct);
         }
         return(
             <img key={pos} className={classArr.join(" ")} src={item.imageUrl} alt={item.styleName} onClick={() => props.oncolorOptionsclick(pos)}/>
         )
     })
     return(
         <div className={classes.sidesection}>
             <div className={classes.title}>{props.data.title}</div>
             <p className={classes.para}>{props.data.description}</p>
             <h3 className={classes.sectionheading}>Select Color</h3>
             <div>
                 {colorOptions}
             </div>
             <h3 className={classes.sectionheading}>Features</h3>
             <div>
                 {featureList}
             </div>
             <button className={classes.bigbutton}>Buy Now</button>
         </div>
     )
 }
 export default Sidesection;