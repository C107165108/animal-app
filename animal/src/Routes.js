import React from 'react';
import { Router, Stack, Scene ,View,Image} from 'react-native-router-flux';
import HelpMap from './HelpMap';
import HelpStreet from './HelpStreet';
import Home from './Home';
import HelpList from './HelpList';
import ReportForm from './ReportForm';
import HelpDetail from './HelpDetail';
import HelpEditDetail from './HelpEditDetail';
import HelpListwrap from './HelpListwrap';
import HelpDetailStrettView from './HelpDetailStrettView';

const icon = () => (
    <Image source={require('./images/cat1.jpeg')} style={{withe:20,height:20,}}/>
)

export default function Routes  () {

    return (
        <Router navigationBarStyle={{ backgroundColor: '#fff', height: 60, }} headerLayoutPreset="center">

            <Stack key="root" title='列表' >
                <Scene key="Home" component={Home} 
                title="stray animal"  
                icon={icon}
                // renderTitle={() => (
                //     <View>
                //       <Image style={styles.headerLogo} source={require('./images/marker.png')} />
                //     </View>
                //   )}
                // titleStyle={{
                //     color: '#FA8B70',
                //     fontSize: 22,
                //     fontWeight: '700',
                //     justifyContent: 'center',
                //     alignContent: 'center',
                // }} 
                initial />
                <Scene key="HelpMap" component={HelpMap} title="Helpmap" back />
                <Scene key="HelpStreet" component={HelpStreet} title="HelpStreet" back />
                <Scene key="HelpList" component={HelpList} title="HelpList" back />
                <Scene key="HelpListwrap" component={HelpListwrap} title="HelpListwrap" back />
                <Scene key="ReportForm" component={ReportForm} title="ReportForm" back />
                <Scene key="HelpDetail" component={HelpDetail} title="HelpDetail" back />
                <Scene key="HelpDetailStrettView" component={HelpDetailStrettView} title="HelpDetailStrettView" back />
                <Scene key="HelpEditDetail" component={HelpEditDetail} title="HelpEditDetail" back />
            </Stack>

        </Router>
    );
};



