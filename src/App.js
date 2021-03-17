import './App.css';
import "antd/dist/antd.css"
import React from 'react'
import { Layout } from 'antd'

import UploadPage from './components/uploadSpace/uploadSpace'
import LoginSpace from './components/loginSpace/login'
import MainSpace from './components/mainSpace/mainSpace'

const { Sider, Content } = Layout

function App() {
  return (
    <div className="App" style={{height:"100vh", width:"100%"}}>
      <Layout>
        <Sider theme='light' width="400px" style={{minHeight:"100vh"}}>
          <LoginSpace></LoginSpace>
        </Sider>
        <Content>
          <MainSpace/>
        </Content>
      </Layout>

    </div>
  );
}

export default App;
