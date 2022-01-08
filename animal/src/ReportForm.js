import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import { PermissionsAndroid, StyleSheet, View, TextInput, Image, Text, TouchableOpacity, Dimensions, ScrollView, Platform, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


export default class ReportForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            description: null,
            phone: null,
            species: '貓',
            city: '高雄市',
            url: null,
            ready: false,
            where: { lat: null, lng: null },
            error: null

        };

    }


    componentDidMount() {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
            .then(granted => {
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('已允許使用相機權限');
                } else {
                    console.log('已拒絕使用相機權限');
                }
            })
            .catch(error => console.log(error));
    }

    handleOpenCamera = () => {
        launchCamera({}, this.handleSelectMealImage);
    };

    handleOpenImageLibrary = () => {
        launchImageLibrary({}, this.handleSelectMealImage);
    };

    handleSelectMealImage = (response) => {
        const { didCancel, assets } = response;
        if (!didCancel) {
            this.setState({ url: assets[0].uri });
        }
    };




    handleChangeTitle = (text) => {
        this.setState({
            title: text,
        });
    };

    handleChangeDescription = (text) => {
        this.setState({
            description: text,
        });
    };

    handleChangePhone = (text) => {
        this.setState({
            phone: text,
        });
    };

    handleChangeSpecies = (value) => {
        this.setState({
            species: value,
        });
    };

    handleChangeCity = (value) => {
        this.setState({
            city: value,
        });
    };





    handleAddPress = () => {
        const { handleAddReport } = this.props;
        Actions.pop();

        handleAddReport(this.state);
        this.setState({
            title: null,
            description: null,
            phone: null,
            species: '貓',
            city: '高雄市',
            url: null,
        });
    };


    render() {
        const { title, description, phone, species, city, url } = this.state;
        const { handleChangeTitle, handleChangeDescription, handleChangePhone, handleChangeSpecies, handleChangeCity, handleAddPress } = this;
        const { position } = this.state;
        return (
            <View style={styles.formContent} >
                <ScrollView>

                    <View >
                        <View style={styles.imageHeader}>
                            <Image
                                source={{ uri: !url ? 'https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png' : url }}
                                style={styles.image}
                            />

                            <View style={styles.imageBtn}>

                                <TouchableOpacity onPress={this.handleOpenCamera} style={styles.cameraBtn}>
                                    <Text style={styles.cameraBtnText}>上傳相片</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>


                    <View style={styles.inputitem}>
                        <TextInput value={title} placeholder='請輸入標題' onChangeText={handleChangeTitle} style={styles.input}></TextInput>
                    </View>

                    <View>
                        <TextInput value={description} placeholder='請輸入描述' onChangeText={handleChangeDescription} style={styles.input}></TextInput>
                    </View>

                    <View>
                        <TextInput value={phone} placeholder='輸入聯絡電話' onChangeText={handleChangePhone} style={styles.input}></TextInput>
                    </View>

                    <View style={styles.picker}>
                        <Picker mode='dropdown' selectedValue={species} placeholder='請選擇物種' onValueChange={handleChangeSpecies} >
                            <Picker.Item label="請選擇物種" value="請選擇物種" />
                            <Picker.Item label="貓" value="貓" />
                            <Picker.Item label="狗" value="狗" />
                            <Picker.Item label="兔" value="兔" />
                            <Picker.Item label="鳥" value="鳥" />
                            <Picker.Item label="其他" value="其他" />
                        </Picker>
                    </View>

                    <View style={styles.picker}>
                        <Picker mode='dropdown' selectedValue={city} placeholder='請選擇城市' onValueChange={handleChangeCity} >
                            <Picker.Item label="請選擇城市" value="請選擇城市" />
                            <Picker.Item label="台北市" value="台北市" />
                            <Picker.Item label="桃園市" value="桃園市" />
                            <Picker.Item label="台中市" value="台中市" />
                            <Picker.Item label="台南市" value="台南市" />
                            <Picker.Item label="高雄市" value="高雄市" />
                        </Picker>
                    </View>

        
                    <TouchableOpacity onPress={handleAddPress} style={styles.submit} >
                        <Text style={styles.submitText}>送出</Text>
                    </TouchableOpacity>


                </ScrollView>



            </View>
        );
    }
}


const styles = StyleSheet.create({
    formContent: {
        marginHorizontal: 16,
        marginVertical: 16,
    },

    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#EEE',
    },

    image: {
        width: Dimensions.get('window').width - 32,
        height: Dimensions.get('window').height / 3.5,
        borderRadius: 20,
        position: 'relative',
    },
    imageBtn: {
        flexDirection: 'row',
        marginHorizontal: 16,
        position: 'absolute',
        left: 255,
        top: 175,
    },
    cameraBtn: {

        backgroundColor: '#ffffff',
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    cameraBtnText: {
        color: 'gray',
    },
    input: {
        width: Dimensions.get('window').width - 34,
        backgroundColor: '#ffffff',
        height: 60,
        borderWidth: 0.25,
        borderRadius: 50,
        borderColor: 'gray',
        marginVertical: 8,
        padding: 16,

    },
    picker: {
        paddingVertical: 8,
        borderColor: 'gray',
        borderWidth: 0.25,
        borderRadius: 40,
        paddingHorizontal: 4,
        paddingVertical: 2,
        marginVertical: 8,
    },
    submit: {
        width: Dimensions.get('window').width - 34,
        backgroundColor: '#FA8B70',
        height: 60,
        elevation: 3,
        borderRadius: 50,
        marginTop: 40,
        padding: 16,
        alignItems: 'center',
    },
    submitText: {
        color: '#ffffff',
        alignItems: 'center',
        fontSize: 20,
    },
    containers: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    big: {
        fontSize: 25,
        color: 'black',
    }


});


