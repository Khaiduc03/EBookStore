import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import useStyles from './styles';
import {
  ItemFiveStar,
  ItemFourStar,
  ItemOneStar,
  ItemThreeStar,
  ItemTwoStar,
} from './components';
import {Icon} from '@rneui/themed';

const ItemRatingStar: React.FC = () => {
  const styles = useStyles();

  const [isAllSelected, setAllSelected] = useState(true);
  const [isFiveStar, setisFiveStar] = useState(false);
  const [isFourStar, setisFourStar] = useState(false);
  const [isThreeStar, setisThreeStar] = useState(false);
  const [isTwoStar, setisTwoStar] = useState(false);
  const [isOneStar, setisOneStar] = useState(false);

  const [showAllSelected, setShowAllSelected] = useState(true);
  const [showFiveStar, setshowFiveStar] = useState(false);
  const [showFourStar, setshowFourStar] = useState(false);
  const [showThreeStar, setshowThreeStar] = useState(false);
  const [showTwoStar, setshowTwoStar] = useState(false);
  const [showOneStar, setshowOneStar] = useState(false);

  const handleAllClick = () => {
    if (isAllSelected) {
      setAllSelected(false);
      setShowAllSelected(false);
    } else {
      setAllSelected(true);
      setShowAllSelected(true);
      setshowFiveStar(false);
      setshowFourStar(false);
      setshowThreeStar(false);
      setshowTwoStar(false);
      setshowOneStar(false);
    }

    setisFiveStar(false);
    setisFourStar(false);
    setisThreeStar(false);
    setisTwoStar(false);
    setisOneStar(false);
  };

  const handleFiveStarClick = () => {
    if (isFiveStar) {
      setisFiveStar(false);
      setshowFiveStar(false);
    } else {
      setisFiveStar(true);
      setshowFiveStar(true);
      setShowAllSelected(false);
      setshowFourStar(false);
      setshowThreeStar(false);
      setshowTwoStar(false);
      setshowOneStar(false);
    }

    setAllSelected(false);
    setisFourStar(false);
    setisThreeStar(false);
    setisTwoStar(false);
    setisOneStar(false);
  };
  const handleFourStarClick = () => {
    if (isFourStar) {
      setisFourStar(false);
      setshowFourStar(false);
    } else {
      setisFourStar(true);
      setshowFourStar(true);
      setShowAllSelected(false);
      setshowFiveStar(false);
      setshowThreeStar(false);
      setshowTwoStar(false);
      setshowOneStar(false);
    }

    setisFiveStar(false);
    setisOneStar(false);
    setisThreeStar(false);
    setisTwoStar(false);
    setAllSelected(false);
  };
  const handleThreeStarClick = () => {
    if (isThreeStar) {
      setisThreeStar(false);
      setshowThreeStar(false);
    } else {
      setisThreeStar(true);
      setshowThreeStar(true);
      setShowAllSelected(false);
      setshowFiveStar(false);
      setshowFourStar(false);
      setshowTwoStar(false);
      setshowOneStar(false);
    }

    setisFiveStar(false);
    setisFourStar(false);
    setisOneStar(false);
    setisTwoStar(false);
    setAllSelected(false);
  };
  const handleTwoStarClick = () => {
    if (isTwoStar) {
      setisTwoStar(false);
      setshowTwoStar(false);
    } else {
      setisTwoStar(true);
      setshowTwoStar(true);
      setShowAllSelected(false);
      setshowFiveStar(false);
      setshowFourStar(false);
      setshowThreeStar(false);
      setshowOneStar(false);
    }

    setisFiveStar(false);
    setisFourStar(false);
    setisThreeStar(false);
    setisOneStar(false);
    setAllSelected(false);
  };
  const handleOneStarClick = () => {
    if (isOneStar) {
      setisOneStar(false);
      setshowOneStar(false);
    } else {
      setisOneStar(true);
      setshowOneStar(true);
      setShowAllSelected(false);
      setshowFiveStar(false);
      setshowFourStar(false);
      setshowThreeStar(false);
      setshowTwoStar(false);
    }

    setisFiveStar(false);
    setisFourStar(false);
    setisThreeStar(false);
    setisTwoStar(false);
    setAllSelected(false);
  };

  return (
    <View style={styles.viewItem}>
      {/* Button */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        nestedScrollEnabled={true}
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
            onPress={handleFiveStarClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isFiveStar
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <View style={styles.btnNextScreen}>
              <Icon
                name={isFiveStar ? 'staro' : 'star'}
                type="antdesign"
                color={isFiveStar ? '#ffffff' : '#F89300'}
              />

              <Text
                style={[
                  styles.textTitle,
                  {
                    color: isFiveStar
                      ? styles.colorsTextTitleFocus.color
                      : styles.colorsTextTitleBlur.color,
                  },
                ]}>
                5
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleFourStarClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isFourStar
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <View style={styles.btnNextScreen}>
              <Icon
                name={isFourStar ? 'staro' : 'star'}
                type="antdesign"
                color={isFourStar ? '#ffffff' : '#F89300'}
              />
              <Text
                style={[
                  styles.textTitle,
                  {
                    color: isFourStar
                      ? styles.colorsTextTitleFocus.color
                      : styles.colorsTextTitleBlur.color,
                  },
                ]}>
                4
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleThreeStarClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isThreeStar
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <View style={styles.btnNextScreen}>
              <Icon
                name={isThreeStar ? 'staro' : 'star'}
                type="antdesign"
                color={isThreeStar ? '#ffffff' : '#F89300'}
              />
              <Text
                style={[
                  styles.textTitle,
                  {
                    color: isThreeStar
                      ? styles.colorsTextTitleFocus.color
                      : styles.colorsTextTitleBlur.color,
                  },
                ]}>
                3
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleTwoStarClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isTwoStar
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <View style={styles.btnNextScreen}>
              <Icon
                name={isTwoStar ? 'staro' : 'star'}
                type="antdesign"
                color={isTwoStar ? '#ffffff' : '#F89300'}
              />
              <Text
                style={[
                  styles.textTitle,
                  {
                    color: isTwoStar
                      ? styles.colorsTextTitleFocus.color
                      : styles.colorsTextTitleBlur.color,
                  },
                ]}>
                2
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleOneStarClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isOneStar
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <View style={styles.btnNextScreen}>
              <Icon
                name={isOneStar ? 'staro' : 'star'}
                type="antdesign"
                color={isOneStar ? '#ffffff' : '#F89300'}
              />
              <Text
                style={[
                  styles.textTitle,
                  {
                    color: isOneStar
                      ? styles.colorsTextTitleFocus.color
                      : styles.colorsTextTitleBlur.color,
                  },
                ]}>
                1
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Item in button */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
        nestedScrollEnabled
        style={styles.scrollViewItem}>
        {showAllSelected ? (
          <View style={styles.viewAll}>
            {/* show all star */}
            <View style={styles.viewText}>
              <Text style={styles.textApp}>5 Star</Text>
            </View>
            <ItemFiveStar />
            <View style={styles.viewText}>
              <Text style={styles.textApp}>4 Star</Text>
            </View>
            <ItemFourStar />
            <View style={styles.viewText}>
              <Text style={styles.textApp}>3 Star</Text>
            </View>
            <ItemThreeStar />
            <View style={styles.viewText}>
              <Text style={styles.textApp}>2 Star</Text>
            </View>
            <ItemTwoStar />
            <View style={styles.viewText}>
              <Text style={styles.textApp}>1 Star</Text>
            </View>
            <ItemOneStar />
          </View>
        ) : null}

        {/* show data star */}
        {showFiveStar ? (
          <View style={styles.viewItem2}>
            <ItemFiveStar />
          </View>
        ) : null}
        {showFourStar ? (
          <View style={styles.viewItem2}>
            <ItemFourStar />
          </View>
        ) : null}
        {showThreeStar ? (
          <View style={styles.viewItem2}>
            <ItemThreeStar />
          </View>
        ) : null}
        {showTwoStar ? (
          <View style={styles.viewItem2}>
            <ItemTwoStar />
          </View>
        ) : null}
        {showOneStar ? (
          <View style={styles.viewItem2}>
            <ItemOneStar />
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default ItemRatingStar;
