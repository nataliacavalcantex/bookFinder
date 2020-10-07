import React from 'react';
import {Link} from 'react-router-dom'
import { Container,Content,Profile} from './styles';

function Header() {
  return (

      <Container>
          <Content>
              <nav>
                 <Link to='/home'>DASHBOARD</Link> 
              </nav>
              <aside>
                  <Profile>
                  <div>
                      <strong>Natalia Xavier</strong>
                      <Link to='/profile'> Meu perfil</Link>
                  </div>
                  <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="me"></img>
                  </Profile>
              </aside>
          </Content>
      </Container>
      )
}

export default Header;