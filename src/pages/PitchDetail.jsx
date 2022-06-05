import React from 'react'

import { Menu, Segment, Grid, GridColumn, GridRow, Placeholder } from 'semantic-ui-react'

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
                    name='friends'

                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='sayfa ileri'

                    />
                </Menu.Menu>
            </Menu>

            <Segment>
                <Grid>
                    <Grid.Row>
                        <GridColumn width={4}>
                            <img src='https://arenastorageapp.blob.core.windows.net/pitchprofilepics/p3.png' />
                        </GridColumn>
                        <GridColumn width={12}>
                            <Placeholder >
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment>
                <Grid>
                    <Grid.Row>
                        <GridColumn width={4}>
                            <img src='https://arenastorageapp.blob.core.windows.net/pitchprofilepics/p4.png' />
                        </GridColumn>
                        <GridColumn width={12}>
                            <Placeholder >
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment>
                <Grid>
                    <Grid.Row>
                        <GridColumn width={4}>
                            <img src='https://arenastorageapp.blob.core.windows.net/pitchprofilepics/p1.png' />
                        </GridColumn>
                        <GridColumn width={12}>
                            <Placeholder >
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}
