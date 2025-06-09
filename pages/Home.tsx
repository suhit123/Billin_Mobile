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
} from 'react-native';

const HomeScreen = () => {
  const Transactions = [
    {
      businessName: 'Sri Siva Kamakshi Enterprises',
      invoiceNumber: 'INV-001',
      amount: 120.0,
      date: '03 Oct 2023 . 5 days due',
    },
    {
      businessName: 'Sri Siva Kamakshi Enterprises',
      invoiceNumber: 'INV-002',
      amount: 150.0,
      date: '01 Oct 2023 . 7 days due',
    },
    {
      businessName: 'Sri Siva Kamakshi Enterprises',
      invoiceNumber: 'INV-003',
      amount: 200.0,
      date: '28 Sep 2023 . 10 days due',
    },
    {
      businessName: 'Sri Siva Kamakshi Enterprises',
      invoiceNumber: 'INV-004',
      amount: 180.0,
      date: '25 Sep 2023 . 12 days due',
    },
    {
      businessName: 'Sri Siva Kamakshi Enterprises',
      invoiceNumber: 'INV-005',
      amount: 220.0,
      date: '20 Sep 2023 . 15 days due',
    },
  ];

  const salesDate = [
    {day: 'Mon', amount: 1000, percent: '100%'},
    {day: 'Tue', amount: 300, percent: '30%'},
    {day: 'Wed', amount: 250, percent: '25%'},
    {day: 'Thu', amount: 400, percent: '40%'},
    {day: 'Fri', amount: 350, percent: '35%'},
    {day: 'Sat', amount: 700, percent: '70%'},
    {day: 'Sun', amount: 600, percent: '60%'},
  ];

  const transactionsFilters = [
    {
      label: 'Today',
      dateRange: '06 Oct 2023 - 06 Oct 2023',
    },
    {
      label: 'Last 7 days',
      dateRange: '30 Sep 2023 - 06 Oct 2023',
    },
    {
      label: 'Last 30 days',
      dateRange: '07 Sep 2023 - 06 Oct 2023',
    },
    {
      label: 'This month',
      dateRange: '01 Sep 2023 - 30 Sep 2023',
    },
    {
      label: 'Last month',
      dateRange: '01 Aug 2023 - 31 Aug 2023',
    },
    {
      label: 'Custom Range',
      dateRange: '',
    },
  ];
  const [transactionsFilterModalVisible, setTransactionsFilterModalVisible] =
    useState(false);
  return (
    <ScrollView style={styles.screen}>
      {/* Modal for transactions filter */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={transactionsFilterModalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{width: '100%'}}>
              <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>Filter Transactions</Text>
              <FlatList
                data={transactionsFilters}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={{
                        paddingBottom: 10,
                        paddingTop: 10,
                    }}>
                    <View>
                        <Text style={{fontSize: 16}}>{item.label}</Text>
                    {item.dateRange ? (
                      <Text style={{color: '#888'}}>{item.dateRange}</Text>
                    ) : null}
                    </View>
                    <View>
                        
                    </View>
                  </TouchableOpacity>
                )}
                contentContainerStyle={{paddingBottom: 40}}
              />
            </View>
            <Pressable
              style={[styles.modalCloseButton]}
              onPress={() =>
                setTransactionsFilterModalVisible(
                  !transactionsFilterModalVisible,
                )
              }>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={styles.title}>Sri Siva Kamakshi Enterprises</Text>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.card, styles.collectCard]}>
          <View>
            <Text style={styles.amount}>$120.00</Text>
            <Text style={styles.label}>To Collect</Text>
          </View>
          <Image
            source={require('../resources/navBar/Expand_down.png')}
            resizeMode="contain"
            style={styles.expandIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.receiveCard]}>
          <View>
            <Text style={styles.amount}>$120.00</Text>
            <Text style={styles.label}>To Collect</Text>
          </View>
          <Image
            source={require('../resources/navBar/Expand_down.png')}
            resizeMode="contain"
            style={styles.expandIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.salesBox}>
        <View style={styles.salesHeader}>
          <View>
            <Text style={styles.salesLabel}>Weekly Sales</Text>
            <Text style={styles.salesAmount}>$1,200.00</Text>
          </View>
          <View style={styles.weekRow}>
            <Text style={styles.salesLabel}>This Week</Text>
            <Image
              source={require('../resources/DownArrow.png')}
              resizeMode="contain"
              style={styles.expandIcon}
            />
          </View>
        </View>

        <FlatList
          data={salesDate}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.salesBarContainer}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.barWrapper}>
              <View>
                <View style={styles.barColumn}>
                  <Text style={styles.barAmountText}>
                    {/* $ {item.amount} */}
                  </Text>
                  <View
                    style={[styles.barFill, {height: parseInt(item.percent)}]}
                  />
                </View>
              </View>
              <Text style={styles.barDayText}>{item.day}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.card2, styles.totalBalance]}>
          <View>
            <Text style={styles.cardTitle}>Total Balance</Text>
            <Text style={styles.label}>Cash + Bank Balance</Text>
          </View>
          <Image
            source={require('../resources/navBar/Expand_down.png')}
            resizeMode="contain"
            style={styles.expandIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card2, styles.reportCard]}>
          <View>
            <Text style={styles.cardTitle}>Reports</Text>
            <Text style={styles.label}>Sales, Party, GST ...</Text>
          </View>
          <Image
            source={require('../resources/navBar/Expand_down.png')}
            resizeMode="contain"
            style={styles.expandIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.transactionHeader}>
        <Text style={styles.transactionTitle}>Transactions</Text>
        <TouchableOpacity
          style={styles.transactionFilter}
          onPress={() => setTransactionsFilterModalVisible(true)}>
          <Image
            source={require('../resources/calendar.png')}
            resizeMode="contain"
            style={styles.calendarIcon}
          />
          <Text style={styles.last30}>Last 30 days</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={Transactions}
        keyExtractor={item => item.invoiceNumber}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.transactionCard}>
            <View style={styles.transactionLeft}>
              <Text style={styles.businessName}>{item.businessName}</Text>
              <Text style={styles.invoiceDetail}>{item.invoiceNumber}</Text>
              <Text style={styles.invoiceDetail}>{item.date}</Text>
            </View>
            <View style={styles.transactionRight}>
              <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
              <View style={styles.unpaidBadge}>
                <Text style={styles.unpaidText}>Unpaid</Text>
              </View>
              <View style={styles.shareRow}>
                <Image
                  source={require('../resources/Subtract.png')}
                  resizeMode="contain"
                  style={styles.shareIcon}
                />
                <Text style={styles.shareText}>Share Invoice</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{paddingBottom: 50}}
        ListFooterComponent={<View style={{height: 100}} />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    width: '100%',
    gap: 10,
  },
  card: {
    width: '50%',
    height: 90,
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card2: {
    width: '50%',
    height: 70,
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  collectCard: {
    backgroundColor: '#CEFFE7',
  },
  receiveCard: {
    backgroundColor: '#FFD7D7',
  },
  totalBalance: {
    backgroundColor: '#CFCEFF',
  },
  reportCard: {
    backgroundColor: '#D4F1FF',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  expandIcon: {
    width: 25,
    height: 25,
  },
  salesBox: {
    width: '100%',
    height: 240,
    backgroundColor: '#282828',
    borderRadius: 15,
    marginTop: 20,
    padding: 20,
  },
  salesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  salesLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  salesAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  weekRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  salesBarContainer: {
    marginTop: 20,
    gap: 10,
    paddingRight: 10,
  },
  barWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  barColumn: {
    width: 40,
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  barFill: {
    width: 40,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderRadius: 5,
  },
  barAmountText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  barDayText: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#FFFFFF',
    marginTop: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionHeader: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionFilter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  last30: {
    fontSize: 16,
    fontWeight: '500',
  },
  transactionCard: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionLeft: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 10,
  },
  transactionRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  businessName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  invoiceDetail: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
  },
  unpaidBadge: {
    backgroundColor: '#E6B58A',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unpaidText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  shareRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareIcon: {
    width: 12,
    height: 12,
    marginTop: 8,
    marginRight: 5,
  },
  shareText: {
    fontSize: 14,
    color: '#33604A',
    marginTop: 5,
  },

  //Modaal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalCloseButton: {
    backgroundColor: '#282828',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    position: 'absolute',
    width: '100%',
    bottom: 10,
  },
});

export default HomeScreen;
