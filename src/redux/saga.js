import { call, put, takeLatest } from 'redux-saga/effects'
import {fetchUserApi} from '../service/api'

function* fetchUser(action) {
  try {
    const user = yield call(fetchUserApi, action.payload.userId)
    yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}


function* mySaga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUser)
}

export default mySaga