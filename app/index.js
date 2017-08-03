import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import AYue from './components/ayue';
import MCHotDog from './components/mchotdog';
import HipHopMan from './components/hiphopman';
import Kris from './components/kris';

export default class TROCSoundboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={1}
      tabBarUnderlineStyle={{backgroundColor: '#000000'}}
      tabBarBackgroundColor={'#FFDF00'}
      renderTabBar={() => <ScrollableTabBar />}>
      <AYue tabLabel='阿岳'>My</AYue>
      <MCHotDog tabLabel='熱狗'>favorite</MCHotDog>
      <Kris tabLabel='吴亦凡'>project</Kris>
      <HipHopMan tabLabel='嘻哈侠'>favorite</HipHopMan>
    </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});