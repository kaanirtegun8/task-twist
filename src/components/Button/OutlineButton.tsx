import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

type Props = {
    onPress: () => void;
    title: string;
    size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    color: 'primary' | 'secondary' | string;
};

const OutlineButton = ({ onPress, title, color }: Props) => {
    const buttonClass: string =  `border border-2 border-${color}-900 bg-${color}-500 p-3 rounded-lg`

    return (
        <StyledTouchableOpacity
            onPress={onPress}
            className={buttonClass}
        >
            <StyledText className={`text-${color} font-bold text-center text-2xl`}>
                {title}
            </StyledText>
        </StyledTouchableOpacity>
    );
};

export default OutlineButton;
