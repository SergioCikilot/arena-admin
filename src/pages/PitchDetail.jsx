import React from 'react'

import { Card,Menu, Segment, Grid, GridColumn, GridRow, Placeholder, Button, Icon, Header } from 'semantic-ui-react'

export default function PitchDetail() {
    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item
                    name='home'
                // active={activeItem === 'home'}
                // onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='messages'

                />
                <Menu.Item
                    name='favorites'

                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='sayfa ileri'

                    />
                </Menu.Menu>
            </Menu>

            <Segment raised>
                <Grid>
                    <Grid.Row>
                        <GridColumn width={4}>
                            <img src='https://arenastorageapp.blob.core.windows.net/pitchprofilepics/p3.png' />
                        </GridColumn>
                        <GridColumn width={10}>
                            <Card fluid >
                                <Card.Content header='Btü Halısaha' />
                                <Card.Content  description='Merkez Mah. Cendere Cad. Seba Suites Sites A Blok No:16 Kat:8 D:72 Kağıthane / İstanbul' />
                                <Card.Content extra>
                                    <Icon name='user' />4 Reservasyon
                                </Card.Content>
                            </Card>
                        </GridColumn>
                        <GridColumn width={2}>
                            <Button 
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='mini'
                            >
                                <Icon name='edit' /> Düzenle
                            </Button>
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment raised>
                <Grid>
                    <Grid.Row>
                        <GridColumn width={4}>
                            <img src='https://arenastorageapp.blob.core.windows.net/pitchprofilepics/p4.png' />
                        </GridColumn>
                        <GridColumn width={10}>
                        <Card fluid >
                                <Card.Content header='Elit Halısaha' />
                                <Card.Content  description='Merkez Mah. Cendere Cad. Seba Suites Sites A Blok No:16 Kat:8 D:72 Kağıthane / İstanbul' />
                                <Card.Content extra>
                                    <Icon name='user' />7 Reservasyon
                                </Card.Content>
                            </Card>
                        </GridColumn>
                        <GridColumn width={2}>
                            <Button
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size="mini"
                            >
                                <Icon name='edit' /> Düzenle
                            </Button>
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment raised>
                <Grid>
                    <Grid.Row>
                        <GridColumn width={4}>
                            <img src='https://arenastorageapp.blob.core.windows.net/pitchprofilepics/p1.png' />
                        </GridColumn>
                        <GridColumn width={10}>
                        <Card fluid >
                                <Card.Content header='Şenlik Halısaha' />
                                <Card.Content  description='Merkez Mah. Cendere Cad. Seba Suites Sites A Blok No:16 Kat:8 D:72 Kağıthane / İstanbul' />
                                <Card.Content extra>
                                    <Icon name='user' />4 Reservasyon
                                </Card.Content>
                            </Card>
                        </GridColumn>
                        <GridColumn width={2}>
                            <Button
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='mini'
                            >
                                <Icon name='edit' /> Düzenle
                            </Button>
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}
