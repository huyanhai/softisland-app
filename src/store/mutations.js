/*
 * @Description:mution
 * @Author: hyh
 * @since: 2019-08-14 22:27:41
 * @lastTime: 2019-08-14 22:32:55
 * @如果有bug，那肯定不是我的锅
 */
import { CHOOSE_GAME, CHOOSE_REGIN, CHOOSE_SERVER } from './mution-type'
export default {
  [CHOOSE_GAME] (state, games) {
    state.chooseGame['choose_game'] = games
  },
  [CHOOSE_REGIN] (state, games) {
    state.chooseGame['choose_regin'] = games
  },
  [CHOOSE_SERVER] (state, games) {
    state.chooseGame['choose_server'] = games
  }
}
