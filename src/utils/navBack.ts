import {routes} from '../constants';
import {NavigationService} from '../navigation';

export const backScreen = () => {
  NavigationService.goBack();
};
