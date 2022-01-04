import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import { PermissionsAndroid, StyleSheet, View, TextInput, Image, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
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
            time: null,
            url: null,

        };
    }

    componentDidMount() {
        // 初始化載入時跳出允許存取 相機 權限視窗（若已有確認存取權限，則不在跳出）
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



    handleChangeTime = (text) => {
        this.setState({
            time: text,
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
            time: null,
            url: null,
        });
    };


    render() {
        const { title, description, phone, species, city, time, url } = this.state;
        const { handleChangeTitle, handleChangeDescription, handleChangePhone, handleChangeSpecies, handleChangeCity, handleChangeTime, handleAddPress } = this;

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
                                {/* <TouchableOpacity onPress={this.handleOpenImageLibrary} style={styles.cameraBtn}>
                                <Text >從相簿選擇</Text>
                            </TouchableOpacity> */}

                            </View>
                        </View>

                    </View>


                    <View style={styles.inputitem}>
                        <TextInput value={title} defaultValue='請輸入標題' onChangeText={handleChangeTitle} style={styles.input}></TextInput>
                    </View>

                    <View>
                        <TextInput value={description} defaultValue='請輸入描述' onChangeText={handleChangeDescription} style={styles.input}></TextInput>
                    </View>

                    <View>
                        <TextInput value={phone} defaultValue='輸入聯絡電話' onChangeText={handleChangePhone} style={styles.input}></TextInput>
                    </View>

                    <View>
                        <Picker mode='dropdown' selectedValue={species} defaultValue='請選擇物種' onValueChange={handleChangeSpecies} style={styles.input}>
                            <Picker.Item label="cat" value="貓" />
                            <Picker.Item label="dog" value="狗" />
                            <Picker.Item label="rabbit" value="兔" />
                            <Picker.Item label="bird" value="鳥" />
                            <Picker.Item label="other" value="其他" />
                        </Picker>
                    </View>

                    <View>
                        <Picker mode='dropdown' selectedValue={city} defaultValue='請選擇城市' onValueChange={handleChangeCity} style={styles.input}>
                            <Picker.Item label="taipei" value="台北" />
                            <Picker.Item label="taoyuan" value="桃園" />
                            <Picker.Item label="taichung" value="台中" />
                            <Picker.Item label="tainan" value="台南" />
                            <Picker.Item label="kaohsiung" value="高雄" />
                        </Picker>
                    </View>

                    <View>
                        <TextInput value={time} defaultValue='輸入聯絡電話' onChangeText={handleChangeTime} style={styles.input}></TextInput>
                    </View>

                    <TouchableOpacity onPress={handleAddPress} style={styles.submit}>
                        <Text style={styles.submitText}>新增</Text>
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
    inputitem: {


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
    submit: {
        width: Dimensions.get('window').width - 34,
        backgroundColor: '#ffffff',
        height: 60,
        elevation: 2,
        borderRadius: 50,
        marginVertical: 8,
        padding: 16,
    },
    submitText: {
        color: 'gray',
        alignItems: 'center',
    },


});


