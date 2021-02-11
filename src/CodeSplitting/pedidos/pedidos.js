

function Pedidos1(){
    return (
        <div>
        <div className="d-flex justify-content-center mt-5">
            <form method="post" className="formContatos w-50">
                <div className="form-group">
                    <label>Numero do pedido</label>
                    <input className="form-control" name="nomeCliente"type="text" />
                </div>
                <div className="form-group">
                    <label>Cliente</label>
                    <input className="form-control" name="nomeCliente"type="text" />
                </div>
                <div className="form-group">
                    <label>Nº Produto</label>
                    <input className="form-control" name="nomeCliente"type="text" />
                </div>
                <div className="form-group">
                    <label>Produto</label>
                    <input className="form-control" name="nomeCliente"type="text" />
                </div>
                <div className="form-group">
                    <label>Valor Unitario</label>
                    <input className="form-control" name="nomeCliente"type="text" />
                </div>
                <div className="form-group">
                    <label>Quantidade</label>
                    <input className="form-control" name="nomeCliente"type="text" />
                </div>
                <div className="form-group">
                    <label>Valor total</label>
                    <input className="form-control" name="nomeCliente"type="text" />
                </div>
                <div className="d-flex justify-content-center pb-3">
                <input className="enviar bg-light mt-1 btn-lg" type="submit" />
                </div>
            </form>
        </div>   

    <section className=" container d-flex justify-content-between">
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                
            </div> 
    </section>

    </div>

    );
}

export default Pedidos1;