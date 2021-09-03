import React from "react";
import styles from "./feedback.module.css";
import Controls from "./control";


export default class feedback extends React.Component{
 
  
    goodFeedback = (event) =>{
        this.setState(prevState =>
          {return {
              good: prevState.good + 1,
          }
        }
        );
       
    }
    neutralFeedback = () =>{
        this.setState(prevState =>
            {return {
                neutral: prevState.neutral + 1,
            }
          }
          );
    }
    badFeedback = () =>{
        this.setState(prevState =>
            {return {
                bad: prevState.bad + 1,
            }
          }
          );
    }
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        
      }

      countTotalFeedback = () => {
        this.setState(prevState =>
            {return {
                total: prevState.bad + prevState.neutral+ prevState.bad,
            }
          }
          );
            }

   render(){
       return (
           <div className = "feedback">
               <h1>
                   Please, leave feedback
               </h1>
               
                   <Controls goodFeedback = {this.goodFeedback} neutralFeedback = {this.neutralFeedback} badFeedback = {this.badFeedback}/>     
            
              

<div className={styles.statistics}>
        <span>Good {this.state.good}</span>
    <span>Neutral {this.state.neutral}</span>
    <span>Bad {this.state.bad}</span>
    <span>Total {this.state.total}</span>
    
</div>

               </div>
       )
   } 
}