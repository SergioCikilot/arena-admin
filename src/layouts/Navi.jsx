import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Icon, Image, Dropdown, Button, Container, Menu, Checkbox, Tab } from 'semantic-ui-react'

export default function Navi(props) {
    const navigate = useNavigate()
    function navigator(params) {
        navigate("/")
    }

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item 
                onClick={()=> navigator()}
                >
                    <Image 
                    rounded
                    size='tiny' 
                    src="https://arenastorageapp.blob.core.windows.net/arenadmin/arad1.png" />
                </Menu.Item>
                <Menu.Item
                    name='Ana sayfa'
                    onClick={()=> navigator()}
                />
                <Menu.Item
                    name='Iletişim'
                    as={NavLink} to="/admin/communication"
                />
                <Menu.Item
                    name='Bilgi'
                    
                />
               

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Checkbox defaultChecked toggle />
                    </Menu.Item>

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
                                <Dropdown.Item onClick={props.signOut} text="Çıkış yap" icon="sign-out" />
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
