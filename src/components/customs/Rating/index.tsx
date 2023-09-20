import React from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { Rating } from '@rneui/themed';
import useStyles from './styles';



const Ratings: React.FunctionComponent<RatingsComponentProps> = () => {
    const ratingCompleted = (rating: number) => {
        console.log('Rating is: ' + rating);
    };
    const styles = useStyles();
    return (
        <Rating
            showRating
            imageSize={40}
            onFinishRating={ratingCompleted}
            style={{ paddingVertical: 10 }}
        />
    );
};



export default Ratings;