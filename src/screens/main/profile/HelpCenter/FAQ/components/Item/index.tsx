import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  Toggleable_App,
  Toggleable_Service,
  Toggleable_Security,
} from '../Toggleable-list/components';
import useStyles from './styles';

const ItemFAQ: React.FC = () => {
  const styles = useStyles();

  const categories = [
    {key: 'all', label: 'All'},
    {key: 'app', label: 'App'},
    {key: 'security', label: 'Security'},
    {key: 'service', label: 'Service'},
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const shouldShowAllItems = selectedCategory === 'all';

  return (
    <View style={styles.viewItem}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        style={styles.scrollViewItem}>
        <View style={styles.viewTitle}>
          <View style={styles.viewRow}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.key}
                onPress={() => handleCategoryClick(category.key)}
                style={[
                  styles.btnTitle,
                  {
                    backgroundColor:
                      selectedCategory === category.key
                        ? styles.backgroundBtnTitleFocus.backgroundColor
                        : styles.backgroundBtnTitleBlur.backgroundColor,
                  },
                ]}>
                <Text
                  style={[
                    styles.textTitle,
                    {
                      color:
                        selectedCategory === category.key
                          ? styles.colorsTextTitleFocus.color
                          : styles.colorsTextTitleBlur.color,
                    },
                  ]}>
                  {category.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {categories.map(category => (
          <View key={category.key}>
            {shouldShowAllItems || selectedCategory === category.key ? (
              <View>
                {category.key === 'app' && <Toggleable_App />}
                {category.key === 'security' && <Toggleable_Security />}
                {category.key === 'service' && <Toggleable_Service />}
              </View>
            ) : null}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ItemFAQ;
