import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className='header-color' scroll>
          <Navigation>
            <Link to="/" className='menuLink'>Home</Link>
            <Link to="/projects" className='menuLink'>Projects</Link>
            <Link to="/contactme" className='menuLink'>Contact Me</Link>
          </Navigation>
        </Header>
        <Drawer title="" style={{background:'#D7DDE8'}}>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contactme">Contact Me</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
