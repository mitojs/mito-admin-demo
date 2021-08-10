const effectKeys = []

export const addEffectKeys = (keys: string) => {
  effectKeys.push(keys)
}

/**
 * 使得异步的dispatch总能返回promise
 * ({ type: 异步, payload: xx }).then(() => 完事)
 * todo useDispatch 如何处理types??
 * */
export default function createPromiseMiddleware() {
  return () => next => action => {
    const { type } = action
    if (effectKeys.indexOf(type) > -1) {
      return new Promise((resolve, reject) => {
        action.payload = {
          __resolve: resolve,
          __reject: reject,
          ...action.payload,
        }
        next(action)
      })
    } else {
      return next(action)
    }
  }
}
