import React, { useContext } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import ActivityStore from '../../app/stores/activityStore';
import { observer } from 'mobx-react-lite'

const NavBar: React.FC = () => {
    const activityStore = useContext(ActivityStore)
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/hacking.png" alt="logo" style={{ marginRight: '10px' }}></img>
                    Hacktivities
                </Menu.Item>
                <Menu.Item name='Hacktivities' />
                <Menu.Item>
                    <Button onClick={activityStore.openCreateForm} positive content='Create Hacktivity'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default observer(NavBar)