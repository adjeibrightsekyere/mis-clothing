import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';
//import SignInAndSignUp from '../../components/SignInAndSignUp/SignInAndSignUp.component.jsx';
import './sign-in-and-sign-up.styles.scss';

class SignInAndSignUpPage extends React.Component {
   constructor() {
     super();
 
     this.state = {
       showSignIn: true, // Show the sign-in form by default
     };
   }
 
   handleToggleForm = () => {
     this.setState((prevState) => ({
       showSignIn: !prevState.showSignIn,
     }));
   };
 
   render() {
     const { showSignIn } = this.state;
     return (
       <div className="sign-in-and-sign-up">
         <div className="form-toggle">
           <button onClick={this.handleToggleForm}>
             {showSignIn ? 'Sign Up' : 'Sign In'}
           </button>
         </div>
         {showSignIn ? <SignIn /> : <SignUp />}
       </div>
     );
   }
 }
 
 export default SignInAndSignUpPage;