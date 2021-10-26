import { 
  Container, 
  Header, 
  Statistic, 
  Grid, 
  Segment,
  Icon
} from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1'>budget</Header>
      <Statistic size='small'>
        <Statistic.Label>Your balance:</Statistic.Label>
        <Statistic.Value>2,555.567</Statistic.Value>
      </Statistic>
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{textAlign: 'left'}}>Incoming</Statistic.Label>
                <Statistic.Value>2,555.567</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{textAlign: 'right'}}>Expenses</Statistic.Label>
                <Statistic.Value>2,555.567</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Segment>

      <Header as='h1'>budget</Header>
      <Segment textAlign='center' color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="left">
              $10,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment textAlign='center' color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="left">
              $10,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment textAlign='center' color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="left">
              $10,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>




    </Container>
  );
}

export default App;
