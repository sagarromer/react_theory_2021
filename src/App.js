import { Container, Header, Statistic } from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1'>budget</Header>
      <Statistic size='small'>
        <Statistic.Label>Your balance:</Statistic.Label>
        <Statistic.Value>2,555.567</Statistic.Value>
      </Statistic>
    </Container>
  );
}

export default App;
