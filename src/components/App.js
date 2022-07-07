import { Component } from 'react';
import Feedback from './Feedback/Feedback';

class App extends Component {
  state = {
    visible: false,
  };

  onVisible = t => {
    this.setState({ visible: t });
  };

  render() {
    return (
      <div>
        <Feedback onVisible={this.onVisible} visible={this.state.visible} />
      </div>
    );
  }
}

export default App;
