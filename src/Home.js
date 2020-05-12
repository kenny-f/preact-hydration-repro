import React from 'react';
import logo from './react.svg';
import './Home.css';

class Home extends React.Component {
  render() {
    const arr = [...Array(300).keys()]

    return (
      <div className="Home" css={{background: 'pink'}}>
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
        <div 
          css={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {arr.map((i) => (
            <div key={i} css={{width: i, height: 50, background: 'blue', marginRight: 2}}>
              <div css={{width: i/2, height: 30, background: 'red'}}></div>
            </div>
          ))}
          <div css={{width: 20, height: 50, background: 'red'}}></div>
          <div css={{width: 21, height: 50, background: 'red'}}></div>
          <div css={{width: 31, height: 50, background: 'red'}}></div>
        </div>
      </div>
    );
  }
}

export default Home;
