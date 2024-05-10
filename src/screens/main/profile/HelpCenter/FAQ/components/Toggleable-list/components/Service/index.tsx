import React from 'react';
import {View} from 'react-native';
import ToggleableV1 from '../../../../../../../../../components/customs/ToggleableV1';
import useStyles from './styles';

const Toggleable_Service = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={{marginVertical: 9}}>
        <ToggleableV1
          title="How to become a VIP member of Comic Verse?"
          content="You can purchase VIP packages in the Become a VIP section to receive all Comic Verse benefits"
        />
      </View>
      <View style={{marginVertical: 9}}>
        <ToggleableV1
          title="Finding Suitable Stories?"
          content="Learn how to search for and select stories that pique your interest. Comic reading apps often feature search functionality and genre categories to assist you in easily discovering stories that align with your preferences."
        />
      </View>
    </View>
  );
};

export default Toggleable_Service;
