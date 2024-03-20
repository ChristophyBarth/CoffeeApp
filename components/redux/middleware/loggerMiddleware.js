const loggerMiddleware = store => next => action => {

  // Log the state before the action is dispatched
  console.log('State before action:', JSON.stringify(store.getState()));
  const prevListSize = store.getState().favReducer.favItems.length;
  console.log('List size before action:', prevListSize);

  // Dispatch the action
  const result = next(action);

  // Log the state after the action is dispatched
  console.log('State after action:', JSON.stringify(store.getState()));
  const nextListSize = store.getState().favReducer.favItems.length;
  console.log('List size after action:', nextListSize);

  return result;
};

export default loggerMiddleware;
