import React from 'react';
import { Router, Stack, Scene, View, Image } from 'react-native-router-flux';
import HelpMap from './HelpMap';
import HelpStreet from './HelpStreet';
import Home from './Home';
import HelpList from './HelpList';
import ReportForm from './ReportForm';
import HelpDetail from './HelpDetail';
import HelpEditDetail from './HelpEditDetail';
import HelpListwrap from './HelpListwrap';
import HelpDetailStrettView from './HelpDetailStrettView';

// const icon = () => (
//     <Image source={require('./images/cat1.jpeg')} style={{withe:20,height:20,}}/>
// )



export default function Routes() {

  return (
    <Router showLabel={false} navigationBarStyle={{ backgroundColor: '#fff', opacity: 50, height: 70, elevation: 0, }}headerLayoutPreset={'center'} >

      <Stack key="root" title='列表'

      >
        <Scene key="Home" component={Home}
          title="HELP&HELP"
          titleStyle={{
            color: '#fff',
            fontSize: 22,
            fontWeight: '700',
            marginTop: 16,
            marginBottom: 8,
            letterSpacing:5,

          }}
          navigationBarStyle={{
            backgroundColor: 'rgba(253, 143, 116, 0.95)',
            opacity: 50,
            height: 70,
            elevation: 0
          }}
          initial />

        <Scene key="HelpList" component={HelpList} title="HELP&HELP" back />
        <Scene key="HelpListwrap" component={HelpListwrap} title="HELP&HELP" back />
        <Scene key="ReportForm" component={ReportForm} title="新增" back />
        <Scene key="HelpDetail" component={HelpDetail} title="HELP&HELP" back />
        <Scene key="HelpDetailStrettView" component={HelpDetailStrettView} title="查看街景" back />
        <Scene key="HelpEditDetail" component={HelpEditDetail} title="編輯" back />
      </Stack>

    </Router>
  );
};



