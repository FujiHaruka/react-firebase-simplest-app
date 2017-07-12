import React, { Component } from 'react'
import autoBind from 'react-autobind'
import MainPage from './MainPage'
import SignIn from './SignIn'
import { firebaseDb, firebaseAuth } from './firebase'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    autoBind(this)
    this.state = {
      text: '',
      auth: false,
      uid: null
    }
  }

  render () {
    let {
      text,
      auth
    } = this.state
    return (
      <div className='App'>
        <div className='App-header'>
          <h2 className='App-title'>React and Firebase Simplest App</h2>
        </div>
        <div className='App-main'>
          {
            auth
            ? <MainPage
              handleInputChange={this.handleInputChange}
              inputValue={text}
              />
            : <SignIn
              signInAnonymously={this.signInAnonymously}
              />
          }
        </div>
      </div>
    )
  }

  async handleInputChange (e) {
    let { auth, uid } = this.state
    if (!auth) {
      throw new Error('Not sign in')
    }
    let text = e.target.value
    this.setState({ text })
    await firebaseDb.ref(`/texts/${uid}`).set({ text })
  }

  async signInAnonymously () {
    try {
      let result = await firebaseAuth.signInAnonymously()
      let { uid } = result
      let snapshot = await firebaseDb.ref(`/texts/${uid}`).once('value')
      let { text } = snapshot.val() || ''
      this.setState({
        auth: true,
        uid,
        text
      })
    } catch (e) {
      console.log(e.message)
    }
  }
}

export default App
