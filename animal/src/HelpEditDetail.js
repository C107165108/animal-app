import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import { PermissionsAndroid, StyleSheet, View, TextInput, Image, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


export default class HelpEditDetail extends React.Component {

    // handleUpdate = () => {
    //     this.props.updateAnimals(this.title.value, this.description.value, this.phone.value);
    // }

    // componentDidMount() {
    //     // 初始化載入時跳出允許存取 相機 權限視窗（若已有確認存取權限，則不在跳出）
    //     PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
    //         .then(granted => {
    //             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //                 console.log('已允許使用相機權限');
    //             } else {
    //                 console.log('已拒絕使用相機權限');
    //             }
    //         })
    //         .catch(error => console.log(error));
    // }

    // handleOpenCamera = () => {
    //     launchCamera({}, this.handleSelectMealImage);
    // };

    // handleOpenImageLibrary = () => {
    //     launchImageLibrary({}, this.handleSelectMealImage);
    // };


    
  

    handleUpdateTitle = (title) => {
        let {animal} = this.props;
        animal.title = title;
        this.setState({
           animal
        });
    };

    handleUpdateDescription = (description) => {
        let {animal} = this.props;
        animal.description = description;

        this.setState({
            animal
        });
    };

    handleUpdatePhone = (phone) => {
        let {animal} = this.props;
        animal.phone = phone;
        this.setState({
            animal
        });
    };

    pressDelete = (id) => {
        let animals = this.state.animals.filter((animal) => animal.id !== id);
        this.setState({
            animals
        });
    }




    handleUpdatePress = () => {
        const { handleUpdateReport } = this.props;

        Actions.pop();

        handleUpdateReport(this.state);
        this.setState({
            title: null,
            description: null,
            phone: null,
        });
    };



    render() {
        const { animal } = this.props;
        const { pressEditBtn, pressDelete } = this.props;
        const { handleUpdateTitle,handleUpdateDescription,handleUpdatePhone,handleUpdatePress,updateAnimals } = this;
        return (
            <View style={styles.formContent} >
                <ScrollView>



                    <View style={styles.inputitem}>
                        <TextInput value={animal.title} onChangeText={handleUpdateTitle} required defaultValue={animal.title} style={styles.input}></TextInput>
                    </View>

                    <View>
                        <TextInput value={animal.description}  onChangeText={handleUpdateDescription} required defaultValue={animal.phone} style={styles.input}></TextInput>
                    </View>

                    <View>
                        <TextInput value={animal.phone}  onChangeText={handleUpdatePhone} required defaultValue={animal.description} style={styles.input}></TextInput>
                    </View>

                    <TouchableOpacity onPress={pressDelete} style={styles.submit} >
                        <Text style={styles.submitText}>刪除</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleUpdatePress} style={styles.submit} >
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
        backgroundColor: '#E15233',
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


});


