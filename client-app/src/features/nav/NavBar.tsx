import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/hacking.png" alt="logo" style={{ marginRight: '10px' }}></img>
                    Hacktivities
                </Menu.Item>
                <Menu.Item name='Hacktivities' />
                <Menu.Item>
                    <Button positive content='Create Hacktivity'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar