import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Input, Label, Menu,  Container } from 'semantic-ui-react'

export default function SideMenu() {
    
    return (
        <Container >
            <Menu vertical inverted fixed="left" className='sideMenu' size='large' >
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>

                <Menu.Item
                    name='Sahalarım'
                    icon="volleyball ball"
                    as={NavLink} to="/admin/detailPitch">
                </Menu.Item>
                <Menu.Item
                    name='Rezervasyonlar'
                    icon="call"
                    as={NavLink} to="/admin/reservations">
                </Menu.Item>

                <Menu.Item
                    name='Saha Ekle'
                    icon="add"
                    as={NavLink} to="/admin/addPitch">
                </Menu.Item>
                <Menu.Item
                    name='Fotograf Yonetimi'
                    icon="photo"
                    as={NavLink} to="/admin/photos">
                </Menu.Item>
                <Menu.Item
                    name='Odemeler'
                    icon="money"
                    as={NavLink} to="/admin/payments">
                </Menu.Item>
                <Menu.Item
                    name='Müsteriler'>
                </Menu.Item>
                <Menu.Item
                    name='Kampanyalar'>
                </Menu.Item>
                <Menu.Item
                    name='Reklamlar'>
                </Menu.Item>
                <Menu.Item
                    name='Dışa aktar'>
                </Menu.Item>
                <Menu.Item
                    name='Ice aktar'>
                </Menu.Item>

                <Menu.Item
                    name='Istatistik'>
                </Menu.Item>
                <Menu.Item
                    name='Rapor'>
                </Menu.Item>

                <Menu.Item
                    name='Entegrasyonlar'>
                </Menu.Item>

                <Menu.Item 
                    name='Ayarlar'
                    icon ="setting"
                    as={NavLink} to="/admin/settings"
                    >
                </Menu.Item>

            </Menu></Container>
    )
}
