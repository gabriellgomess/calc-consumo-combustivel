import './App.css';
import Logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import{ React, useEffect, useState } from 'react';
function App() {
  const [distancia, setDistancia] = useState(0);
  const [multiplicador, setMultiplicador] = useState(false);
  const [media, setMedia] = useState(0);
  const [valor, setValor] = useState(0.00);

  const [consumo, setConsumo] = useState(0);
  const [custoViagem, setCustoViagem] = useState(0);

  const handleDistancia = (e) => {
    var distancia = Number.parseFloat((e.target.value).replace(",", ".")) ;
    setDistancia(distancia);
  }
  const handleMedia = (e) => {
    var media = Number.parseFloat((e.target.value).replace(",", ".")) ;
    setMedia(media);
  }
  const handleValor = (e) => {
    var valor = Number.parseFloat((e.target.value).replace(",", ".")) ;
    setValor(valor);
  }

  const handleClick = () => {
    setConsumo((distancia / media).toFixed(2)); 
  }

  useEffect(() => {
   setCustoViagem((consumo * valor).toFixed(2));
  }, [distancia, media, valor, consumo]);
  

  return (
  
    <div className="App">
      <div className="main">
        <div className="header">
          <div className="containerLogo">
            <img className="logotipo" src={Logo} alt="logotipo" />            
          </div>
          <div className="title">
            <h3>Calculadora de Consumo</h3> 
          </div>
        </div>
        <div className="containerForm container-fluid">
          <div className="row">
            <h4 className="form-title">Entre com os dados</h4>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="label"> Distância (Km):
                <input className="form-input" type="text" placeholder="Digite aqui a distância" onChange={(e)=>handleDistancia(e)} />
              </label>
            </div>
            <div className="col-6">
              <label className="label"> Calcular Volta
              <div className="toggler">
              <input id="toggler-1" name="toggler-1" type="checkbox" onChange={multiplicador === false ? () => setMultiplicador(true) : () => setMultiplicador(false)} />
              <label htmlFor="toggler-1"> 
                  <svg className="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                      <polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                  </svg>
                  <svg className="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                      <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                      <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                  </svg>
              </label>
            </div>
            </label>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="label"> Média km/l do veículo
                <input className="form-input" type="text" placeholder="Média de consumo" onChange={(e) => handleMedia(e)} />
              </label>
            </div>
            <div className="col-6">
              <label className="label"> Valor do combustível (R$/l)
                <input className="form-input" type="text" placeholder="R$/litro" onChange={(e) => handleValor(e)} />
              </label> 
            </div>
          </div>
          <div className='row mt-5 d-flex justify-content-end'>
            <div className='col-8'>
              <p>Consumo: {multiplicador === false ? isNaN(consumo)?0+" litros":consumo +" litros" : isNaN(consumo)?0+" litros":consumo * 2+" litros"}</p>
              <p>Custo da viagem: {multiplicador === false ? isNaN(custoViagem ) ?"R$ "+0.00 : "R$ "+custoViagem : isNaN(custoViagem) ? "R$ "+0.00 : "R$ "+custoViagem * 2}</p>
            </div>            
            <div className="col-4 d-flex justify-content-end">
              <div className="btn-calculator" onClick={()=>handleClick()}>
                <FontAwesomeIcon icon={faCalculator} />
              </div>
            </div>            
          </div>          
        </div>
      </div>
      {/* RESULTADO */}
      <div className="row">
        <div className="col-12 resultado">
          <h5>Valores digitados</h5>
          <p>Distância percorrida: {multiplicador === false ? distancia+" km" : distancia * 2+" km"}</p>
          <p>Média: {media+" km/l"}</p>
          <p>Valor do combustível: {"R$ "+valor}</p>
          {/* <p>{multiplicador === false? "Sem volta" : "Calcular volta"}</p> */}
        </div>
      </div>
      
    </div>
  );
}



export default App;
