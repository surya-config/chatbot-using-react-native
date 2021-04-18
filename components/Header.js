import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
let ScreenWidth = Dimensions.get('window').width;

function Header() {
  return (
    <View
      style={{
        width: ScreenWidth,
        backgroundColor: '#006077',
        height: 80,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 60,
            backgroundColor: '#d3d3d3',
          }}
        />
        <Text style={{fontSize: 16, color: '#fff', marginLeft: 15}}>
          Aquae Blue Water Supplier
        </Text>
      </View>
    </View>
  );
}

export default Header;
