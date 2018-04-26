import React from 'react';
import { View, Button, Text } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default class App extends React.Component {
  state = {
    visible: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Show panel' onPress={() => this.setState({visible: true})} />
        <SlidingUpPanel
          visible={this.state.visible}
          onRequestClose={() => this.setState({visible: false})}>
          <View style={styles.container}>
            <Text>Here is the content inside panel</Text>
            <Button title='Hide' onPress={() => this.setState({visible: false})} />
          </View>
        </SlidingUpPanel>
      </View>
    )
  }
}
