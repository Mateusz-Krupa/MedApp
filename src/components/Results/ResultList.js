import React, { Component, PropTypes } from 'react';
import {
  ListView,
  Text,
  View,
  StyleSheet
} from 'react-native';


export default class ResultList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
       dataSource: ds.cloneWithRows([{date: "01.05.2016", value: "124"}, {date: "02.05.2016", value: "134"},
       {date: "04.05.2016", value: "124"}, {date: "05.05.2016", value: "125"},
       {date: "07.05.2016", value: "200"}, {date: "08.05.2016", value: "134"},{date: "01.05.2016", value: "124"}, {date: "02.05.2016", value: "134"},
       {date: "04.05.2016", value: "124"}, {date: "05.05.2016", value: "125"},
       {date: "07.05.2016", value: "200"}, {date: "08.05.2016", value: "134"}]),
    };
  }

  render() {
    return (

      <View style={styles.listWrapper}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => { 
            return (<View style={styles.row}>
              <Text style={styles.rowText}>
                {rowData.date}
              </Text>
              <Text style={styles.rowText}>
                {rowData.value}
              </Text>
            </View>);
          }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listWrapper: {
    backgroundColor: '#E6E6E6',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#EFEFF4',
    marginBottom: 1
  },
  rowText: {
    padding: 20
  }
});

