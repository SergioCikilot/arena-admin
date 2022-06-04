import React from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Label, Menu } from 'semantic-ui-react'

export default function SideMenu() {
    return (
        <div>
            <Menu vertical inverted>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>

                <Menu.Item
                    name='My pitch'
                    as={NavLink} to="/pitch">
                </Menu.Item>

                <Menu.Item
                    name='Add Pitch'
                    as={NavLink} to="/addPitch">

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
