import {lazy, Suspense} from 'react';

const Home1 = lazy(() => import('../../src/CodeSplitting/home/home'));



export default function Home() {
    return (
      <Suspense fallback = { <p> Carregando...</p>}>
        <Home1/>
      </Suspense>
        
    )
}
