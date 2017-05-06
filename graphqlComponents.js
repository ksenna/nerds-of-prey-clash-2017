
import React from 'react';
import { gql, graphql, compose, withApollo } from 'react-apollo';
import { View, Text, Button } from 'react-native';

const CLIENTS_AND_TAGS = gql`
query ClientsAndTagsQuery { 
  clients { 
    id 
    name
  } 
  tags {
    id
    name
  }
}`;

const TIME_TOTALS = gql`
query GetTimeTotals($howMany: Int, $isBillable: Boolean) { 
  totalTimeForDays(howMany: $howMany, isBillable: $isBillable) {
    totals
  }
}`;

const ADD_CLIENT = gql`
mutation AddClient($name: String!) { 
  addClient(name: $name) {
    id
    name
  }
}`;

const ADD_TAG = gql`
mutation AddTag($name: String!) { 
  addTag(name: $name) {
    id
    name
  }
}`;

const ADD_ACTIVITY = gql`
mutation AddActivity($tsStart: String!, $tsEnd: String!, $clientId: Int, $tags: [Int]) { 
  addActivity(tsStart: $tsStart, tsEnd: $tsEnd, clientId: $clientId, tags: $tags) {
    id
  }
}`;


/*
const TIME_TOTALS = gql`
query GetTimeTotals($howMany: Int, $clientId: Int, $isBillable: Boolean) { 
  totalTimeForDays(howMany: $howMany, clientId: $clientId, isBillable: $isBillable) {
    totals
  }
}`;

*/
/*
const NewEntryWithData =  graphql(submitNewUser, {name : 'newUserMutation'})(
  graphql(submitRepository, {name: 'newRepositoryMutation'})(Component)
)

*/

const TestTotalsComp = ({
  data: {
    loading, 
    error, 
    totalTimeForDays,
  }}) => {
  
  if (loading) {
    return <View><Text>loading...</Text></View>;
  }
  if (error) {
    return <View><Text>{error.message}</Text></View>;
  }

  return (<View>
  {totalTimeForDays.totals.map((t) => (
      <Text>
        {t}
      </Text>
    ))}
  </View>);
};

const TestComp = ({
  data: {
    loading, 
    error, 
    tags,
    clients
  }}) => {
  
  if (loading) {
    return <View><Text>loading...</Text></View>;
  }
  if (error) {
    return <View><Text>{error.message}</Text></View>;
  }

  return (<View>
  {clients.map((c) => (
      <Text>
        {c.id}: {c.name}
      </Text>
    ))}
  {tags.map((c) => (
      <Text>
        {c.id}: {c.name}
      </Text>
    ))}
  </View>);
};

const TestAddClientComp = (props) => {
  return (
    <View>
      <Button title="add a client" onPress={() => {
        props.client.mutate({
          mutation: ADD_CLIENT,
          variables: {
            name: 'bobbeh'
          }
        }).then(response => {
          console.log(`${response.data.addClient.id} is the NEW ID!!!!!!`);
        })
      }}/>
    </View>);
};

const TestAddTagComp = (props) => {
  return (
    <View>
      <Button title="add a tag" onPress={() => {
        props.client.mutate({
          mutation: ADD_TAG,
          variables: {
            name: 'poopin'
          }
        }).then(response => {
          console.log(`${response.data.addTag.id} is the NEW ID!!!!!!`);
        })
      }}/>
    </View>);
};


const TestAddActivityComp = (props) => {
  console.log(props);
  return (
    <View>
      <Button title="add an activity" onPress={() => {
        props.client.mutate({
          mutation: ADD_ACTIVITY,
          variables: {
            tsStart: `${(new Date()).getTime()}`,
            tsEnd: `${(new Date()).getTime() + 40000}`,
            clientId: 1,
            tags: [1, 2]
          }
        }).then(response => {
          console.log(`${response.data.addActivity.id} is the NEW ID!!!!!!`);
        })
      }}/>
    </View>);
};


const TestCompAddingClient = withApollo(TestAddClientComp);
const TestCompAddingTag = withApollo(TestAddTagComp);
const TestCompAddingActivity = withApollo(TestAddActivityComp);
// const TestCompAddingClient = compose(
//   graphql(ADD_CLIENT, {
//     options: { variables: {
//       name: "bobbeh",
//     }},
//   }),
// )(TestAddClientComp);

const TestCompWithClientData = compose(
  graphql(CLIENTS_AND_TAGS)
)(TestComp);

const TestCompWithTotalsData = graphql(TIME_TOTALS, {
  options: { variables: {
    howMany: 5,
    isBillable: true,
  } },
})(TestTotalsComp);

/*
some components will need to pull data and mutate

export default compose(
  graphql(query, queryOptions),
  graphql(mutation, mutationOptions),
  connect(mapStateToProps, mapDispatchToProps)
)(Component);

*/

export default {
  TestCompWithClientData,
  TestCompWithTotalsData,
  TestCompAddingClient,
  TestCompAddingTag,
  TestCompAddingActivity,
  CLIENTS_AND_TAGS,
};
