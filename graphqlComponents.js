
import React from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { View, Text } from 'react-native';

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

const TestCompWithClientData = graphql(CLIENTS_AND_TAGS)(TestComp);
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

export default TestCompWithTotalsData;
