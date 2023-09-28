import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Icon} from '@rneui/themed';
import useStyles from './styles';

type ListItem = {
  key: string;
  title: string;
  onPress: () => void;
};
const data: ListItem[] = [
  {key: 'vacancies', title: 'Vacancies', onPress: () => handleVacanciesPress()},
  {key: 'fee', title: 'Fee', onPress: () => handleFeePress()},
  {
    key: 'developers',
    title: 'Developers',
    onPress: () => handleDevelopersPress(),
  },

  {key: 'partner', title: 'Partner', onPress: () => handlePartnerPress()},
  {
    key: 'accessibility',
    title: 'Accessibility',
    onPress: () => handleAccessibilityPress(),
  },
  {key: 'evaluate', title: 'Evaluate', onPress: () => handleEvaluatePress()},
  {
    key: 'reviewsaboutus',
    title: 'Reviews about us',
    onPress: () => handleReviewsaboutusPress(),
  },
  {
    key: 'visitourwebsite',
    title: 'Visit our website',
    onPress: () => handleVisitourwebsitePress(),
  },
  {
    key: 'followusonsocialnetworks',
    title: 'Follow us on social networks',
    onPress: () => handleFollowusonsocialnetworksPress(),
  },
];

const handleVacanciesPress = () => {
  console.log('Vacancies this here !!');
};

const handleFeePress = () => {
  console.log('Fee this here !!');
};

const handleDevelopersPress = () => {
  console.log('Developers this here !!');
};
const handlePartnerPress = () => {
  console.log('Partner this here !!');
};
const handleAccessibilityPress = () => {
  console.log('Accessibility this here !!');
};
const handleEvaluatePress = () => {
  console.log('Evaluate this here !!');
};
const handleReviewsaboutusPress = () => {
  console.log('Reviews about us this here !!'); 
};
const handleVisitourwebsitePress = () => {
  console.log('Visit our Website this here !!');
};
const handleFollowusonsocialnetworksPress = () => {
  console.log('Follow us on social networks this here !!');
};

const ItemListAbout: React.FC = () => {
  const styles = useStyles();

  const renderItem = ({item}: {item: ListItem}) => (
    <TouchableOpacity style={styles.viewTitle} onPress={item.onPress}>
      <Text style={styles.text}>{item.title}</Text>
      <Icon name={'caret-right'} type="font-awesome" size={30} />
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default ItemListAbout;
