import React, { useState } from 'react';
import { Text, View } from 'react-native';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <View>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
  );
};

export default Register;