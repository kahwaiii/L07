import React from 'react';
import {Text, View} from 'react-native';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3A from "./Exercise3A";
import Exercise3B from "./Exercise3B";
import Exercise3C from "./Exercise3C";
import Exercise3D from "./Exercise3D";
import Exercise3E from "./Exercise3E";
import Exercise4 from "./Exercise4";

const L07App = () => {
    return (
        <View style={{marginTop: 30}}>
            <Text style={{fontSize:30}}>EXERCISE 1</Text>
            <Exercise1 />

            <Text style={{fontSize:30}}>EXERCISE 2</Text>
            <Exercise2 />

            <Text style={{fontSize:30}}>EXERCISE 3A</Text>
            <Exercise3A />

            <Text style={{fontSize:30}}>EXERCISE 3B</Text>
            <Exercise3B />

            <Text style={{fontSize:30}}>EXERCISE 3C</Text>
            <Exercise3C />

            <Text style={{fontSize:30}}>EXERCISE 3D</Text>
            <Exercise3D />
        </View>
    );
};

//export default L07App;
//export default Exercise3B;
//export default Exercise3C;
//export default Exercise3D;
//export default Exercise3E;
export default Exercise4;