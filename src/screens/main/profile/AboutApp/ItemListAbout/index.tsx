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
  console.log('Xử li');
};

const handleFeePress = () => {
  console.log('Xử li');
};

const handleDevelopersPress = () => {
  console.log('Xử li');
};
const handlePartnerPress = () => {
  console.log('Xử li');
};
const handleAccessibilityPress = () => {
  console.log('Xử li');
};
const handleEvaluatePress = () => {
  console.log('Xử li');
};
const handleReviewsaboutusPress = () => {
  console.log('Xử li');
};
const handleVisitourwebsitePress = () => {
  console.log('Xử li');
};
const handleFollowusonsocialnetworksPress = () => {
  console.log('Xử li');
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
