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
      <Toggleable
        title="Reading Experience?"
        content="Our app prioritizes creating a smooth reading experience through features like zooming, panel navigation, and a user-friendly interface."
      />
      <Toggleable
        title="Community Interaction?"
        content="We integrate community interaction to allow readers to share opinions, reviews, and engage in discussions, fostering a vibrant community on Comic Verse."
      />
      <Toggleable
        title="Personal Library Management?"
        content="Users can easily organize and manage their personal libraries on Comic Verse, ensuring a personalized and organized reading experience."
      />
    </View>
  );
};

export default Toggleable_App;
