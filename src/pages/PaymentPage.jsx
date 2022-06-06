import React from 'react'
import { Menu, Button, Checkbox, Icon, Table } from 'semantic-ui-react'

export default function PaymentPage() {
    return (
        <div>
            <Menu pointing secondary>

                <Menu.Item icon="circle"
                    name='Tamamlanan'
                />
                <Menu.Item
                    name='Kapora ödendi'
                />
                <Menu.Item
                    name='Tümü'
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='sayfa ileri'
                    />
                </Menu.Menu>

            </Menu>
            <Table compact celled >
                <Table.Header>
                    <Table.Row>

                        <Table.HeaderCell>Gün</Table.HeaderCell>
                        <Table.HeaderCell>Saat</Table.HeaderCell>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Fiyat</Table.HeaderCell>
                        <Table.HeaderCell>Ödendi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>

                        <Table.Cell>06/06/2022</Table.Cell>
                        <Table.Cell>09:00</Table.Cell>
                        <Table.Cell>Orhan</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>350</Table.Cell>
                        <Table.Cell collapsing>
                            <Icon color='green' name='checkmark' size='large' />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>06/06/2022</Table.Cell>
                        <Table.Cell>09:00</Table.Cell>
                        <Table.Cell>Orhan</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>350</Table.Cell>
                        <Table.Cell collapsing>
                            <Icon color='green' name='checkmark' size='large' />
                        </Table.Cell>

                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>06/06/2022</Table.Cell>
                        <Table.Cell>09:00</Table.Cell>
                        <Table.Cell>Orhan</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>350</Table.Cell>
                        <Table.Cell collapsing>
                            <Icon color='green' name='checkmark' size='large' />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>06/06/2022</Table.Cell>
                        <Table.Cell>09:00</Table.Cell>
                        <Table.Cell>Orhan</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>350</Table.Cell>
                        <Table.Cell collapsing>
                            <Icon color='green' name='checkmark' size='large' />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>06/06/2022</Table.Cell>
                        <Table.Cell>09:00</Table.Cell>
                        <Table.Cell>Orhan</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>350</Table.Cell>
                        <Table.Cell collapsing>
                            <Icon color='green' name='checkmark' size='large' />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>07/06/2022</Table.Cell>
                        <Table.Cell>16:00</Table.Cell>
                        <Table.Cell>Memed</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>370</Table.Cell>
                        <Table.Cell collapsing>
                            <Icon color='red' name='times' size='large' />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>07/06/2022</Table.Cell>
                        <Table.Cell>21:00</Table.Cell>
                        <Table.Cell>Mahmud</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>350</Table.Cell>
                        <Table.Cell collapsing>
                            <Icon color='red' name='times' size='large' />
                        </Table.Cell>
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
