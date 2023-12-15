import {CheckBox} from '@rneui/themed';
import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import useStyles from '../../styles';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import App from '../../../../../../../App';
import {useFillter} from '../../hook/useFillter.hook';
interface ItemFiltersProps {
  setHightView: Function;
  setLowView: Function;
  setFilterArray: Function;
  setLowRate: Function;
  setHighRate: Function;
}

const ItemFilters: React.FC<ItemFiltersProps> = ({
  setHightView,
  setLowView,
  setFilterArray,
  setHighRate,
  setLowRate,
}) => {
  const styles = useStyles();

  const {
    handleAllClick,
    handleCbGenreItem12Click,
    handleCbGenreItem13Click,
    handleCbGenreItem14Click,
    handleCbGenreItem15Click,
    handleCbGenreItem16Click,
    handleCbGenreItem17Click,
    handleCbGenreItem18Click,
    handleCbGenreItem19Click,
    handleCbGenreItem20Click,
    handleCbGenreItem21Click,
    handleCbGenreItem22Click,
    handleCbSortItem1Click,
    handleCbSortItem3Click,
    handleCbSortItem4Click,
    handleCbSortItem5Click,
    handleCbSortItem6Click,
    handleGenreClick,
    handleSortClick,
    isAllSelected,
    isCbSelected1,
    isCbSelected12,
    isCbSelected13,
    isCbSelected14,
    isCbSelected15,
    isCbSelected16,
    isCbSelected17,
    isCbSelected18,
    isCbSelected19,
    isCbSelected20,
    isCbSelected21,
    isCbSelected22,
    isCbSelected3,
    isCbSelected4,
    isCbSelected5,
    isCbSelected6,
    isGenreSelected,
    isSortSelected,
    showAllSelected,
    showGenreSelected,
    showSortSelected,
    topcis,
  } = useFillter();

  const onPressApply = () => {
    NavigationService.navigate(routes.SEARCH);
    setHightView(isCbSelected1), setLowView(isCbSelected6);
    setFilterArray(topcis);
    setHighRate(isCbSelected3), setLowRate(isCbSelected4);
    console.log(topcis);
  };

  return (
    <View style={styles.viewItem}>
      <View>
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
              Sort
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleGenreClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isGenreSelected
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: isGenreSelected
                    ? styles.colorsTextTitleFocus.color
                    : styles.colorsTextTitleBlur.color,
                },
              ]}>
              Genre
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
        style={styles.scrollViewItem}>
        {showAllSelected ? (
          <View>
            {/* Sort Items */}
            <View style={[styles.viewItemSort, {justifyContent: 'center'}]}>
              <View
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <Text style={styles.textHeaderItem}>Sort</Text>
              </View>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem1Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected1}
                  onPress={handleCbSortItem1Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected1
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Highest Views</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />

              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem3Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected3}
                  onPress={handleCbSortItem3Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected3
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Highest Rating</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem4Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected4}
                  onPress={handleCbSortItem4Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected4
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Lowest Rating</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />

              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem6Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected6}
                  onPress={handleCbSortItem6Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected6
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Lowest Views</Text>
              </TouchableOpacity>
            </View>

            {/* Rating Items */}

            {/* Genre Items */}
            <View style={[styles.viewItemGenre, {justifyContent: 'center'}]}>
              <View
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <Text style={styles.textHeaderItem}>Genre</Text>
              </View>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem12Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected12}
                  onPress={handleCbGenreItem12Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected12
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>All</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem13Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected13}
                  onPress={handleCbGenreItem13Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected13
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>action</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem14Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected14}
                  onPress={handleCbGenreItem14Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected14
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>comedy</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />

              <TouchableOpacity
                onPress={handleCbGenreItem15Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected15}
                  onPress={handleCbGenreItem15Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected15
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>drama</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem16Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected16}
                  onPress={handleCbGenreItem16Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected16
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>fantasy</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem17Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected17}
                  onPress={handleCbGenreItem17Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected17
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>sports</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />

              <TouchableOpacity
                onPress={handleCbGenreItem18Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected18}
                  onPress={handleCbGenreItem18Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected18
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>mystery</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem19Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected19}
                  onPress={handleCbGenreItem19Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected19
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>romance</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem20Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected20}
                  onPress={handleCbGenreItem20Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected20
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>thirller</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />

              <TouchableOpacity
                onPress={handleCbGenreItem21Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected21}
                  onPress={handleCbGenreItem21Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected21
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>school</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem22Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected22}
                  onPress={handleCbGenreItem22Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected22
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>horny</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {showSortSelected ? (
          <View>
            {/* Sort Items */}
            <View style={[styles.viewItemSort, {justifyContent: 'center'}]}>
              <View
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <Text style={styles.textHeaderItem}>Sort</Text>
              </View>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem1Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected1}
                  onPress={handleCbSortItem1Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected1
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Highest Views</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem3Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected3}
                  onPress={handleCbSortItem3Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected3
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Highest Rating</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem4Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected4}
                  onPress={handleCbSortItem4Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected4
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Lowest Rating</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem6Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected6}
                  onPress={handleCbSortItem6Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected6
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Lowest Views</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        {showGenreSelected ? (
          <View>
            {/* Genre Items */}
            <View style={[styles.viewItemGenre, {justifyContent: 'center'}]}>
              <View
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <Text style={styles.textHeaderItem}>Genre</Text>
              </View>
              <View style={styles.viewUnderline} />

              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem13Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected13}
                  onPress={handleCbGenreItem13Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected13
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>action</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem14Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected14}
                  onPress={handleCbGenreItem14Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected14
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>comedy</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />

              <TouchableOpacity
                onPress={handleCbGenreItem15Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected15}
                  onPress={handleCbGenreItem15Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected15
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>drama</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem16Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected16}
                  onPress={handleCbGenreItem16Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected16
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>fantasy</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem17Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected17}
                  onPress={handleCbGenreItem17Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected17
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>sports</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />

              <TouchableOpacity
                onPress={handleCbGenreItem18Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected18}
                  onPress={handleCbGenreItem18Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected18
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>mystery</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem19Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected19}
                  onPress={handleCbGenreItem19Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected19
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>romance</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem20Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected20}
                  onPress={handleCbGenreItem20Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected20
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>thirller</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />

              <TouchableOpacity
                onPress={handleCbGenreItem21Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected21}
                  onPress={handleCbGenreItem21Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected21
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>school</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem22Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected22}
                  onPress={handleCbGenreItem22Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected22
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>horny</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </ScrollView>
      <View style={[styles.viewRow, styles.viewBtn]}>
        <TouchableOpacity style={[styles.btn, styles.backgroundColorBtnReset]}>
          <Text style={styles.textBtnReset}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressApply}
          style={[styles.btn, styles.backgroundColorBtnApply]}>
          <Text style={styles.textBtnApply}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemFilters;
