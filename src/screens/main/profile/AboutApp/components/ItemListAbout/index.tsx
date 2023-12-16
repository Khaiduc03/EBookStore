import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import {Icon} from '@rneui/themed';
import useStyles from './styles';
import {Toggleable} from '../../../../../../components';

const ItemListAbout: React.FC = () => {
  const styles = useStyles();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Toggleable
          title="Vacancies"
          content="Join the Comic Verse team and become a part of our creative journey! Were on the lookout for passionate individuals who share our love for storytelling. Check out our vacancies and bring your unique talents to the world of Comic Verse."
        />
        <Toggleable
          title="Fee"
          content="Explore the world of Comic Verse with our transparent fee structure. Our commitment is to make the joy of reading comics accessible to all. Learn more about our affordable plans and start your adventure without breaking the bank"
        />
        <Toggleable
          title="Developers"
          content="Are you a skilled developer with a passion for comics? Join our team of innovative minds at Comic Verse! Contribute to the evolution of our app and help shape the future of digital storytelling"
        />
        <Toggleable
          title="Partner"
          content="Collaborate with Comic Verse and be a part of an exciting journey in the world of comics. Explore partnership opportunities that align with our mission to make captivating stories accessible to a global audience."
        />
        <Toggleable
          title="Accessibility"
          content="At Comic Verse, we are dedicated to ensuring our platform is accessible to everyone. Discover our commitment to inclusivity and accessibility, making the joy of reading comic masterpieces available to a diverse audience."
        />
        <Toggleable
          title="Evaluate"
          content="Your feedback is invaluable in helping us enhance your Comic Verse experience. Share your thoughts and suggestions with us as we continually strive to improve and bring you the best in comic storytelling"
        />
        <Toggleable
          title="Reviews About Us"
          content="Read what our community is saying about Comic Verse! Explore reviews and testimonials from fellow comic enthusiasts who have embarked on their digital reading adventures with us. Join the chorus of voices celebrating the joy of comics"
        />
        <Toggleable
          title="Follow Us On Social Networks"
          content="Stay connected with the Comic Verse community on social networks! Follow us for the latest updates, behind-the-scenes content, and engage with fellow comic enthusiasts. Join the conversation and be a part of our vibrant social media family"
        />
      </View>
    </ScrollView>
  );
};

export default ItemListAbout;
