import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav state={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route path='/profile'
            render={() => <Profile store={props.store} />} />
          <Route path='/dialogs'
            render={() => <DialogsContainer store={props.store} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings'  render={() => <Settings />} />

        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
