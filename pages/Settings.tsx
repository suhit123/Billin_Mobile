import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.screen}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Image source={require('../resources/logo.png')} style={styles.logo} />
        <View style={styles.businessDetails}>
          <Text style={styles.title}>Sri Siva Kamakshi Enterprises</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsText}>BUSINESS & GST SETTINGS</Text>
            <Image
              source={require('../resources/RightArrow.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Top Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.billingCard}>
          <Image
            source={require('../resources/Bulb.png')}
            style={styles.billingIcon}
          />
          <View>
            <Text style={styles.billingTitle}>BILLIN</Text>
            <Text style={styles.billingSubtitle}>Subscrption Plans</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.helpCard}>
          <Image source={require('../resources/Help.png')} style={styles.iconSmall} />
          <Text style={styles.optionText}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inviteCard}>
          <Image source={require('../resources/Invite.png')} style={styles.iconSmall} />
          <Text style={styles.optionText}>Invite</Text>
        </TouchableOpacity>
      </View>

      {/* Settings Section */}
      <Text style={styles.title}>Settings</Text>
      <View style={styles.gridContainer}>
        {[
          'Invoice Settings',
          'Account Settings',
          'Reminder Settings',
          'Manage User',
          'Recover Deleted Invoices',
        ].map((label, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.gridCard,
              label === 'Recover Deleted Invoices' && styles.fullWidthCard,
            ]}>
            <View style={styles.gridLeft}>
              <Image source={require('../resources/Bulb.png')} style={styles.gridIcon} />
              <Text style={styles.billingSubtitle}>{label}</Text>
            </View>
            <Image
              source={require('../resources/navBar/Expand_down.png')}
              style={styles.expandIcon}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Others Section */}
      <Text style={styles.title}>Others</Text>
      <View style={styles.gridContainer}>
        {['GST Rate Finder', 'Buy Printer', 'Rate Us', 'About'].map((label, index) => (
          <TouchableOpacity key={index} style={styles.gridCard}>
            <View style={styles.gridLeft}>
              <Image source={require('../resources/Bulb.png')} style={styles.gridIcon} />
              <Text style={styles.billingSubtitle}>{label}</Text>
            </View>
            <Image
              source={require('../resources/navBar/Expand_down.png')}
              style={styles.expandIcon}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    padding: 20,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  businessDetails: {
    gap: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  settingsButton: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#282828',
    borderRadius: 8,
    width: '80%',
  },
  settingsText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    marginTop: 20,
  },
  billingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    backgroundColor: '#D4F1FF',
    borderRadius: 8,
    paddingVertical: 15,
  },
  billingIcon: {
    width: 60,
    height: 60,
  },
  billingTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  billingSubtitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  helpCard: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4E2FF',
    borderRadius: 8,
    paddingVertical: 15,
  },
  inviteCard: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD4E6',
    borderRadius: 8,
    paddingVertical: 15,
  },
  iconSmall: {
    width: 40,
    height: 40,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    gap: 10,
  },
  gridCard: {
    borderWidth: 1,
    borderColor: 'black',
    width: '48%',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fullWidthCard: {
    width: '100%',
  },
  gridLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  gridIcon: {
    width: 30,
    height: 30,
  },
  expandIcon: {
    width: 20,
    height: 20,
  },
});

export default SettingsScreen;
