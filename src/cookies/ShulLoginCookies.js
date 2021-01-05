import Cookies from 'js-cookie';

export default class ShulLoginCookies {
  static loadState() {
    try {
      const cookieData = Cookies.get('shulLoginState');
      if (cookieData === null) {
        return undefined;
      }
      return JSON.parse(cookieData);
    } catch (err) {
      return undefined;
    }
  }

  static saveState(state) {
    try {
      const serializedState = JSON.stringify(state);
      Cookies.set('shulLoginState', serializedState, { expires: 24 });
    } catch (err) {
      // pass
      console.log(err);
    }
  }
}
