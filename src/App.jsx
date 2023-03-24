import './style/reset.css';
import './style/App.css';
import UserForm from "./components/UserForm";
import Card from './components/ui/card/Card';
import Panel from './components/panel/Panel';

function App() {
  return (
    <div>
      <h1>New project</h1>
      {/* <UserForm /> */}
      <Card>
        <Panel ></Panel>
        <Panel ></Panel>
        <Panel ></Panel>
      </Card>
    </div>
  );
}
export default App