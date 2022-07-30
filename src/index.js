import { store } from "./store";
import { cakeActions } from "./feature/cake/cakeSlice";
import { fetchUsers } from "./feature/user/userSlice";
import { icecreamActions } from "./feature/icecream/icecreamSlice";

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.reStocked(3));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.reStocked(3));

store.dispatch(fetchUsers());

// unsubscribe();