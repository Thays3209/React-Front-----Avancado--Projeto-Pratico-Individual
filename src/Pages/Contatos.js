import {lazy, Suspense} from 'react';


const Contatos1 = lazy(() => import('../../src/CodeSplitting/contatos/contatos'));



export default function Contatos() {
    return (
      <Suspense fallback = {<p> Carregando...</p>}>
        <Contatos1/>
      </Suspense>
        
    )
}

