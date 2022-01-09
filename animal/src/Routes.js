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

// const icon = () => (
//     <Image source={require('./images/cat1.jpeg')} style={{withe:20,height:20,}}/>
// )

function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('./images/cat1.jpeg')}
      />
    );
  }

export default function Routes  () {

    return (
        <Router navigationBarStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', opacity:50, height: 70,   elevation: 0, }} >

            <Stack key="root" title='列表'  >
                <Scene key="Home" component={Home} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
                title="stray animal"  
                // icon={icon}
                // renderTitle={() => (
                //     <View>
                //       <Image style={styles.headerLogo} source={require('./images/marker.png')} />
                //     </View>
                //   )}
                titleStyle={{
                    color: 'black',
                    fontSize: 22,
                    fontWeight: '700',
                    justifyContent: 'center',
                    marginTop:16,
                    marginBottom:8,
                  
                
            
                   
                }} 
                initial />
                <Scene key="HelpMap" component={HelpMap} title="Helpmap" back />
                <Scene key="HelpStreet" component={HelpStreet} title="HelpStreet" back />
                <Scene key="HelpList" component={HelpList} title="HelpList" back />
                <Scene key="HelpListwrap" component={HelpListwrap} title="HelpListwrap" back />
                <Scene key="ReportForm" component={ReportForm} title="ReportForm" back />
                <Scene key="HelpDetail" component={HelpDetail} title="HelpDetail" back />
                <Scene key="HelpDetailStrettView" component={HelpDetailStrettView} title="查看街景" back />
                <Scene key="HelpEditDetail" component={HelpEditDetail} title="編輯" back />
            </Stack>

        </Router>
    );
};



