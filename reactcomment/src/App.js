import React, { Component } from 'react';
import './App.css';
import CommentPage from './commentprops/pages/comment';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 使用属性传递的方式 */}
        <CommentPage />
      </div>
    );
  }
}

export default App;
