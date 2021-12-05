import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Switch, Route} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => { 
      if(user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        setCurrentUser({currentUser:user});
      }
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route  path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(null, mapDispatchToProps)(App);
