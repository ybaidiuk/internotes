import publicIP from 'react-native-public-ip';

export default class NetworkUtils {
  static async getIp() {
    return await publicIP();
  }
}
