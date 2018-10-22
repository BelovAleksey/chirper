import { getInitalData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receiveTweets } from '../actions/tweets';
import { setAuthedUser } from '../actions/authedUser';

const AUTHED_ID = 'tylermcginnis';
export function handleInitialData() {
  return dispatch => {
    return getInitalData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(receiveTweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
