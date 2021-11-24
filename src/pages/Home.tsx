import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import "../styles/auth.scss";
import { useNavigate } from 'react-router';

export function Home() {
  const history = useNavigate();

  function signIn() {

  }

  function navigateToNewRoom() {
    history('/rooms/new');
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>/crie salas deQ&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button className="create-room" onClick={navigateToNewRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">
            ou entre em uma sala
          </div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type='submit'>
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}