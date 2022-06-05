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
                    name='My pitch'
                    as={NavLink} to="/admin/detailPitch">
                </Menu.Item>

                <Menu.Item
                    name='Add Pitch'
                    onClick={()=> navigator() }>

                </Menu.Item>

                <Menu.Item
                    name='updates'>
                </Menu.Item>

                <Menu.Item
                    name='updates'>
                </Menu.Item>

                <Menu.Item
                    name='updates'>
                </Menu.Item>
                <Menu.Item
                    name='updates'>
                </Menu.Item>

                <Menu.Item
                    name='updates'>
                </Menu.Item>

                <Menu.Item
                    name='updates'>
                </Menu.Item>

            </Menu></div>
    )
}
