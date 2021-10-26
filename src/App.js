import { Container, Header, Statistic, Grid, Segment } from 'semantic-ui-react'
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
    </Container>
  );
}

export default App;
