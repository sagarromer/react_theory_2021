import { 
  Container, 
  Header, 
  Statistic, 
  Grid, 
  Segment,
  Icon,
  Form,
  Button
} from 'semantic-ui-react'
import './App.css';
import MainHeader from './components/MainHeader';


function App() {
  return (
    <Container>
      <MainHeader title='Budget' />
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

      <MainHeader title='History' type='h3' />
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

      <MainHeader title='Add new transaction' type='h3' />
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon='tags'
            width={12}
            label='Description'
            placeholder='new shinney thing'>
          </Form.Input>
          <Form.Input
            width={4}
            label='Value'
            placeholder='100.00'
            icon='dollar'
            iconPosition='left'>
          </Form.Input>
          <Button.Group style={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary>ok</Button>
          </Button.Group>
        </Form.Group>
      </Form>





    </Container>
  );
}

export default App;
