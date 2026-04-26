import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../components/Firebase';
import "../../assets/Cadastro.css";


class Cadastro extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            date_of_birth: "",
            email: "",
            password: "",
            mensagem: ""
        }
        this.cadastrar = this.cadastrar.bind(this);

    }


    async cadastrar(){ /* Chamada Assincrona para evitar demoras*/
        try {
            const userCredential = await firebase.auth()
                .createUserWithEmailAndPassword(
                    this.state.email,
                    this.state.password
                );
            const user = userCredential.user;

            // Salva os outros dados no Fire (No password)
            await firebase.firestore().collection("usuarios").add({
                uid: user.uid,
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                date_of_birth: this.state.date_of_birth,
                email: this.state.email,
            });

            this.setState({ mensagem: "Cadastrado com sucesso :)" });

            // redireciona após 1 seg para ser fofo
            setTimeout(() => {
                window.location.href = ('/'); 
            }, 1000);

        }catch (error) {
            this.setState({ mensagem: "Eita deu erro, tente novamente :/" });
        }
        
        
    }

    render(){
        return(
            <div className="container">
                <h1> Página de Cadastro</h1>
                <input type="text" placeholder='Nome' onChange={(e) => this.setState({nome: e.target.value})} />
                <br/>
                <input type="text" placeholder='Sobrenome' onChange={(e) => this.setState({sobrenome: e.target.value})} />
                <br/>
                <input type="text" placeholder='Data de Nascimento' onChange={(e) => this.setState({date_of_birth: e.target.value})} />
                <br/>
                <input type="text" placeholder='E-mail' onChange={(e) => this.setState({email: e.target.value})} />
                <br/>
                <input type="password" placeholder='Senha' onChange={(e) => this.setState({password: e.target.value})} />
                <br/>
                <p>{this.state.mensagem}</p>
                <button onClick={this.cadastrar}>Cadastrar</button>
            </div>
        )
    }  
}

export default Cadastro;

/* Precisa de 5 inputs
nome
sobrenome
data de nascimento
e-mail
senha
*/