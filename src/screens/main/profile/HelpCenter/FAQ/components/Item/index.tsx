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
  const [isApp, setApp] = useState(false);
  const [isSecurity, setSecurity] = useState(false);
  const [isService, setService] = useState(false);

  const [showAllSelected, setShowAllSelected] = useState(true);
  const [showApp, setShowApp] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [showService, setShowService] = useState(false);

  const handleAllClick = () => {
    if (isAllSelected) {
      setAllSelected(false);
      setShowAllSelected(false);
    } else {
      setAllSelected(true);
      setShowAllSelected(true);
      setShowApp(false);
      setShowSecurity(false);
      setShowService(false);
    }

    setApp(false);
    setSecurity(false);
    setService(false);
  };

  const handleAppClick = () => {
    if (isApp) {
      setApp(false);
      setShowApp(false);
    } else {
      setApp(true);
      setShowApp(true);
      setShowAllSelected(false);
      setShowSecurity(false);
    }

    setAllSelected(false);
    setSecurity(false);
    setService(false);
  };

  const handleSecurityClick = () => {
    if (isSecurity) {
      setSecurity(false);
      setShowSecurity(false);
    } else {
      setSecurity(true);
      setShowSecurity(true);
      setShowAllSelected(false);
      setShowApp(false);
      setShowService(false);
    }

    setAllSelected(false);
    setApp(false);
    setService(false);
  };

  const handleServiceClick = () => {
    if (isService) {
      setService(false);
      setShowService(false);
    } else {
      setService(true);
      setShowService(true);
      setShowAllSelected(false);
      setShowApp(false);
      setShowSecurity(false);
    }

    setAllSelected(false);
    setApp(false);
    setSecurity(false);
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
            onPress={handleAppClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isApp
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: isApp
                    ? styles.colorsTextTitleFocus.color
                    : styles.colorsTextTitleBlur.color,
                },
              ]}>
              App
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSecurityClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isSecurity
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: isSecurity
                    ? styles.colorsTextTitleFocus.color
                    : styles.colorsTextTitleBlur.color,
                },
              ]}>
              Secutiry
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleServiceClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isService
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: isService
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
        {showApp ? (
          <View style={styles.viewItem2}>
            <Toggleable_App />
          </View>
        ) : null}

        {/* Show Item 3 */}
        {showSecurity ? (
          <View style={styles.viewItem2}>
            <Toggleable_Security />
          </View>
        ) : null}

        {/* Show Item Rating */}
        {showService ? (
          <View style={styles.viewItem2}>
            <Toggleable_Service />
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default ItemFAQ;
