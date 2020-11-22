import React, { useState, useEffect } from 'react';
import { Button, View, Image, SafeAreaView, Text, StyleSheet, Alert, Modal, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { VictoryPie } from 'victory-native'

const graphicColor = ["#f1fffa", "#96e6b3", "#1bb55c", "#568259"];
const wantedGraphicData = [{ x: "Cash", y: 35 }, { x: "Snacks", y: 20 }, { x: "Meals", y: 20 }, { x: "Others", y: 55 }];
const defaultGraphicData = [{ y: 1 }, { y: 0 }, { y: 0 }, { y: 0 }];

export default ParentHomeScreen = ({ navigation: { navigate } }) => {
    const [graphicData, setGraphicData] = useState(defaultGraphicData);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setGraphicData(wantedGraphicData);
    }, []);

    return (
        <View style={styles.container}>
            {/* header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableWithoutFeedback onPress={() => {setModalVisible(true);}}>
                    <Image source={require('../assets/images/childSummaryHeader.png')} style={styles.pageHeader}>
                        {/* page header */}
                    </Image>
                    </TouchableWithoutFeedback>
                </View>
            </SafeAreaView>

                <View style={styles.pieChartTitleWrapper}><Text style={styles.pieChartTitle}>Average Spending</Text></View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <VictoryPie
                    animate={{ delay: 200, duration: 20000, easing: 'exp' }}
                    data={graphicData}
                    height={200}
                    colorScale={graphicColor}
                />
            </View>
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
            <View style={{backgroundColor: '1BB55C65'}}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Taylor has requested $5.67</Text>
                            <View style={{flexDirection: 'row',}}>
                                <View style={{paddingHorizontal: 10}}>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#568259" }}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Deny</Text>
                                    </TouchableHighlight>
                                </View>
                                <View style={{paddingHorizontal: 10}}>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#568259" }}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Allow</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>


                        </View>
                    </View>
                </Modal>
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
    buttonStyle: {
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#1BB55C",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#568259",
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});