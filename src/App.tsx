import './App.scss'
import { ArrowIcon } from './components/arrow-icon'
import { IconSocial } from './components/instagram-icon'


function App() {
  return (
    <main>


      <header className='header-container'>
        <img src="/Logo.svg" alt="" />
        <nav className="menu-options">
          <a href="">Incio</a>
          <a href="">Sobre mim</a>
          <a href="">You tube</a>
        </nav>
        <button>
          <div className='btn-face-white'>Contact us <ArrowIcon /></div>
          <div className='btn-face-purple'>Contact us <ArrowIcon /></div>



        </button>
      </header>
      <div className="content-container">
        <div className="heading-container">
          <h2>Conecte com as minhas</h2>
          <h2>redes socias.</h2>

        </div>
        <div className="bubble target">
          <IconSocial href={'https://www.instagram.com/nikolas.pguedes/'} src='https://img.icons8.com/?size=100&id=oUsYJj5SHs1L&format=png&color=000000' />
        </div>
        <div className="bubble shop">
          <IconSocial href={'https://www.facebook.com/nikolas.prudente.9'} src='https://img.icons8.com/?size=100&id=2KWNkhfNwXPH&format=png&color=000000' />

        </div>
        <div className="bubble rocket">
          <IconSocial href={'https://www.linkedin.com/in/nikolas-prudente-guedes-97b14612b/'} src='https://img.icons8.com/?size=100&id=CWnQDCef7qg0&format=png&color=000000' />

        </div>
        <div className="bubble fire">
          <IconSocial href={'https://github.com/nikhenry2212'} src='https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000' />

        </div>
        <div className="bubble user">
          <IconSocial href={'https://github.com/nikhenry2212'} src='https://github.com/nikhenry2212.png' />
        </div>
      </div>
    </main>


  )
}

export default App
