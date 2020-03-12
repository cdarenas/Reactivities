import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

interface IProps {
    openCreateForm: () => void;
}

const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/hacking.png" alt="logo" style={{ marginRight: '10px' }}></img>
                    Hacktivities
                </Menu.Item>
                <Menu.Item name='Hacktivities' />
                <Menu.Item>
                    <Button onClick={openCreateForm} positive content='Create Hacktivity'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar