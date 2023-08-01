import React from 'react';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';

class SignInAndSignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignIn: true, // Initialize to true to show the sign-in form by default
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
      <div>
        {showSignIn ? <SignIn /> : <SignUp />}
        <div>
          <button onClick={this.handleToggleForm}>
            {showSignIn ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </div>
    );
  }
}

export default SignInAndSignUp;
