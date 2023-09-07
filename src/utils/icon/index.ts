import {HeaderIcon} from '../../components/customs/HeaderCustom/types';

export const createIcon = ({name, type, color}: HeaderIcon) => ({
  ...(name && {name}),
  ...(type && {type}),
  ...(color && {color}),
});
