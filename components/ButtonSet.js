import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  FontAwesome,
  Feather,
  Entypo,
  SimpleLineIcons,
  AntDesign,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import getLink from '../actions/getLink';
//svg files
import AdminLine from '../assets/buttonIcons/AdminLine.svg';
import AnimalControl from '../assets/buttonIcons/AnimalControl.svg';
import Commissary from '../assets/buttonIcons/Commissary.svg';
import Contacts from '../assets/buttonIcons/Contacts.svg';
import CrashReport from '../assets/buttonIcons/CrashReport.svg';
import Gun from '../assets/buttonIcons/Gun.svg';
import Inmatelookup from '../assets/buttonIcons/Inmatelookup.svg';
import Jobapply from '../assets/buttonIcons/Jobapply.svg';
import PhoneDirectory from '../assets/buttonIcons/PhoneDirectory.svg';
import RecordRequest from '../assets/buttonIcons/RecordRequest.svg';
import SecurityAndExtraPatrolRequest from '../assets/buttonIcons/SecurityAndExtraPatrolRequest.svg';
import SexOffender from '../assets/buttonIcons/Card.svg';
import VideoVisitation from '../assets/buttonIcons/VideoVisitation.svg';
import VisitationPolicy from '../assets/buttonIcons/VisitationPolicy.svg';
import Wetip from '../assets/buttonIcons/Wetip.svg';
import SheriffSale from '../assets/buttonIcons/SheriffSale.svg';
import TaxWarrants from '../assets/buttonIcons/TaxWarrants.svg';
import TrafficComplaints from '../assets/buttonIcons/TrafficComplaints.svg';
import * as Font from 'expo-font';

class ButtonSet extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'CustomFont': require('../assets/fonts/한나체.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cell}>
          <Inmatelookup
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('immateLookup');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Inmate Lookup</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <VideoVisitation
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => getLink.openView('ModalView', 'ModalVideoVisitation')}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Video Visitation</Text>
          ) : null}
        </View>
        
        <View style={styles.cell}>
          <VisitationPolicy
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('visitationPolicy');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Visitation Policy</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <Commissary
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('commissary');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Commissary</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <CrashReport
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('crashReports');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Crash Report</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <RecordRequest
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('recordsRequest');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Records Request</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <TrafficComplaints
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => getLink.openView('Email', '')}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Traffic Complaints</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <Wetip
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('weTip');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>We-tip</Text>
          ) : null}
        </View>
        
        <View style={styles.cell}>
          <SexOffender
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('sexOffenders');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Sex Offenders</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <SheriffSale
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => getLink.openView('ModalView', 'ModalSheriffSale')}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Sheriff Sale</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <TaxWarrants
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('taxWarrants');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Tax Warrants</Text>
          ) : null}
        </View>
        
        <View style={styles.cell}>
          <Gun
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('gunPermits');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Gun Permits</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <Contacts
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => getLink.openView('ModalView', 'ModalContackUs')}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Contacts Us</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <Jobapply
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('jobApply');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Career</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <AnimalControl
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('animalControl');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Animal Control</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <SecurityAndExtraPatrolRequest
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() =>getLink.openView('Email', '')}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Extra Patrol Request</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <PhoneDirectory
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => getLink.openView('ModalView', 'ModalSocialMdeida')}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Social Media</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <AdminLine
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.openView('Email', '')
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Event Security</Text>
          ) : null}
        </View>
      </View>
    );
  }
}

export default ButtonSet;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ced6e0',
    padding: 15,
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 110,
    margin: 0,
    backgroundColor: 'white',
  },
  gone: {
    width: 115,
    height: 115,
    margin: 0,
    opacity: 0.4,
  },

  text: {
    color: 'black',
    textAlign:'center',
    fontFamily:'CustomFont'
    
  },
  icon_size: {
    width: 70,
    height: 70,
  },
});
