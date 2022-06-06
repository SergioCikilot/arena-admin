import React from 'react'
import { Menu, Button, Checkbox, Icon, Table } from 'semantic-ui-react'

export default function ReservationPage() {
    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item icon="circle"
                    name='Bugün'
                // active={activeItem === 'home'}
                // onClick={this.handleItemClick}
                />
                <Menu.Item 
                    name='7 Haziran'
                />
                <Menu.Item
                    name='8 Haziran'
                />
                <Menu.Item
                    name='9 Haziran'
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='sayfa ileri'
                    />
                </Menu.Menu>
            </Menu>
            <Table compact celled definition>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell>Saat</Table.HeaderCell>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>E-mail </Table.HeaderCell>
                        <Table.HeaderCell>Aktif</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell collapsing>
                            <Checkbox defaultChecked slider />
                        </Table.Cell>
                        <Table.Cell>09:00</Table.Cell>
                        <Table.Cell>Orhan</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell collapsing>
                            <Checkbox defaultChecked slider />
                        </Table.Cell>
                        <Table.Cell>10:00</Table.Cell>
                        <Table.Cell>Osman</Table.Cell>
                        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell collapsing>
                            <Checkbox defaultChecked slider />
                        </Table.Cell>
                        <Table.Cell>11:00</Table.Cell>
                        <Table.Cell>Mahmut</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell collapsing>
                            <Checkbox defaultChecked slider />
                        </Table.Cell>
                        <Table.Cell>12:00</Table.Cell>
                        <Table.Cell>Samo</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell  collapsing>
                            <Checkbox defaultChecked slider />
                        </Table.Cell>
                        <Table.Cell>01:00</Table.Cell>
                        <Table.Cell>Lavuk</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell collapsing>
                            <Checkbox slider />
                        </Table.Cell>
                        <Table.Cell>02:00</Table.Cell>
                        <Table.Cell>-</Table.Cell>
                        <Table.Cell>-</Table.Cell>
                        <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell collapsing>
                            <Checkbox defaultChecked slider />
                        </Table.Cell>
                        <Table.Cell>03:00</Table.Cell>
                        <Table.Cell>Aga</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell colSpan='4'>
                            <Button
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='small'
                                
                            >
                                <Icon name='edit' /> Düzenle
                            </Button>
                            <Button size='small'>Approve</Button>
                            <Button size='small'>
                                Approve All
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
