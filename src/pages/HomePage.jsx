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
} from "semantic-ui-react";

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

      <Grid textAlign="center">
        <GridRow>
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
      <Grid textAlign="center">
        <GridRow >
          <GridColumn  width={12} >
            <Card raised fluid  >
              <Card.Content textAlign="left">
                <Card.Header>Günlük gelir</Card.Header>
                <Card.Meta>
                  <span className="date">Bugün</span>
                </Card.Meta>
                <Card.Description>1200TL</Card.Description>
              </Card.Content>
              <Card.Content  textAlign="left">
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
    </div>
  );
}