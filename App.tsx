import React, { Component } from 'react';

import {

  Switch,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

interface StateType {
  status: boolean;
}


export default class App extends Component<{}, StateType>{
  constructor(props: {}) {
    super(props)

    this.state = {
      status: false
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={(valorSelecionado) => this.setState({ status: valorSelecionado })}
          thumbColor = 'aqua'
        />

        <Text style={styles.status}>
          {(this.state.status) ? "Ativo" : "Inativo"}
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  status: {
    textAlign: "center",
    fontSize: 30,
    

  }
});
