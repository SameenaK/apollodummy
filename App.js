/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ApolloClient from 'apollo-boost';

// const client = new ApolloClient({
//   uri: "http://localhost:8080/graphql"
//   // uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
// });
//
// //import gql from 'graphql-tag';
//
// client
//   .query({
//     query: gql`
//       {
//         president(name: "Abraham Lincoln") {
//     name
//     term
//     party
//   }
//       }
//     `
//   })
//   .then(result => console.log(result));

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = {
      name: 'George Washington',
      result: "",
    }
    this.updateName = this.updateName.bind(this)
  }

  updateName(name) {
    this.setState({
      name
    })
  }
  render() {

    const client = new ApolloClient({
      uri: "http://localhost:8080/graphql4
      // uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
    });

    //import gql from 'graphql-tag';
    myname = String("George Washington");

    client
      .query({
        query: gql`
          {
            president(name: "George Washington") {
        name
        term
        party
      }
          }
        `
      })
      .then(result => this.setState({result: result}));

      if(this.state.result["data"] != null) {
        console.log(this.state.result["data"]["president"]);
      }
      // console.log(this.state.result["data"]);

    const query = gql`query PresidentQuery($name: String!) {
      president(name: $name) {
        name
        term
        party
      }
    }`

    const President = ({ data }) => (
      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <Text>Name: {data.president && data.president.name}</Text>
        <Text>Party: {data.president && data.president.party}</Text>
        <Text>Term: {data.president && data.president.term}</Text>
      </View>
    )

    const ViewWithData = graphql(query, {
      options: { variables: { name: this.state.name } }
    })(President)

    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Find President Info</Text>
        <TextInput
          onChangeText={this.updateName}
          style={styles.input} />
        {/* <ViewWithData /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
  backgroundColor: '#dddddd',
  height: 50,
  margin: 20,
  marginBottom: 0,
  paddingLeft: 10
}
});
