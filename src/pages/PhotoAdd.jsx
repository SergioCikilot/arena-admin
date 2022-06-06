import React from 'react'

import { Button, Card, Divider, Icon, Image, Item, Segment } from 'semantic-ui-react'

const src = 'https://arenastorageapp.blob.core.windows.net/pitchpics/p1-1.jpeg'

export default function PhotoAdd() {
    return (
        <div>
            <Segment raised size="large">
                <Item.Group>
                    <Item>
                        <Item.Image size="medium" src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Item.Content verticalAlign="middle">
                            <Item.Header as='a'>Profil</Item.Header>
                            <Item.Meta>Saha profilinde gözükecek fotoğrafı ekleyin
                            </Item.Meta>
                            <Button>Fotoğraf ekle</Button>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>

            <Segment raised size="large">

                <Item.Group>
                    <Item>

                        <Item.Content verticalAlign="middle">
                            <Item.Header as='a'>Vitrin</Item.Header>
                            <Item.Meta>Saha vitrininde gözükecek fotoğrafları ekleyin
                            </Item.Meta>
                            <Button>Fotoğraf ekle</Button>
                        </Item.Content>
                    </Item>
                </Item.Group>
                <Divider horizontal>Album</Divider>
                <Card.Group itemsPerRow={4}>
                    <Card>
                        <Image src='https://arenastorageapp.blob.core.windows.net/pitchpics/p1-1.jpeg' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Saha</Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                Added at:13/10/2022
                            </a>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Image src='https://arenastorageapp.blob.core.windows.net/pitchpics/p1-3.jpeg' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Soyunma Odası</Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                Added at:13/10/2022
                            </a>
                        </Card.Content>
                    </Card>

                </Card.Group>
            </Segment>

        </div>
    )
}
