import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {ForumType} from '../../../../../../redux/types/forum.type';
import useStyles from './styles';

interface StatusPostProps {
  status: boolean;
  onStatusChange: (status: boolean) => void;
}

const StatusPost: React.FC<StatusPostProps> = ({status, onStatusChange}) => {
  const styles = useStyles();
  const [selectedStatus, setSelectedStatus] = useState(
    status ? 'Public' : 'Private',
  );
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const statusOptions = ['Public', 'Private'];

  // console.log('Status: ', selectedStatus);

  const renderDropdownIcon = () => {
    return (
      <View>
        <View style={styles.iconleft}>
          {selectedStatus === 'Public' ? (
            <Icon
              name="public"
              type="material"
              size={16}
              color={styles.icon.color}
            />
          ) : (
            <Icon
              name="lock-closed"
              type="ionicon"
              size={14.6}
              color={styles.icon.color}
              style={{marginLeft: 6}}
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
        data={statusOptions}
        onSelect={(selectedItem, index) => {
          setSelectedStatus(selectedItem);
          setDropdownOpen(!isDropdownOpen);
          onStatusChange(selectedItem === 'Public');
        }}
        buttonStyle={styles.buttonSelect}
        dropdownStyle={styles.dropdownStyle}
        dropdownOverlayColor="nothing"
        renderDropdownIcon={renderDropdownIcon}
        rowTextStyle={styles.textrowSelect}
        buttonTextStyle={styles.textButtonSelect}
        defaultButtonText={selectedStatus}
        rowStyle={styles.viewbackgroundColor}
        onFocus={() => setDropdownOpen(!isDropdownOpen)}
      />
    </View>
  );
};

export default StatusPost;
