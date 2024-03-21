import React, { FunctionComponent } from 'react';
import { Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { styled } from 'nativewind';
import { images } from '../../assets/images';
import OutlineButton from '../components/Button/OutlineButton';


const StyledText = styled(Text);
const StyledView = styled(View);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledImageBackground = styled(ImageBackground);

const Welcome: FunctionComponent = () => {
  const handlePress = () => {
    console.log('Button Pressed');
  }

  return (
    <StyledImageBackground source={images.welcome} className='flex-1' resizeMode='cover'>
      <StyledSafeAreaView className='flex-1'>
        <StyledView className='flex-1 px-4'>
          <StyledText className='text-primary font-bold text-3xl text-center mt-8 mb-4'>Welcome to Task Twist!</StyledText>

          <StyledText className='text-secondary text-center mb-8'>The best way to manage your tasks</StyledText>

          <StyledView className='flex-1 justify-end mb-20'>
            <OutlineButton title='Login' onPress={handlePress} size='2xl' color='primary' />

            <StyledView className='mt-4' />

            <OutlineButton title='Register' onPress={handlePress} size='2xl' color='secondary'/>
          </StyledView>
        </StyledView>
      </StyledSafeAreaView>
    </StyledImageBackground>
  );
};

export default Welcome;
