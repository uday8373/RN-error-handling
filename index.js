import React, { Component } from 'react'
import { Text, View } from 'react-native'
export default class ErrorBoundary extends Component {
  state = {isError: false}
  componentDidCatch = (error, info) => {this.setState({isError: true})}
  render() {return this.state.isError ? this.props.component ? this.props.component : <ErrorComponent /> : this.props.children}
}
const ErrorComponent = () => (
  <View style={{flex:1, backgroundColor: '#000', justifyContent:'center', alignItems: 'center'}}>
    <Text style={{fontSize: 30, color: '#fff', textAlign: 'center'}}>Something went wrong !</Text>
  </View>
)