import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import { PermissionsAndroid, StyleSheet, View, TextInput, Image, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



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

    handleOpenImageLibrary = () => {
        launchImageLibrary({}, this.handleSelectImage);
    };

    handleSelectImage = (response) => {
        const { didCancel, assets } = response;
        if (!didCancel) {
            this.setState({ url: assets.uri });
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


    // handleDeletePress = () => {
    //     const { handleDelete } = this.props;
    //     animal = () => handleDelete(id);
    //     Actions.pop();

    //     handleDelete(this.state);
    //     this.setState({
    //         animal
    //     });
    // };



    handleUpdatePress = () => {
        const { handleUpdateReport } = this.props;

        Actions.pop();

        handleUpdateReport(this.state);
        this.setState({
            title: null,
            description: null,
            phone: null,
            url: null,
            species: null,
            city: null,
        });
    };



    render() {
        const { animal } = this.props;
        const { image } = this.props;
        const { handleUpdateTitle, handleUpdateDescription, handleUpdatePhone, handleUpdatePress, handleChangeSpecies, handleChangeCity, handleDeletePress } = this;
        return (
            <View style={styles.formContent} >
                <ScrollView>

                    <View >
                        <View style={styles.imageHeader}>
                            <Image
                                source={{ uri: !animal.url ? animal.url : animal.url }}
                                style={styles.image}
                            />

                            <View style={styles.imageBtn}>

                                <TouchableOpacity onPress={this.handleOpenCamera} style={styles.cameraBtn}>
                                    <Text style={styles.cameraBtnText}>更換相片</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>

                    <View style={styles.inputitem}>
                        <TextInput value={animal.title} onChangeText={handleUpdateTitle} required defaultValue={animal.title} style={styles.input}></TextInput>
                    </View>

                    <View>
                        <TextInput value={animal.description} onChangeText={handleUpdateDescription} required defaultValue={animal.phone} style={styles.input}></TextInput>
                    </View>

                    <View>
                        <TextInput value={animal.phone} onChangeText={handleUpdatePhone} required defaultValue={animal.description} style={styles.input}></TextInput>
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


                    <View style={styles.btnGroup}>
                        <TouchableOpacity onPress={handleDeletePress} style={styles.delete} >
                            <Text style={styles.deleteText}>刪</Text>
                       
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleUpdatePress} style={styles.submit} >
                            <Text style={styles.submitText}>更新</Text>
                        </TouchableOpacity>
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
    btnGroup:{
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
    },
    deleteText:{
        color:'#E15233'
    },
    deleteicon: {
        width: 10,
        color: 'white',
    },
    submit: {
        width: Dimensions.get('window').width - 34 - 80 -8,
        backgroundColor: '#E15233',
        height: 60,
        elevation: 3,
        borderRadius: 50,
        marginTop: 40,
        marginLeft:8,
        marginBottom:16,
        padding: 16,
        alignItems: 'center',
    },
    submitText: {
        color: '#ffffff',
        alignItems: 'center',
        fontSize: 20,
    },


});


