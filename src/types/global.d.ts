// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RootStackParamList } from '../util/navigatorTypes';

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}
