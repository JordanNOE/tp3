import React, { Component} from'react';
class Profil extends Component {
    
    
    render(){
        

        return(
            <div >
            <img className="imgprofil" src={this.props.profil.image} alt='imageComponent' />
           
    
           <p> {this.props.profil.prenom} </p>
            <p> {this.props.profil.nom} </p>
           <p> {this.props.profil.datedenaissance} </p>

            </div>
            
        )
    }
}
export default Profil;