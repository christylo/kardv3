import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Camera } from 'expo-camera';


export default TakeAPicture = ({ navigation: { navigate } }) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    async function quickstart() {
        // Imports the Google Cloud client library
        const vision = require('@google-cloud/vision');

        // Creates a client
        const client = new vision.ImageAnnotatorClient();

        // Performs label detection on the image file
        const [result] = await client.labelDetection('./assets/images/card_purple.png');
        const labels = result.labelAnnotations;
        console.log('Labels:');
        labels.forEach(label => console.log(label.description));


        // ProductSetName productSetName = new ProductSetName(projectId, locationId, productSetId);

        // ProductSearchParams searchParams = new ProductSearchParams
        // {
        //     ProductCategories = { "apparel" },
        //     ProductSetAsProductSetName = productSetName,
        // };
        // ProductSearchResults results = client.DetectSimilarProducts(image, searchParams);
        // foreach(var result in results.Results)
        // {
        //     Console.WriteLine($"{result.Product.DisplayName}: {result.Score}");
        // }
    }



    const takePicture = async () => {
        if (this.camera) {
            const options = { quality: 1, base64: true };
            const data = await this.camera.takePictureAsync(options);
            let photo = await this.camera.takePictureAsync();
        }

        myClick();

    };

    function myClick() {
        setTimeout(
            function () {
                navigate('Send Request');
            }, 1500);
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.cameracontainer2}>
            <View style={styles.cameracontainer}>
                <Camera style={{ flex: 1 }} type={type} >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        }}>
                        <TouchableOpacity
                            style={{
                                flex: 0.1,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}></Text>
                        </TouchableOpacity>
                    </View>
                </Camera>

            </View>

            <View style={styles.temp1}>
                <View >
                    <Button
                        title="Take Picture"
                        color="#568259"
                        onPress={() => takePicture()}
                    />
                </View>
                <View>
                    <Image source={require('../assets/images/character_maleAdventurer_switch1_2.png')} style={styles.person} />
                </View>
                <View>

                </View>
            </View>
        </View>

    )


}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    person: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
    },
    temp1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },
    cameracontainer: {
        flex: 1,
        borderRadius: 25,
        overflow: 'hidden',
    },
    cameracontainer2: {
        flex: 1,
        padding: 30,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 35,
        paddingTop: 20
    },
    pageHeader: {
        width: 303,
        height: 62
    },
    budgetDisplaysWrapper: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 20
    },
    descriptionTitles: {
        fontSize: 15,
    }
});