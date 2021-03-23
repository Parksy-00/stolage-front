import "antd/dist/antd.css"
import React from 'react'
import { Layout } from 'antd'
import Axios from 'axios'
import Login from '../components/Login/Login'
import Intro from '../components/Intro/Intro'

const { Sider, Content } = Layout

export default function LoginPage() {
  Axios.get('http://localhost:5000/')
  .then(function (response) {
    console.log(response.data);
  })

  return (
    <div className="LoginPage" style={{height:"100vh", width:"100%"}}>
      <Layout>
        <Sider theme='light' width="400px" style={{minHeight:"100vh"}}>
          <Login></Login>
        </Sider>
        <Content>
          <Intro/>
        </Content>
      </Layout>
    </div>
  );
}