import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import { PermissionsAndroid, StyleSheet, View, TextInput, Image, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { launchCamera } from 'react-native-image-picker';



export default class HelpEditDetail extends React.Component {

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
        launchCamera({}, this.handleSelectImage);
    };

    handleSelectImage = (response) => {
        const { didCancel, assets } = response;
        if (!didCancel) {
            this.setState({ uri: assets.url });
        }
    };


    handleUpdateTitle = (title) => {
        let { animal } = this.props;
        animal.title = title;
        this.setState({
            animal
        });
    };

    handleUpdateDescription = (description) => {
        let { animal } = this.props;
        animal.description = description;

        this.setState({
            animal
        });
    };

    handleUpdateLocationdescription = (locationdescript) => {
        let { animal } = this.props;
        animal.locationdescript = locationdescript;

        this.setState({
            animal
        });
    };

    handleUpdatePhone = (phone) => {
        let { animal } = this.props;
        animal.phone = phone;
        this.setState({
            animal
        });
    };

    handleChangeSpecies = (species) => {
        let { animal } = this.props;
        animal.species = species;
        this.setState({
            animal
        });
    }

    handleChangeCity = (city) => {
        let { animal } = this.props;
        animal.city = city;
        this.setState({
            animal
        });
    }

    handleChangeRegion = (region) => {
        let { animal } = this.props;
        animal.region = region;
        this.setState({
            animal
        });
    }

    // 刪除
    handleDeletePress = () => {
        const { handleDeleteReport } = this.props;
        let { animal } = this.props;
        Actions.pop();
        console.log(animal.id);
        this.setState(
            handleDeleteReport(animal.id));

    };

    //更新
    handleUpdatePress = () => {
        const { handleUpdateReport } = this.props;

        Actions.pop();

        handleUpdateReport(this.state);
        this.setState({
            title: null,
            description: null,
            locationdescript: null,
            phone: null,
            url: null,
            species: null,
            city: null,
            region: null,
        });
    };

    render() {
        const { animal } = this.props;
        const { handleDeleteReport } = this.props;
        const { url } = this.props.animal;

        const {
            handleUpdateTitle,
            handleUpdateDescription,
            handleUpdatePhone,
            handleUpdatePress,
            handleChangeSpecies,
            handleChangeCity,
            handleChangeRegion,
            handleUpdateLocationdescription } = this;

        return (
            <View style={styles.formContent} >
                <ScrollView>

                    <View >
                        <View style={styles.imageHeader}>
                            <Image
                                source={{
                                    uri: !url
                                        ?
                                        url
                                        :
                                        url
                                }}
                                defaultSource={{uri:url}}
                                style={styles.image}
                            />

                            <View style={styles.imageBtn}>

                                <TouchableOpacity onPress={this.handleOpenCamera} style={styles.cameraBtn}>
                                    <Text style={styles.cameraBtnText}>更換相片</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                    <View style={styles.inputContent}>

                        <View style={styles.inputitem}>
                            <TextInput value={animal.title} onChangeText={handleUpdateTitle} required defaultValue={animal.title} style={styles.input}></TextInput>
                        </View>

                        <View>
                            <TextInput value={animal.description} onChangeText={handleUpdateDescription} required defaultValue={animal.description} style={styles.input}></TextInput>
                        </View>

                        <View>
                            <TextInput value={animal.locationdescript} onChangeText={handleUpdateLocationdescription} required defaultValue={animal.locationdescript} style={styles.input}></TextInput>
                        </View>

                        <View>
                            <TextInput value={animal.phone} onChangeText={handleUpdatePhone} required defaultValue={animal.phone} style={styles.input}></TextInput>
                        </View>

                        <View style={styles.picker}>
                            <Picker mode='dropdown' selectedValue={animal.species} placeholder='請選擇物種' onValueChange={handleChangeSpecies} >
                                <Picker.Item label="請選擇物種" value="請選擇物種" />
                                <Picker.Item label="貓" value="貓" />
                                <Picker.Item label="狗" value="狗" />
                                <Picker.Item label="兔" value="兔" />
                                <Picker.Item label="鳥" value="鳥" />
                                <Picker.Item label="其他" value="其他" />
                            </Picker>
                        </View>

                        <View style={styles.picker}>
                            <Picker mode='dropdown' selectedValue={animal.city} placeholder='請選擇城市' onValueChange={handleChangeCity} >
                                <Picker.Item label="請選擇城市" value="請選擇城市" />
                                <Picker.Item label="台北市" value="台北市" />
                                <Picker.Item label="桃園市" value="桃園市" />
                                <Picker.Item label="台中市" value="台中市" />
                                <Picker.Item label="台南市" value="台南市" />
                                <Picker.Item label="高雄市" value="高雄市" />
                            </Picker>
                        </View>

                        <View style={styles.picker}>
                            <Picker mode='dropdown' selectedValue={animal.region} placeholder='請選擇區域' onValueChange={handleChangeRegion} >
                                <Picker.Item label="請選擇區域" value="請選擇區域" />
                                <Picker.Item label="前金區" value="前金區" />
                                <Picker.Item label="苓雅區" value="苓雅區" />
                                <Picker.Item label="左營區" value="左營區" />
                                <Picker.Item label="楠梓區" value="楠梓區" />
                                <Picker.Item label="三民區" value="三民區" />
                                <Picker.Item label="燕巢區" value="燕巢區" />
                                <Picker.Item label="鼓山區" value="鼓山區" />
                                <Picker.Item label="風山區" value="風山區" />
                                <Picker.Item label="前鎮區" value="前鎮區" />
                                <Picker.Item label="大社區" value="大社區" />
                            </Picker>
                        </View>

                        <View style={styles.btnGroup}>
                            <TouchableOpacity onPress={() => handleDeleteReport(animal.id)} style={styles.delete} >
                                <Image style={styles.deleteIcon} source={require('./images/delete.png')}></Image>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleUpdatePress} style={styles.submit} >
                                <Text style={styles.submitText}>更新</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    btnGroup: {
        flexDirection: 'row',
    },
    delete: {
        width: 80,
        backgroundColor: '#ffffff',
        height: 60,
        elevation: 3,
        borderRadius: 50,
        marginTop: 40,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteIcon: {
        width: 30,
        height: 30,
    },
    inputContent: {
        marginTop: 8,
    },
    submit: {
        width: Dimensions.get('window').width - 34 - 80 - 8,
        backgroundColor: '#FA8B70',
        height: 60,
        elevation: 3,
        borderRadius: 50,
        marginTop: 40,
        marginLeft: 8,
        marginBottom: 16,
        padding: 16,
        alignItems: 'center',
    },
    submitText: {
        color: '#ffffff',
        alignItems: 'center',
        fontSize: 20,
    },


});


