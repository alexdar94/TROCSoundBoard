import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { AdMobBanner } from 'react-native-admob';
import AYue from './components/ayue';
import MCHotDog from './components/mchotdog';
import HipHopMan from './components/hiphopman';
import Kris from './components/kris';

export default class TROCSoundboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  bannerError(e) {
    console.log('banner error', e)
  }

  didReceiveAd(ad) {
    console.log('ad received', ad)
  }

  render() {
    var adUnitID = (Platform.OS === 'ios')?"ca-app-pub-8149901445736530/4150845033":"ca-app-pub-8149901445736530/1916575692";
    if(Platform.OS === 'ios'){
        return (
          <View style={styles.main}>
            <ScrollableTabView
            style={{marginTop:20}}
            initialPage={1}
            tabBarUnderlineStyle={{backgroundColor: '#000000'}}
            tabBarBackgroundColor={'#FFDF00'}
            renderTabBar={() => <ScrollableTabBar />}>
              <AYue tabLabel='阿岳'>My</AYue>
              <MCHotDog tabLabel='熱狗'>favorite</MCHotDog>
              <Kris tabLabel='吴亦凡'>project</Kris>
              <HipHopMan tabLabel='嘻哈侠'>favorite</HipHopMan>
            </ScrollableTabView>
            <AdMobBanner
              bannerSize="fullBanner"
              adUnitID={adUnitID}
              testDeviceID="EMULATOR"
              adViewDidReceiveAd={this.didReceiveAd}
              didFailToReceiveAdWithError={this.bannerError} />
          </View>
        ) 
      }else{
        return (
          <View style={styles.main}>
            <ScrollableTabView
            initialPage={1}
            tabBarUnderlineStyle={{backgroundColor: '#000000'}}
            tabBarBackgroundColor={'#FFDF00'}
            renderTabBar={() => <ScrollableTabBar />}>
              <AYue tabLabel='阿岳'>My</AYue>
              <MCHotDog tabLabel='熱狗'>favorite</MCHotDog>
              <Kris tabLabel='吴亦凡'>project</Kris>
              <HipHopMan tabLabel='嘻哈侠'>favorite</HipHopMan>
            </ScrollableTabView>
            <AdMobBanner
              bannerSize="fullBanner"
              adUnitID={adUnitID}
              testDeviceID="EMULATOR"
              adViewDidReceiveAd={this.didReceiveAd}
              didFailToReceiveAdWithError={this.bannerError} />
          </View>
        )
      }
    
  }
}

const styles = StyleSheet.create({
  main: {flex: 1}
});