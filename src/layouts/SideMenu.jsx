import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Input, Label, Menu } from 'semantic-ui-react'

export default function SideMenu() {
    const navigate = useNavigate()
    function navigator(params) {
        navigate("/admin/addPitch")
    }
    return (
        <div>
            <Menu vertical inverted>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>

                <Menu.Item
                    name='Sahalarım'
                    as={NavLink} to="/admin/detailPitch">
                </Menu.Item>
                <Menu.Item
                    name='Rezervasyonlar'
                    as={NavLink} to="/admin/reservations">
                </Menu.Item>

                <Menu.Item
                    name='Saha Ekle'
                    onClick={()=> navigator()}>
                </Menu.Item>
                <Menu.Item
                    name='Fotograf Yonetimi'
                    as={NavLink} to="/admin/photos">
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
                    name='Ayarlar'>
                </Menu.Item>

            </Menu></div>
    )
}
