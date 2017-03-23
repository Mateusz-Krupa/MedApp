import React, { Component, PropTypes } from 'react';
import {
  ListView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';


export default class ResultList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = this.ds.cloneWithRows([]);
  }
  
  componentWillReceiveProps(nextProps) {
    this.dataSource = this.ds.cloneWithRows(nextProps.data);
  }

  render() {
    const listView = () => {
      return (
        <View style={styles.listWrapper}>
          <ListView
            dataSource={this.dataSource}
            renderRow={(rowData) => {
              return (<TouchableHighlight onPress={ () => alert("ble") }> 
                <View style={styles.row}> 
                  <Text style={styles.rowText}>
                    {rowData.date}
                  </Text>
                  <Text style={styles.rowText}>
                    {rowData.value}
                  </Text>
                </View>
              </TouchableHighlight>);
            }}
          />
        </View>
      )
    }

    const spinner = (
      <ActivityIndicator
        size="large"
        style={styles.loader}
      />
    )

    const content = (() => {
      return this.props.data.length > 0 ? listView() : spinner
    })()

    return (
      <View>
        {content}
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
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  }
});

