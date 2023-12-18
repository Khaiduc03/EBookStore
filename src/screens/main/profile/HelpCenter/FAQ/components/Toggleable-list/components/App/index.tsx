import React from 'react';
import {View} from 'react-native';
import ToggleableV1 from '../../../../../../../../../components/customs/ToggleableV1';
import useStyles from './styles';

const Toggleable_App = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={{marginVertical: 9}}>
        <ToggleableV1
          title="Comic Verse what is?"
          content="Comic Verse is a social media-integrated reading application that allows you to engage with a passionate community of comic enthusiasts. You can explore comics from various genres, connect with your favorite authors, and even create and share your own stories. It's the perfect platform to indulge in your love for comics and interact with a like-minded community."
        />
      </View>

      <View style={{marginVertical: 9}}>
        <ToggleableV1
          title="Reading Experience?"
          content="Our app prioritizes creating a smooth reading experience through features like zooming, panel navigation, and a user-friendly interface."
        />
      </View>

      <View style={{marginVertical: 9}}>
        <ToggleableV1
          title="Community Interaction?"
          content="We integrate community interaction to allow readers to share opinions, reviews, and engage in discussions, fostering a vibrant community on Comic Verse."
        />
      </View>

      <View style={{marginVertical: 9}}>
        <ToggleableV1
          title="Personal Library Management?"
          content="Users can easily organize and manage their personal libraries on Comic Verse, ensuring a personalized and organized reading experience."
        />
      </View>
    </View>
  );
};

export default Toggleable_App;
