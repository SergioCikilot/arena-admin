import React from "react";
import {
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
  Image,
  CardContent,
  GridRow,
  GridColumn,
  Label,
  Table,
} from "semantic-ui-react";
const square = { width: 175, height: 175 };
const items = [
  {
    header: "Günlük gelir",
    description: "1200TL",
  },
  {
    header: "Project Report - May",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%",
  },
  {
    header: "Project Report - June",
    description:
      "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",
    meta: "ROI: 27%",
  },
  {
    header: "Project Report - June",
    description:
      "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",
    meta: "ROI: 27%",
  },
  {
    header: "Project Report - June",
    description:
      "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",
    meta: "ROI: 27%",
  },
];

export default function HomePage() {
  return (
    <div>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="tag" />
          Kontrol Paneli
        </Header>
      </Divider>

      <Container fluid className="">
        <Grid divided textAlign="center">
          <GridRow>
            <GridColumn width={3}>
              <Card raised className="!w-full">
                <Card.Content textAlign="left">
                  <Card.Header>Günlük gelir</Card.Header>
                  <Card.Meta>
                    <span className="date">Bugün</span>
                  </Card.Meta>
                  <Card.Description>1200TL</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    22 Friends
                  </a>
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn width={3}>
              <Card raised>
                <Card.Content textAlign="left">
                  <Card.Header>Günlük gelir</Card.Header>
                  <Card.Meta>
                    <span className="date">Bugün</span>
                  </Card.Meta>
                  <Card.Description>1200TL</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    22 Friends
                  </a>
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn width={3}>
              <Card raised>
                <Card.Content textAlign="left">
                  <Card.Header>Günlük gelir</Card.Header>
                  <Card.Meta>
                    <span className="date">Bugün</span>
                  </Card.Meta>
                  <Card.Description>1200TL</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    22 Friends
                  </a>
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn width={3}>
              <Card raised>
                <Card.Content textAlign="left">
                  <Card.Header>Günlük gelir</Card.Header>
                  <Card.Meta>
                    <span className="date">Bugün</span>
                  </Card.Meta>
                  <Card.Description>1200TL</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    22 Friends
                  </a>
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
        </Grid>
        <Grid textAlign="center">
          <GridRow>
            <GridColumn width={12}>
              <Card raised fluid>
                <Card.Content textAlign="left">
                  <Card.Header>Günlük gelir</Card.Header>
                  <Card.Meta>
                    <span className="date">Bugün</span>
                  </Card.Meta>
                  <Card.Description>1200TL</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    22 Friends
                  </a>
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
        </Grid>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>E-mail</Table.HeaderCell>
              <Table.HeaderCell> Yaptığı dalga</Table.HeaderCell>
              <Table.HeaderCell>Dalganın Tarihi</Table.HeaderCell>
              <Table.HeaderCell>Dalganın Saati</Table.HeaderCell>
              <Table.HeaderCell>Dalganın fiyatı</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>John Lilki</Table.Cell>
              <Table.Cell>September 14, 2013</Table.Cell>
              <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
              <Table.Cell>Rezervasyon aldı</Table.Cell>
              <Table.Cell>22:00</Table.Cell>
              <Table.HeaderCell>550₺</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Paket Mert</Table.Cell>
              <Table.Cell>September 14, 2013</Table.Cell>
              <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
              <Table.Cell>Çözüş yaptı</Table.Cell>
              <Table.Cell>21:00</Table.Cell>
              <Table.HeaderCell>500₺</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Don Caveman</Table.Cell>
              <Table.Cell>Mart 31, 2023</Table.Cell>
              <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
              <Table.Cell>Ödeme yaptı</Table.Cell>
              <Table.Cell>20:00</Table.Cell>
              <Table.HeaderCell>600₺</Table.HeaderCell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Grid textAlign="center">
          <GridRow>
            <GridColumn width={12}>
              <Segment.Group horizontal raised size="massive">
                <Segment>Left</Segment>
                <Segment>Middle</Segment>
                <Segment>Right</Segment>
              </Segment.Group>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </div>
  );
}
