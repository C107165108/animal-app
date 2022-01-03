import React from 'react';
import { Router, Stack, Scene, } from 'react-native-router-flux';
import HelpMap from './HelpMap';
import Home from './Home';
import HelpList from './HelpList';
import ReportForm from './ReportForm';
import HelpDetail from './HelpDetail';



const Routes = () => {
    return (
        <Router>
            
            <Stack key="root" title='列表'>
                <Scene key="Home" component={Home} title="stray animal" initial />
                <Scene key="HelpMap" component={HelpMap} title="Helpmap" back />
                <Scene key="HelpList" component={HelpList} title="HelpList" back />
                <Scene key="ReportForm" component={ReportForm} title="ReportForm" back />
                <Scene key="HelpDetail" component={HelpDetail} title="HelpDetail" back />
            </Stack>

        </Router>
    );
};

export default Routes;