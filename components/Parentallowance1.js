import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

export default Parentallowance1 = () => {
    return (
        <View>
            <View style={styles.maincontainer}>
                <View style={styles.subcontainer}>
                    <Text style={{ color: '#000', fontSize: 18 }}> Taylor's Total Allowance</Text>
                    <View style={styles.subsubcontainer}>
                        <Text style={{ color: '#000', fontSize: 42 }}> $50 </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    maincontainer: {
        borderRadius: 10,
        width: 275,
        height: 150,
        padding: 5,
    },
    subcontainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F1FFFA',
        alignItems: 'center',
        borderRadius: 20,
        height: 100,
    }
});