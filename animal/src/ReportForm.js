import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import { PermissionsAndroid, StyleSheet, View, TextInput, Image, Button, Text ,TouchableOpacity,Dimensions} from 'react-native';
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
            <View >

                
          <View style={styles.imageItem}>
            <View style={styles.imageHeader}>
              <Text style={styles.label}>餐點圖片</Text>
              <Image
                source={{ uri: !url ? 'https://i.imgur.com/5l6dHWc.png' : url }}
                style={styles.image}
              />
            </View>
            <View>
              <Button title="從相機拍照" onPress={this.handleOpenCamera} />
              <Button title="從相簿選擇" onPress={this.handleOpenImageLibrary} />
            </View>
          </View>


                <View>
                    <Text>輸入標題</Text>
                    <TextInput value={title} onChangeText={handleChangeTitle}></TextInput>
                </View>

                <View>
                    <Text>輸入描述</Text>
                    <TextInput value={description} onChangeText={handleChangeDescription}></TextInput>
                </View>

                <View>
                    <Text>輸入聯絡電話</Text>
                    <TextInput value={phone} onChangeText={handleChangePhone}></TextInput>
                </View>

                <View>
                    <Text>請選擇物種</Text>
                    <Picker mode='dropdown' selectedValue={species} onValueChange={handleChangeSpecies}>
                        <Picker.Item label="cat" value="貓" />
                        <Picker.Item label="dog" value="狗" />
                        <Picker.Item label="rabbit" value="兔" />
                        <Picker.Item label="bird" value="鳥" />
                        <Picker.Item label="other" value="其他" />
                    </Picker>
                </View>

                <View>
                    <Text>請選擇城市</Text>
                    <Picker mode='dropdown' selectedValue={city} onValueChange={handleChangeCity}>
                        <Picker.Item label="taipei" value="台北" />
                        <Picker.Item label="taoyuan" value="桃園" />
                        <Picker.Item label="taichung" value="台中" />
                        <Picker.Item label="tainan" value="台南" />
                        <Picker.Item label="kaohsiung" value="高雄" />
                    </Picker>
                </View>

                <View>
                    <Text>輸入聯絡電話</Text>
                    <TextInput value={time} onChangeText={handleChangeTime}></TextInput>
                </View>

                <TouchableOpacity onPress={handleAddPress} >
                    <Text >新增</Text>
                </TouchableOpacity>






            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#EEE',
    },
    imageItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
    
    },
    
    image: {  width: Dimensions.get('window').width,

     height: 100, marginLeft: 15 },
    item: {
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
      paddingHorizontal: 10,
    },
    label: {
      fontWeight: 'bold',
    },
    textInput: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: '#C0C0C0',
      marginLeft: 15,
    },
    switch: {
      marginLeft: 10,
    },
  });
  

