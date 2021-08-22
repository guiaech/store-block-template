import './formulario.css'
import axios from 'axios'
import * as React from 'react'



class formulario extends React.Component <any,any> {
  constructor(props) {
    super(props);
    this.state = {id: '', name: '', mail: '', number: ''};

    this.handleChangeI = this.handleChangeI.bind(this);
    this.handleChangeN = this.handleChangeN.bind(this);
    this.handleChangeM = this.handleChangeM.bind(this);
    this.handleChangeU = this.handleChangeU.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeI(event) {
    this.setState({id: event.target.value});
  }
  handleChangeN(event) {
    this.setState({name: event.target.value});
  }
  handleChangeM(event) {
    this.setState({mail: event.target.value});
  }
  handleChangeU(event) {
    this.setState({number: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const id = this.state.id;
    const number = this.state.number;
    const mail  = this.state.mail;
    axios({
      method: 'put',
      url: 'https://lu6sssgep1.execute-api.us-east-2.amazonaws.com/items',
      data: {
        id : id,
        name: name,
        number: number,
        mail: mail
      }
    });
  }

  render() {
    return (
      <div class="formulario">
        <h3>Cadastro de clientes</h3>
      <form onSubmit={this.handleSubmit}>

        <label>
          Identidade   :
          <input type="text" value={this.state.id} onChange={this.handleChangeI} />
        </label>
        <label>
          Nome completo  :
          <input type="text" value={this.state.name} onChange={this.handleChangeN} />
        </label>
        <label>
         Telefone  :
          <input type="number" value={this.state.number} onChange={this.handleChangeU} />
        </label>
        <label>
          E-mail  :
          <input type="text" value={this.state.mail} onChange={this.handleChangeM} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
      </div>
    );
  }
}

export default formulario



