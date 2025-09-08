import './styles/theme.css';
import './styles/global.css';

import { Default } from './components/Default';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/Countdown';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form'>
          <div className='formRow'>
            <Default labeltext='Tarefa' id='myinput' type='text' />
          </div>

          <div className='formRow'></div>

          <div className='formRow'></div>

          <div className='formRow'></div>
        </form>
      </Container>
    </>
  );
}
