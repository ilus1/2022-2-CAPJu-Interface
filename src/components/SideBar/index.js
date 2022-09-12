import Button from 'components/Button';
import React from 'react';
import { Container, MenuItem, Menu, LogoutButton } from './styles';
import { Flow } from '@styled-icons/fluentui-system-regular';
import { FlowCascade } from '@styled-icons/entypo';
import { ClipboardTaskListLtr } from '@styled-icons/fluentui-system-regular/ClipboardTaskListLtr';
import { Profile } from '@styled-icons/icomoon';
import { PersonFill } from '@styled-icons/bootstrap/PersonFill';
import { useNavigate } from 'react-router-dom';
function SideBar() {
  const navigate = useNavigate();
  return (
    <Container>
      <a href={'/'}>
        <img src={'./logo.png'} />
      </a>
      <Menu>
        <hr />
        <MenuItem href={'/Login'}>
          <Profile size={35} />
          Login
        </MenuItem>
        <hr />

        <hr />
        <MenuItem href={'/accessProfile'}>
          <PersonFill size={35} /> Perfil de Acesso
        </MenuItem>
        <hr />

        <MenuItem href={'/stages'}>
          <Flow size={35} />
          Etapas
        </MenuItem>
        <hr />

        <MenuItem href={'/'}>
          <FlowCascade size={35} />
          Fluxos
        </MenuItem>
        <hr />

        <MenuItem
          href=""
          onClick={() =>
            navigate('/processes', { state: undefined, replace: false })
          }
        >
          <ClipboardTaskListLtr size={35} />
          Processos
        </MenuItem>
        <hr />
      </Menu>
      <LogoutButton>
        <Button
          background="#DE5353"
          onClick={() => {
            localStorage.removeItem('user');
            navigate('Login');
          }}
        >
          Sair
        </Button>
      </LogoutButton>
    </Container>
  );
}

export default SideBar;
