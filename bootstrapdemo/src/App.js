import React, { Component } from 'react';

import Header from './components/mfr_header';
import MainContainer from './components/mfr_client';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header />
        <MainContainer /> */}
        <div className="containerbox">
          <div className="pt-5">
            <span className="itembox border rounded-lg">border</span>
            <span className="itembox border-top">top</span>
            <span className="itembox border-right">right</span>
            <span className="itembox border-bottom">bottom</span>
            <span className="itembox border-left">left</span>
            {/* border-0 itemboxborder 位置互换不受影响 */}
            <span className="border-0 itemboxborder">移除四边</span>
            <span className="itemboxborder border-top-0">移除top</span>
            <span className="itemboxborder border-right-0">移除right</span>
            <span className="itemboxborder border-bottom-0">移除</span>
            <span className="itemboxborder border-left-0">移除left</span>
          </div>
          <div className="text-white">
            <code className="language-html" data-lang="html">
              <span className="nt">&lt;span</span> <span class="na">class=</span><span class="s">"border"</span><span class="nt">&gt;&lt;/span&gt;</span><br />
              <span className="nt">&lt;span</span> <span class="na">class=</span><span class="s">"border-top"</span><span class="nt">&gt;&lt;/span&gt;</span><br />
              <span className="nt">&lt;span</span> <span class="na">class=</span><span class="s">"border-right"</span><span class="nt">&gt;&lt;/span&gt;</span><br />
              <span className="nt">&lt;span</span> <span class="na">class=</span><span class="s">"border-bottom"</span><span class="nt">&gt;&lt;/span&gt;</span><br />
              <span className="nt">&lt;span</span> <span class="na">class=</span><span class="s">"border-left"</span><span class="nt">&gt;&lt;/span&gt;</span>
            </code>
          </div>
          <div className="pb-5">
            <span className="itembox border border-primary">primary</span>
            <span className="itembox border border-secondary">secondary</span>
            <span className="itembox border border-success">success</span>
            <span className="itembox border border-danger">danger</span>
            <span className="itembox border border-warning">warning</span>
            <span className="itembox border border-info">info</span>
            <span className="itembox border border-light">light</span>
            <span className="itembox border border-dark">dark</span>
            <span className="itembox border border-white">white</span>
          </div>
        </div>
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div >
    );
  }
}

export default App;
