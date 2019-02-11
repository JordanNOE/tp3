import React, { Component } from 'react';

import Pageprofil from './pageprofil';
import './App.css';
import './profil.css';

const prof1 = {
    
                        nom: 'Pagini',
                        prenom: 'Jeanne',
                        image: 'https://www.kalu-nissa.com/2810-large_default/2810-fai-de-ben-debardeur-et-tshirt-femme-proverbe-nicois.jpg',
            
                        datedenaissance: '12/05/93',
                        
                        contenu: "contenu du post de Jeanne"
    
}


const prof2 = {
   
                        nom: 'Mattin',
                        prenom: 'Martin',
                        image: 'https://lamarque42.fr/928-large_default/polo-pampille-homme-bleu.jpg',
            
                        datedenaissance: '12/12/97',
    
                        contenu: "contenu du post de Martin"
    
}
const prof3 = {
                        nom: 'Michael',
                        prenom: 'Jordan',
                        image: 'https://lamarque42.fr/755-large_default/polo-blanc-performs.jpg',
            
                        datedenaissance: '30/05/94',
                        contenu: "contenu du post de Jordan"
    
}





class App extends Component {
    
    constructor(props){
        super(props);
        this.state={
            user: {
    
                        nom: 'Pagini',
                        prenom: 'Jeanne',
                        image: 'https://www.kalu-nissa.com/2810-large_default/2810-fai-de-ben-debardeur-et-tshirt-femme-proverbe-nicois.jpg',
            
                        datedenaissance: '12/05/93',
                        
                        contenu: "contenu du post de Jeanne"
    
                },
           
        }
    }
    
    chmtJeanne(){
        
        this.setState({user : prof1});
       
        }
    chmtMartin(){
           
        this.setState({user : prof2});
        }
    chmtJordan(){
        

        this.setState({user : prof3});
    }
    
  render() {
    return (
      <div className="App">
        <h1> Bienvenue sur ton nouveau réseau ! </h1>
            <div className="Boutons">
                <button 
                    onClick={()=>{this.chmtJeanne()}}>Jeanne
                </button>
                <button 
                    onClick={()=>{this.chmtMartin()}}>Martin
                </button>
                <button 
                    onClick={()=>{this.chmtJordan()}}>Jordan
                </button>
           
              
                
            </div>
    
         <Pageprofil profil={this.state.user} />
      </div>
    );
  }
}

export default App;
