import React from 'react';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

class App extends React.Component {
  // Babel transpiles this and generates the constructor for us
  state = {
    lat: null,
    errorMessage: '',
  };

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log('My component did mount');

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('My component did update');
  }

  componentWillUnmount() {
    console.log('Cleanup - component will unmount');
  }

  render() {
    return (
      <div>
        {!this.state.lat && !this.state.errorMessage && (
          <Spinner message="Please accept location request" />
        )}

        {this.state.lat && !this.state.errorMessage && (
          <SeasonDisplay lat={this.state.lat} />
        )}

        {!this.state.lat && this.state.errorMessage && (
          <h1>Error: {this.state.errorMessage}</h1>
        )}
      </div>
    );
  }
}

export default App;
