import './formulario.css'
import axios from 'axios'
import * as React from 'react'

var testeData = Date()

var cad = 'cadastrado'

class formulario extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { id: '', name: '', mail: '', number: '' , date: '', leds:''};

    this.handleChangeI = this.handleChangeI.bind(this);
    this.handleChangeN = this.handleChangeN.bind(this);
    this.handleChangeM = this.handleChangeM.bind(this);
    this.handleChangeU = this.handleChangeU.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  

  handleChangeI(event) {
    this.setState({ id: event.target.value });
  }
  handleChangeN(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeM(event) {
    this.setState({ mail: event.target.value });
  }
  handleChangeU(event) {
    this.setState({ number: event.target.value });
  }
  


  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const id = this.state.id;
    const number = this.state.number;
    const mail = this.state.mail;
    const date = testeData;
    const leds = cad;
    axios({
      method: 'put',
      url: 'https://lqbi4t23pj.execute-api.us-west-2.amazonaws.com/items',
      data: {
        id: id,
        name: name,
        number: number,
        mail: mail,
        date: date,
        leds: leds
      }
    });
    let content = document.getElementById('area')

    let carregando = `<p>CARREGANDO...</p>`

    let pronto = `<p class="cadastrado">CADASTRADO</p>`

    content.innerHTML = carregando


    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)
  }

  render() {
    return (
      <section class="contact-area">
      <div id ="area">
        <fieldset>
        <h3>Cadastro de clientes</h3>
        <form onSubmit={this.handleSubmit} id="formulario">

          <label>
            Identindade:
            <input type="text" value={this.state.id} onChange={this.handleChangeI} />
          </label>
          <label>
            Nome:
            <input type="text" value={this.state.name} onChange={this.handleChangeN} />
          </label>
          <label>
            Telefone:
            <input type="number" value={this.state.number} onChange={this.handleChangeU} />
          </label>
          <label>
            Email:
            <input type="text" value={this.state.mail} onChange={this.handleChangeM} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
        </fieldset>
      </div>
      </section>
    );
  }
}

export default formulario



