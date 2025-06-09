import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BottomBar(): React.JSX.Element {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.bottomBar}>
        <View style={styles.tabItem} onTouchEnd={() => navigator.navigate('Home' as never)}>
          <Image 
            source={require('./resources/navBar/Home.png')}
            resizeMode="contain"
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.tabText}>Home</Text>
        </View>
        <View style={styles.tabItem} onTouchEnd={() => navigator.navigate('Customers' as never)}>
          <Image 
            source={require('./resources/navBar/Group_light.png')}
            resizeMode="contain"
            style={{ width: 32, height: 32 }}
          />
          <Text style={styles.tabText}>Customers</Text>
        </View>
        <View style={styles.tabItem} onTouchEnd={() => navigator.navigate('Products' as never)}>
          <Image 
            source={require('./resources/navBar/Box_light.png')}
            resizeMode="contain"
            style={{ width: 32, height: 32 }}
          />
          <Text style={styles.tabText}>Products</Text>
        </View>
        <View style={styles.tabItem} onTouchEnd={() => navigator.navigate('Tools' as never)}>
          <Image 
            source={require('./resources/navBar/darhboard_alt.png')}
            resizeMode="contain"
            style={{ width: 32, height: 32 }}
          />
          <Text style={styles.tabText}>Tools</Text>
        </View>
        <View style={styles.tabItem} onTouchEnd={() => navigator.navigate('Settings' as never)}>
          <Image 
            source={require('./resources/navBar/Setting_line_light.png')}
            resizeMode="contain"
            style={{ width: 32, height: 32 }}
          />
          <Text style={styles.tabText}>Settings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    zIndex: 10,
  },
  bottomBar: {
    width: '95%',
    height: 80,
    backgroundColor: '#282828',
    borderRadius: 16,
    position: 'absolute',
    bottom: 20,
    left: '2.5%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tabItem: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'medium',
    textAlign: 'center',
  },
});

export default BottomBar;
