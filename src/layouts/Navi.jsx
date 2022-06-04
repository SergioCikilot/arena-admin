import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, Image, Dropdown, Button, Container, Menu } from 'semantic-ui-react'

export default function navi() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item
                    name='home'
                    as={NavLink} to="/"
                />
                <Menu.Menu position='right'>
                    <Dropdown item icon={<Icon name='bell outline' />}>
                        <Dropdown.Menu>
                            <Dropdown.Item>Notification1</Dropdown.Item>
                            <Dropdown.Item>Notification2</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item>
                        <Image avatar spaced="right" src="https://arenastorageapp.blob.core.windows.net/pitchprofilepics/p7.png" />
                        <Dropdown pointing="top left" text="Simit Halısaha">
                            <Dropdown.Menu>
                                <Dropdown.Item text="Bilgilerim" icon="info" />
                                <Dropdown.Item as={NavLink} to="/" text="Çıkış yap" icon="sign-out" />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>

                </Menu.Menu>

                {/* <Menu.Menu position='right'>


                </Menu.Menu> */}
            </Container>
        </Menu>
    )
}
