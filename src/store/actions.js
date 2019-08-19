/*
 * @Description:
 * @Author: hyh
 * @since: 2019-08-14 22:34:01
 * @lastTime: 2019-08-14 23:11:27
 * @如果有bug，那肯定不是我的锅
 */
import * as Type from './mution-type'
export default {
  CHOOSE_GAME: (context, state) => {
    context.commit(Type.CHOOSE_GAME, state)
  },
  CHOOSE_REGIN: (context, state) => {
    context.commit(Type.CHOOSE_REGIN, state)
  },
  CHOOSE_SERVER: (context, state) => {
    context.commit(Type.CHOOSE_SERVER, state)
  }
}
