import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Formulario extends React.Component {
    constructor() {
        super();
        this.state = {
            nome: "",
            box: ""
        }
        this.onChange = (evento) => {
            const state = Object.assign({}, this.state);
            const campo = evento.target.name;
            state[campo] = evento.target.value;
            this.setState(state);
        }
        this.onSubmit = (evento) => {
            evento.preventDefault();

            console.log(JSON.stringify(this.state))
        }
    }

    render(){
        return(
            <div>
                Campo Texto: <input name="nome" type = "text" value = {this.state.nome} onChange={this.onChange}/>

                <br /><br />
                Box:<br />
                <select name="box" onChange={this.onChange} value={this.state.box}>
                    <option value="">Selecione</option>
                    <option value="1">Ativo</option>
                    <option value="2">Inativo</option>
                </select>
                <br /><br />
                <button onClick={this.onSubmit}>Enviar</button>
                <br /><br />
            </div>
        )
    }
}

ReactDOM.render(
    <Formulario />,
    document.getElementById('root')
);






