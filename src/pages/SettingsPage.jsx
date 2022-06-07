import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
export default function SettingsPage() {
    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item
                    name='Genel'
                // active={activeItem === 'home'}
                // onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Fiyat'
                />
                <Menu.Item
                    name='Tasarım'
                />
                <Menu.Item
                    name='Güvenlik'
                />
                <Menu.Item
                    name='Seo'
                />
                <Menu.Item
                    name='Diger'
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Ayarlarda ara...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}
