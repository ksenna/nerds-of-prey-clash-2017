
import React from 'react';
import { gql, graphql } from 'react-apollo';
import { View, Text } from 'react-native';

const AllActivitiesQuery = gql`
query { activities { id tsStart tsEnd tags { id name } } }
`;
/*
class TestComp extends Component {
  render() {

    debugger;
    const listItems = this.props.data.activities.map((a) => (
      <li>
        {a.id}: {a.tsStart}-{a.tsEnd}
      </li>
    ));

    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}*/

const TestComp = ({data: {loading, error, activities}}) => {
  
  if (loading) {
    return <View><Text>loading...</Text></View>;
  }
  if (error) {
    return <View><Text>{error.message}</Text></View>;
  }

  return (<View>
    {activities.map((a) => (
      <Text>
        {a.id}: {a.tsStart}-{a.tsEnd}
      </Text>
    ))}
  </View>);
};

const TestCompWithData = graphql(AllActivitiesQuery)(TestComp);

export default TestCompWithData;
