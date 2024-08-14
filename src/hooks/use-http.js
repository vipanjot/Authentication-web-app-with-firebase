import { useReducer, useCallback } from "react";

function httpReducer(state, action) {
  if (action.type === "SEND") {
    return { data: null, error: null, status: "pending" };
  }
  if (action.type === "SUCCESS") {
    return { data: action.res, error: null, status: "complete" };
  }
  if (action.type === "FAIL") {
    return { data: null, error: action.error.message, status: "complete" };
  }

  return state;
}

function useHttp(requestFunction, startwithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startwithPending ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData, token, userId, quoteId) {
      dispatch({ type: "SEND" });
      try {
        const res = await requestFunction(requestData, token, userId, quoteId);
        // console.log(res);
        dispatch({ type: "SUCCESS", res });
      } catch (error) {
        dispatch({
          type: "FAIL",
          error: error.message || "something went wrong",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
