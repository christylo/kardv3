import React, { useState, useEffect } from 'react';
import { Button, View, Image, SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import { VictoryPie } from 'victory-native'
import recentTransactionsData from '../assets/data/recentTransactionsData';
import { Ionicons } from '@expo/vector-icons';

const graphicColor = ["#f1fffa", "#96e6b3", "#1bb55c", "#568259"];
const wantedGraphicData = [{ x: "Cash", y: 35 }, { x: "Snacks", y: 20 }, { x: "Meals", y: 20 }, { x: "Others", y: 55 }];
const defaultGraphicData = [{ y: 1 }, { y: 0 }, { y: 0 }, { y: 0 }];

export default HomeScreen = ({ navigation: { navigate } }) => {
    const [graphicData, setGraphicData] = useState(defaultGraphicData);

    const renderTransactionItem = ({ item }) => {
        return (
            <View style={styles.transactionItemWrapper}>
                <Text style={styles.transactionPurchase}>{item.purchase}</Text>
                <Text style={styles.transactionCost}>{item.cost}</Text>
                <Ionicons name="ios-information-circle-outline" size={20} color="#979797" style={styles.transactionIcon} />
            </View>
        );
    };

    useEffect(() => {
        setGraphicData(wantedGraphicData);
    }, []);

    return (
        <View style={styles.container}>
            {/* header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/images/mySummaryHeader.png')} style={styles.pageHeader}>
                        {/* page header */}
                    </Image>
                </View>
            </SafeAreaView>

            {/* budget displays */}
            <View style={styles.budgetDisplaysWrapper}>
                <View style={styles.budgetItem}>
                    <Text style={styles.descriptionTitles}>Allowance this month</Text>
                    <View style={styles.budgetBlock}>
                        <View style={styles.budgetAmountWrapper}>
                            <Text style={styles.amount}>$50.00</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.budgetItem}>
                    <Text style={styles.descriptionTitles}>Money remaining</Text>
                    <View style={styles.budgetBlock}>
                        <View style={styles.budgetAmountWrapper}>
                            <Text style={styles.amount}>$14.95</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* pie chart */}
            <View style={styles.pieChartTitleWrapper}><Text style={styles.pieChartTitle}>Average Spending</Text></View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <VictoryPie
                    animate={{ delay: 200, duration: 20000, easing: 'exp' }}
                    data={graphicData}
                    height={200}
                    colorScale={graphicColor}
                />
            </View>

            {/* transactons and payment scrolling list
            <View style={styles.transactionsWrapper}>
                <Text style={styles.transactionTitle}>Recent Transactions</Text>
                <View style={styles.transactionListWrapper}>
                    <FlatList
                        data={recentTransactionsData}
                        renderItem={renderTransactionItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            */}

            {/* transactons and payment button */}
            <View style={styles.imageWrapper}>
                <View style={{ justifyContent: 'center' }}>
                    <View style={{ paddingBottom: 12 }}>
                        <Button
                            color='#1BB55C'
                            style={styles.buttonStyle}
                            title="Transactions "
                        />
                    </View>
                    <View style={{ paddingBottom: 10 }}>
                        <Button
                            color='#1BB55C'
                            style={styles.buttonStyle}
                            title="Payment"
                        />
                    </View>
                </View>
                <Image source={require('../assets/images/character_malePerson_walk4_2.png')}></Image>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingHorizontal: 35,
        paddingTop: 35,
        paddingBottom: 15
    },
    pageHeader: {
        width: 303,
        height: 62
    },
    budgetDisplaysWrapper: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
        width: 370,
        height: 123,
        backgroundColor: "#f1fffa"
    },
    budgetItem: {
        justifyContent: 'center',
        paddingHorizontal: 22
    },
    budgetBlock: {
        paddingLeft: 8
    },
    budgetAmountWrapper: {
        justifyContent: 'center',
        width: 110,
        height: 47,
        backgroundColor: "white",
        borderWidth: 12,
        borderColor: '#1bb55c',
        borderRadius: 5
    },
    descriptionTitles: {
        fontSize: 15,
        paddingBottom: 18
    },
    amount: {
        fontSize: 15,
        paddingHorizontal: 15
    },
    pieChartTitleWrapper: {
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 0
    },
    pieChartTitle: {
        fontSize: 25
    },
    imageWrapper: {
        flexDirection: 'row',
    },
    transactionWrapper: {
        marginTop: 30
    },
    transactionTitle: {
        fontSize: 25,
        paddingHorizontal: 20
    },
    transactionListWrapper: {
        paddingTop: 300,
        backgroundColor: '#F1FFFA',
        alignItems: 'center'
    },
    transactionItemWrapper: {
        backgroundColor: '#F0F0F0',
        marginTop: 5,
        borderRadius: 20
    },
    transactionPurchase: {

    },
    transactionCost: {

    },
    transactionIcon: {

    }

});