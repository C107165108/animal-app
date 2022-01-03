import React from 'react';
import { StyleSheet, View, Switch, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';

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

        };
    }



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
        });
    };


    render() {
        const { title, description, phone, species, city, time } = this.state;
        const { handleChangeTitle, handleChangeDescription, handleChangePhone, handleChangeSpecies, handleChangeCity, handleChangeTime, handleAddPress } = this;

        return (
            <View >
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


