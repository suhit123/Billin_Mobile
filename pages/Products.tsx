import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';

const ItemComponent = ({item}: any) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.itemImageContainer}>
        <Image
          source={require('../resources/Items/package.png')}
          resizeMode="contain"
          style={styles.itemImage}
        />
      </View>
      <View style={styles.itemDetailsContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.label}>Sale Price</Text>
            <Text style={styles.value}>₹ {item.salePrice}</Text>
          </View>
          <View>
            <Text style={styles.label}>Purchase Price</Text>
            <Text style={styles.value}>₹ {item.purchasePrice}</Text>
          </View>
          <View>
            <Text style={styles.label}>Stock</Text>
            <Text style={styles.value}>{item.stock} pcs</Text>
          </View>
        </View>
      </View>
      <View style={styles.filterIconContainer}>
        <Image
          source={require('../resources/Items/filter.png')}
          resizeMode="contain"
          style={styles.filterIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const Step1Component = () => {
  return (
    <>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: '#D4F1FF',
          borderRadius: 8,
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <Image
            source={require('../resources/Items/package.png')}
            style={{width: 30, height: 30}}
          />
          <Text style={{fontSize: 16, fontWeight: '500'}}>Product</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: '#D4E2FF',
          borderRadius: 8,
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <Image
            source={require('../resources/Items/Service.png')}
            style={{width: 30, height: 30}}
          />
          <Text style={{fontSize: 16, fontWeight: '500'}}>Service</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const Step2Component = () => {
  const [text, setText] = React.useState('');
  return (
    <ScrollView style={{
        height: 100,
        width: '100%',
    }
    }>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text style={{fontSize: 16, fontWeight: 'medium'}}>Item Name</Text>
          <Text style={{fontSize: 16, color: 'red'}}>*</Text>
        </View>
        <TextInput
          value={text}
          onChangeText={text => setText(text)}
          placeholder="Ex: Kurkure Chips (100g)"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 8,
            padding: 15,
            marginTop: 5,
          }}
          placeholderTextColor="#D4D4D4"
        />
      </View>
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text style={{fontSize: 16, fontWeight: 'medium'}}>Sale Price</Text>
        </View>
        <View
          style={{
            position: 'relative',
          }}>
            <Image
            source={require('../resources/Items/money.png')}
            style={{
              position: 'absolute',
              top: 16,
              left: 15,
              width: 30,
              height: 30,
            }}
            />
          <TextInput
            value={text}
            onChangeText={text => setText(text)}
            placeholder="Ex: Kurkure Chips (100g)"
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 8,
              padding: 15,
              marginTop: 5,
              paddingLeft: 50,
            }}
            placeholderTextColor="#D4D4D4"
          />
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text style={{fontSize: 16, fontWeight: 'medium'}}>Sale Price</Text>
        </View>
        <View
          style={{
            position: 'relative',
          }}>
            <Image
            source={require('../resources/Items/money.png')}
            style={{
              position: 'absolute',
              top: 16,
              left: 15,
              width: 30,
              height: 30,
            }}
            />
          <TextInput
            value={text}
            onChangeText={text => setText(text)}
            placeholder="Ex: Kurkure Chips (100g)"
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 8,
              padding: 15,
              marginTop: 5,
              paddingLeft: 50,
            }}
            placeholderTextColor="#D4D4D4"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const ProductsScreen = () => {
  const items = [
    {id: 1, name: 'Item 1', salePrice: 100, purchasePrice: 80, stock: 50},
    {id: 2, name: 'Item 2', salePrice: 200, purchasePrice: 150, stock: 30},
    {id: 3, name: 'Item 3', salePrice: 300, purchasePrice: 250, stock: 20},
  ];

  const [createItemModalVisible, setCreateItemModalVisible] = useState(false);
  const [step, setStep] = useState(1);

  const stepTitles: any = {
    1: 'Step 1: Select Item Type',
    2: 'Step 2: Enter Basic Info',
    3: 'Step 3: Add Pricing Details',
    4: 'Step 4: Add Stock Info',
    5: 'Step 5: Review & Save',
  };

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
    else {
      // Submit or save logic
      setCreateItemModalVisible(false);
      setStep(1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else {
      setCreateItemModalVisible(false);
      setStep(1);
    }
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>Items</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#D4F1FF',
              borderRadius: 8,
              flex: 1,
              alignItems: 'center',
            }}>
            <Text>Low Stock</Text>
          </View>
          <View
            style={{
              padding: 10,
              backgroundColor: '#D4E2FF',
              borderRadius: 8,
              flex: 1,
              alignItems: 'center',
            }}>
            <Text>Low Stock</Text>
          </View>
          <View
            style={{
              padding: 10,
              backgroundColor: '#FFD4E6',
              borderRadius: 8,
              flex: 1,
              alignItems: 'center',
            }}>
            <Text>Low Stock</Text>
          </View>
        </View>

        <FlatList
          data={items}
          renderItem={ItemComponent}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 110,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: '#282828',
            borderRadius: 8,
            paddingHorizontal: 30,
            flexDirection: 'row',
            gap: 10,
          }}
          onPress={() => setCreateItemModalVisible(true)}>
          <Image
            source={require('../resources/Items/addItem.png')}
            resizeMode="contain"
            style={{width: 20, height: 20}}
          />
          <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
            Create Item
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={createItemModalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 10,
                width: '100%',
              }}>
              Create Item
            </Text>
            <View
              style={{
                width: '100%',
                height: 10,
                backgroundColor: '#D4D4D4',
                borderRadius: 8,
              }}>
              <View
                style={{
                  width: '30%',
                  height: 10,
                  backgroundColor: '#282828',
                  borderRadius: 8,
                }}></View>
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 10,
                width: '100%',
                marginTop: 10,
              }}>
              {stepTitles[step]}
            </Text>

            <View style={{flex: 1, width: '100%'}}>
              {step === 1 && <Step1Component />}

              {step === 2 && <Step2Component />}
              {step === 3 && <View>{/* Step 3 fields go here */}</View>}
              {step === 4 && <View>{/* Step 4 fields go here */}</View>}
              {step === 5 && <View>{/* Step 5 review and confirm UI */}</View>}
            </View>

            <Pressable style={styles.modalNextButton} onPress={handleNext}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {step === 5 ? 'Finish' : 'Next'}
              </Text>
            </Pressable>

            <Pressable style={styles.modalCloseButton} onPress={handleBack}>
              <Text style={styles.textStyle}>
                {step === 1 ? 'Cancel' : 'Back'}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {paddingTop: 50, padding: 20, backgroundColor: 'white'},
  title: {fontSize: 16, fontWeight: 'bold', marginTop: 20},
  flatListContent: {paddingBottom: 20, marginTop: 10},
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginVertical: 5,
  },
  itemImageContainer: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  itemImage: {width: 50, height: 50},
  itemDetailsContainer: {flex: 1, marginLeft: 10},
  itemName: {fontSize: 16, fontWeight: 'bold', color: '#333'},
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    gap: 10,
  },
  label: {fontSize: 14, fontWeight: '500'},
  value: {fontSize: 14, fontWeight: '500'},
  filterIconContainer: {marginLeft: 10},
  filterIcon: {width: 40, height: 40},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    height: '75%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {color: 'black', fontWeight: 'bold', textAlign: 'center'},
  modalNextButton: {
    borderWidth: 1,
    borderColor: '#282828',
    backgroundColor: '#282828',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    position: 'absolute',
    width: '100%',
    bottom: 70,
  },
  modalCloseButton: {
    borderWidth: 1,
    borderColor: '#282828',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    position: 'absolute',
    width: '100%',
    bottom: 10,
  },
});

export default ProductsScreen;
