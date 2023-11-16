import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Toggleable} from '../../../../../../../../../components';

const Toggleable_App = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Toggleable
        title="Comic Verse what is?"
        content="Comic Verse is a social media-integrated reading application that allows you to engage with a passionate community of comic enthusiasts. You can explore comics from various genres, connect with your favorite authors, and even create and share your own stories. It's the perfect platform to indulge in your love for comics and interact with a like-minded community."
      />
    </View>
  );
};

export default Toggleable_App;
