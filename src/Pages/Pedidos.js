import {lazy, Suspense} from 'react';

const Pedidos1 = lazy(() => import('../../src/CodeSplitting/pedidos/pedidos'));


export default function Pedidos() {
    return (
      <Suspense fallback = { <p> Carregando...</p> }>
        <Pedidos1/>
      </Suspense>
        
    )
}
