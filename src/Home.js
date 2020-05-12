import React from 'react';
import logo from './react.svg';
import './Home.css';
import { ThemeContext } from './Theme';

class Home extends React.Component {
  render() {
    const arr = [...Array(300).keys()]

    return (
      <div className="Home" style={{ background: 'pink' }}>
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
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {arr.map((i) => (
            <ThemeContext.Consumer>
              {({blue}) => <div style={{ width: i, height: 50, background: blue, marginRight: 2 }}>
                <ThemeContext.Consumer>
                  {({ red }) => <div style={{ width: i / 2, height: 30, background: red }}></div>}
                </ThemeContext.Consumer>
              </div>}
            </ThemeContext.Consumer>
          ))}
          <div style={{ width: 20, height: 50, bg: 'red' }}></div>
          <div style={{ width: 21, height: 50, bg: 'red' }}></div>
          <div style={{ width: 31, height: 50, bg: 'red' }}></div>
        </div>
      </div>
    );
  }
}

export default Home;
