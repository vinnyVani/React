import React, { Component } from 'react';
import axios from 'axios';
import ShowAds from'./ShowAds';

class Ads extends Component
 {
    
    constructor()
   {
       super()
       
       this.state ={ places: [] }
   }
       

   componentDidMount()
   {
    axios.get('https://localhost:44310/Api/Travel/GetAds')
       .then(response=>{
           console.log(response)
           this.setState({places:response.data})
       })
    
   }
     render()
    {
    return (
        <div>
            {
                          this.state.places.map( (item, pos)=> {
                            return(
                                <ShowAds obj ={item} key={pos} />
                            );
                         }
                        )
                      }   
            
        </div>
    );
 }
}
export default Ads;