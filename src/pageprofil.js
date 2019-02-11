import React, { Component} from'react';
import Post from './post';
import Profil from './profil';

class Pageprofil extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            bg : '#C0C0C0'
        
        }
    }
    
    chmtstyle(){ 
    if(this.state.bg ==='#D3D3D3')
    {
        this.setState({bg:'#C0C0C0'})
    }
    if(this.state.bg === '#C0C0C0')
    {
        this.setState({bg:'#D3D3D3'})
    }
        
    }
    
    
    render(){
         
        return(
           
            <div style ={{ background: this.state.bg}} >
                <Profil  profil = {this.props.profil} />
                <Post contenu = {this.props.profil.contenu} />
            <button id="bouton2"
                    onClick={()=>{this.chmtstyle()}}>Change style!
                </button>
            </div>
            
        )
    }
}
export default Pageprofil;