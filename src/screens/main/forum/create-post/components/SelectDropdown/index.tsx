import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import useStyles from './styles';
import SelectDropdown from 'react-native-select-dropdown';

const SelectDropDown: React.FC = () => {
  const styles = useStyles();
  const [selectedStatus, setSelectedStatus] = useState('Public');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const status = ['Public', 'Private'];

  const renderDropdownIcon = () => {
    return (
      <View>
        <View style={styles.iconleft}>
          {selectedStatus === 'Public' ? (
            <Icon
              name="public"
              type="material"
              size={20}
              color={styles.icon.color}
            />
          ) : (
            <Icon
              name="lock-closed"
              type="ionicon"
              size={20}
              color={styles.icon.color}
            />
          )}
        </View>

        <Icon
          name={isDropdownOpen ? 'caret-up' : 'caret-down'}
          type="ionicon"
        />
      </View>
    );
  };
  return (
    <View>
      <SelectDropdown
        data={status}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setSelectedStatus(selectedItem);
        }}
        buttonStyle={styles.buttonSelect}
        dropdownStyle={styles.dropdownStyle}
        dropdownOverlayColor="nothing"
        renderDropdownIcon={renderDropdownIcon}
        rowTextStyle={styles.textrowSelect}
        buttonTextStyle={styles.textButtonSelect}
        defaultButtonText={selectedStatus}
      />
    </View>
  );
};

export default SelectDropDown;
