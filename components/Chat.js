import React from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ChatBot from 'react-native-chatbot';
import Result from './Result';
let ScreenHeight = Dimensions.get('window').height;

const config = {
  width: 200,
  height: 500,
  floating: true,
};

const Chat = () => {
  const steps = [
    {
      id: '0',
      message: 'Welcome to Bybrisk!',
      trigger: '1',
    },
    {
      id: '1',
      options: [
        {value: 1, label: 'Place Order', trigger: 'place-order'},
        {value: 2, label: 'Cancel Order', trigger: 'cancel-order'},
        {value: 3, label: 'Schedule', trigger: 'schedule'},
      ],
    },
    {
      id: 'place-order',
      message: 'Your Name?',
      trigger: 'username',
    },
    {
      id: 'cancel-order',
      message: 'Your Name?',
      trigger: 'username',
    },
    {
      id: 'schedule',
      message: 'Your Name?',
      trigger: 'username',
    },
    {
      id: 'username',
      user: true,
      trigger: 'q-phoneNumber',
    },
    {
      id: 'q-phoneNumber',
      message: 'Phone Number?',
      trigger: 'phoneNumber',
    },
    {
      id: 'phoneNumber',
      user: true,
      inputAttributes: {
        keyboardType: 'phone-pad',
      },
      trigger: 'q-address',
    },
    {
      id: 'q-address',
      message: 'Address?',
      trigger: 'address',
    },
    {
      id: 'address',
      user: true,
      trigger: 'end-message',
    },
    {
      id: 'end-message',
      component: <Result />,
      asMessage: true,
      end: true,
    },
  ];

  return (
    <ChatBot
      style={{height: ScreenHeight - 80}}
      steps={steps}
      {...config}
      scrollViewProps
      keyboardVerticalOffset={Platform.OS === 'ios' ? 44 : 20}
    />
  );
};

export default Chat;
