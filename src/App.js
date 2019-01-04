<<<<<<< HEAD
import React from 'react';
import { BlogEditor } from './components';
import './App.css';

const App = () => (
  <div>
    <BlogEditor />
  </div>
);

=======
import React, { Component } from 'react';
import { BlogEditor } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlogEditor/>
      </div>
    );
  }
}
>>>>>>> first commit

export default App;
