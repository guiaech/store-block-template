import './formulario.css'
import axios from 'axios'
import * as React from 'react'

var testeData = Date()


class formulario extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { id: '', name: '', empresa: '', number: '' , leds:'', recado:''};

    this.handleChangeI = this.handleChangeI.bind(this);
    this.handleChangeN = this.handleChangeN.bind(this);
    this.handleChangeM = this.handleChangeM.bind(this);
    this.handleChangeU = this.handleChangeU.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeR = this.handleChangeR.bind(this);

  }
  

  handleChangeI(event) {
    this.setState({ id: event.target.value });
  }
  handleChangeN(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeM(event) {
    this.setState({ empresa: event.target.value });
  }
  handleChangeU(event) {
    this.setState({ number: event.target.value });
  }
  handleChangeR(event) {
    this.setState({ recado: event.target.value });
  }
  


  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const id = this.state.id;
    const number = this.state.number;
    const empresa = this.state.empresa;
    const leds = testeData;
    const recado = this.state.recado;
    axios({
      method: 'put',
      url: 'https://lqbi4t23pj.execute-api.us-west-2.amazonaws.com/items',
      data: {
        id: id,
        name: name,
        number: number,
        empresa: empresa,
        leds: leds,
        recado : recado
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
        <h3>Estamos aqui para o que precisar!</h3>
        <p>Deixe seus dados com a gente que entraremos em contato.</p>

        <form onSubmit={this.handleSubmit} id="formulario">

            <div>
              <input type="text" id="email" name="email" placeholder="E-mail" value={this.state.id} onChange={this.handleChangeI} />
            </div>

            <div>
            <input type="text" id="nome" name="nome" placeholder="Nome" value={this.state.name} onChange={this.handleChangeN} />
            </div>

            <div>
            <input type="number" id="telefone" name="telefone" placeholder="Telefone" value={this.state.number} onChange={this.handleChangeU} />
            </div>

            <div>
            <input type="text" id="empresa" name="empresa" placeholder="Empresa" value={this.state.empresa} onChange={this.handleChangeM} />
            </div>
            
            <div>
            <input type="recado" id="mensagem" name="mensagem" placeholder="Mensagem" value={this.state.recado} onChange={this.handleChangeR} />
            </div>

            <button type="submit" value="enviar">
          Enviar
        </button>

        </form>
        </fieldset>
      </div>
      </section>
    );
  }
}


export default formulario
