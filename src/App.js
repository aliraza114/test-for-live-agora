import React from 'react'


import NavigationBar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import LogIn from './pages/login'
import Signup from './pages/signup'

// import ChannelForm from './components/Channelform'
// import Call from './components/Call'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: ''
    }
  }
  selectChannel = channel => {
    this.setState({ channel });
  }

  render() {
  return (
      <div>
        <NavigationBar></NavigationBar>
        
        <Routes>
            <Route path="login" element={<LogIn />}></Route>
            <Route path="signup" element={<Signup />}></Route>
        </Routes>
      </div>
    )
  }
}

export default App;
