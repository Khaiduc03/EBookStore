import {AirbnbRating} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import useStyles from './styles';

type RatingsComponentProps = {};

const Ratings: React.FunctionComponent<RatingsComponentProps> = () => {
  const styles = useStyles();
  const ratingCompleted = (rating: number) => {
    console.log('Rating is: ' + rating);
  };

  const ratingProps = {};
  return (
    <View style={styles.container}>
      <AirbnbRating
        count={5}
        reviews={['Terrible', 'Bad', 'Meh', 'OK', 'Good']}
        defaultRating={5}
        size={20}
      />
    </View>
  );
};

export default Ratings;
