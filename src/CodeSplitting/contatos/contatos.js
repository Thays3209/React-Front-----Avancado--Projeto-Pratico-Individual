import Email from '../../IMG/Contato.png';
import Whatsapp from '../../IMG/Whatsapp.png';
import './contatos.css';


function Contatos1 () {
    return (
        <div>
            <div className="containerContato">
                <div className="email row mt-5">
                    <div className="col text-center">
                        <img src={Email} alt="Email" />
                        <p>fullstackeletro@gmail.com</p>
                    </div>

                    <div className="whatsapp col text-center">
                        <img src={Whatsapp} alt="Whatsapp" />
                        <p>(11) 90000-0000</p>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <form method="post" className="formContatos w-50">
                    <div className="form-group">
                        <label>Cliente</label>
                        <input className="form-control" name="nomeCliente"type="text" />
                    </div>
                    <div className="form-group">
                         <label for="exampleFormControlTextarea1">Mensagem</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="d-flex justify-content-center pb-3">
                    <input className="enviar bg-light mt-1 btn-lg" type="submit" />
                    </div>
                </form>
            </div>   
        </div>    
    )
}

export default Contatos1;