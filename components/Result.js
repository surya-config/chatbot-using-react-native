import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const Result = props => {
  const {username, phoneNumber, address} = props.steps;

  return (
    <View style={{padding: 10}}>
      <Text style={{color: 'white', fontSize: 18, marginBottom: 5}}>
        Your Data
      </Text>
      <View style={{marginBottom: 5}}>
        <Text style={{color: 'white', width: 70}}>Name :</Text>
        <Text style={{color: 'white'}}>{username?.value}</Text>
      </View>
      <View style={{marginBottom: 5}}>
        <Text style={{color: 'white', width: 70}}>Phone :</Text>
        <Text style={{color: 'white'}}>{phoneNumber?.value}</Text>
      </View>
      <View style={{marginBottom: 5}}>
        <Text style={{color: 'white', width: 70}}>Address :</Text>
        <Text style={{color: 'white'}}>{address?.value}</Text>
      </View>
    </View>
  );
};

export default Result;
