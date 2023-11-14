import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import useStyles from './styles';

import Toggleable_Security from '../Toggleable-list/components/Security';
import {
  Toggleable_App,
  Toggleable_Service,
} from '../Toggleable-list/components';
import {SearchCustom} from '../../../../../../../components';

const ItemFAQ: React.FC = () => {
  const styles = useStyles();

  const [isAllSelected, setAllSelected] = useState(true);
  const [isSortSelected, setSortSelected] = useState(false);
  const [isPriceSelected, setPriceSelected] = useState(false);
  const [isRatingSelected, setRatingSelected] = useState(false);

  const [showAllSelected, setShowAllSelected] = useState(true);
  const [showSortSelected, setShowSortSelected] = useState(false);
  const [showPriceSelected, setShowPriceSelected] = useState(false);
  const [showRatingSelected, setShowRatingSelected] = useState(false);

  const handleAllClick = () => {
    if (isAllSelected) {
      setAllSelected(false);
      setShowAllSelected(false);
    } else {
      setAllSelected(true);
      setShowAllSelected(true);
      setShowSortSelected(false);
      setShowPriceSelected(false);
      setShowRatingSelected(false);
    }

    setSortSelected(false);
    setPriceSelected(false);
    setRatingSelected(false);
  };

  const handleSortClick = () => {
    if (isSortSelected) {
      setSortSelected(false);
      setShowSortSelected(false);
    } else {
      setSortSelected(true);
      setShowSortSelected(true);
      setShowAllSelected(false);
      setShowPriceSelected(false);
    }

    setAllSelected(false);
    setPriceSelected(false);
    setRatingSelected(false);
  };

  const handlePriceClick = () => {
    if (isPriceSelected) {
      setPriceSelected(false);
      setShowPriceSelected(false);
    } else {
      setPriceSelected(true);
      setShowPriceSelected(true);
      setShowAllSelected(false);
      setShowSortSelected(false);
      setShowRatingSelected(false);
    }

    setAllSelected(false);
    setSortSelected(false);
    setRatingSelected(false);
  };

  const handleRatingClick = () => {
    if (isRatingSelected) {
      setRatingSelected(false);
      setShowRatingSelected(false);
    } else {
      setRatingSelected(true);
      setShowRatingSelected(true);
      setShowAllSelected(false);
      setShowSortSelected(false);
      setShowPriceSelected(false);
    }

    setAllSelected(false);
    setSortSelected(false);
    setPriceSelected(false);
  };

  return (
    <View style={styles.viewItem}>
      {/* Button */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.scrollViewTitle}>
        <View style={styles.viewRow}>
          <TouchableOpacity
            onPress={handleAllClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isAllSelected
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: isAllSelected
                    ? styles.colorsTextTitleFocus.color
                    : styles.colorsTextTitleBlur.color,
                },
              ]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSortClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isSortSelected
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: isSortSelected
                    ? styles.colorsTextTitleFocus.color
                    : styles.colorsTextTitleBlur.color,
                },
              ]}>
              App
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePriceClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isPriceSelected
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: isPriceSelected
                    ? styles.colorsTextTitleFocus.color
                    : styles.colorsTextTitleBlur.color,
                },
              ]}>
              Secutiry
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleRatingClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isRatingSelected
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: isRatingSelected
                    ? styles.colorsTextTitleFocus.color
                    : styles.colorsTextTitleBlur.color,
                },
              ]}>
              Service
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Item in button */}
      <View style={styles.viewSearch}>
        <SearchCustom />
      </View>
      {/* Item in button */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
        style={styles.scrollViewItem}>
        {showAllSelected ? (
          <View style={styles.viewAll}>
            {/* App Items */}

            <View style={styles.viewText}>
              <Text style={styles.textApp}>App</Text>
            </View>
            <Toggleable_App />

            {/* Secutiry Items */}

            <View style={styles.viewText}>
              <Text style={styles.textApp}>Security</Text>
            </View>
            <Toggleable_Security />

            {/* Service Items */}

            <View style={styles.viewText}>
              <Text style={styles.textApp}>Service</Text>
            </View>
            <Toggleable_Service />
          </View>
        ) : null}

        {/* Item 2 */}
        {showSortSelected ? (
          <View style={styles.viewItem2}>
            <Toggleable_App />
          </View>
        ) : null}

        {/* Show Item 3 */}
        {showPriceSelected ? (
          <View style={styles.viewItem2}>
            <Toggleable_Security />
          </View>
        ) : null}

        {/* Show Item Rating */}
        {showRatingSelected ? (
          <View style={styles.viewItem2}>
            <Toggleable_Service />
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default ItemFAQ;
