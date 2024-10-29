
export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const USER_FETCH_SUCCEEDED = 'USER_FETCH_SUCCEEDED';
export const USER_FETCH_FAILED = 'USER_FETCH_FAILED';

export const fetchUserRequest = (userId) => ({
  type: USER_FETCH_REQUESTED,
  payload: { userId },
});

export const fetchUserSuccess = (user) => ({
  type: USER_FETCH_SUCCEEDED,
  user,
});

export const fetchUserFailure = (message) => ({
  type: USER_FETCH_FAILED,
  message,
});
