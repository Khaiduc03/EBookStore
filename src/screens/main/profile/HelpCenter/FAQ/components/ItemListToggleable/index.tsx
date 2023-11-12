import React from 'react';
import {View} from 'react-native';
import {Toggleable} from '../../../../../../../components';

const ItemListToggleable = () => {
  return (
    <View style={{gap: 20}}>
      <Toggleable
        title="Comic Verse what is?"
        content="Comic Verse is a social media-integrated reading application that allows you to engage with a passionate community of comic enthusiasts. You can explore comics from various genres, connect with your favorite authors, and even create and share your own stories. It's the perfect platform to indulge in your love for comics and interact with a like-minded community."
      />

      <Toggleable
        title="How to become a VIP member of Comic Verse?"
        content="You can purchase VIP packages in the Become a VIP section to receive all Comic Verse benefits"
      />

      <Toggleable
        title="Finding Suitable Stories?"
        content="Learn how to search for and select stories that pique your interest. Comic reading apps often feature search functionality and genre categories to assist you in easily discovering stories that align with your preferences."
      />
      <Toggleable
        title="Security and Privacy?"
        content="Ensure that you understand the privacy and security policies of the application, particularly when creating an account and engaging with the community."
      />
    </View>
  );
};

export default ItemListToggleable;