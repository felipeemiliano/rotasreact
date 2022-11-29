import react from 'react';
import {Switch,route,link} from 'react-router-dom'
import pagina1 from './pagina1';
import pagina2 from '../componentes/pagina2';
import pagina3 from '../componentes/pagina3';



export default function App() {
  return (
    <>
      <header>
        <link to='/'>home </link>

        <link to='/pagina1'>Pagina 1 </link>
        <link to='/pagina2'>Pagina 2 </link>
        <link to='/pagina3'>Pagina 3 </link>

      </header>
      <main>
        <switch>
          <route path='/pagina1' component={pagina1}/>
          <route path='/pagina2' component={pagina2}/>
          <route path='/pagina3' component={pagina3}/>
        </switch>
      </main>
    </>
  )

}
