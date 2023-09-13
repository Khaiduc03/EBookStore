import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from '../Search/styles';

import { images } from '../../../assets/images/png';
import { SearchBarComponentProps } from './types';


export const Search: React.FC<SearchBarComponentProps> = props => {
    const [text, setText] = useState('');

    const handleTextChange = (inputText: string) => {
        if (inputText.length <= 250) {
            setText(inputText);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.Search}>
                <View style={styles.view}>
                    <Image source={images.ic_search} />
                    <TextInput style={styles.textInput}
                        placeholder='Search .....'
                        multiline
                        value={text}
                        onChangeText={handleTextChange} />
                </View>
                <TouchableOpacity>
                    <Image source={images.ic_Classify} />
                </TouchableOpacity>
            </View>
        </View>


    )
}

