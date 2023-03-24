import './style/reset.css';
import './style/App.css';
import UserForm from "./components/UserForm";
import PanelList from './components/panel/PanelList';

function App() {
  return (
    <div>
      <h1>New project</h1>
      {/* <UserForm /> */}
      <PanelList />
    </div>
  );
}
export default App