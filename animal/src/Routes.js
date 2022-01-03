import React from 'react';
import { Router, Stack, Scene, } from 'react-native-router-flux';
import Home from './Home';



const Routes = () => {
    return (
        <Router>

            <Stack key="root" title='列表'>
                <Scene key="Home" component={Home} title="stray animal" initial />
                
            </Stack>

        </Router>
    );
};

export default Routes;