import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header as={NavLink} exact to='/'>
                    <img src="/assets/hacking.png" alt="logo" style={{ marginRight: '10px' }}></img>
                    Hacktivities
                </Menu.Item>
                <Menu.Item name='Hacktivities' as={NavLink} to='/activities' />
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Create Hacktivity'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default observer(NavBar)