import authReducer from "./features/auth/auth.feature";
import benchReducer from "./features/bench/bench.feature";
import pocReducer from "./features/poc/poc.feature";
import dashboardReducer from "./features/dashboard/dashboard.feature";

const rootReducer = {
  auth: authReducer,
  bench: benchReducer,
  poc: pocReducer,
  dashboard: dashboardReducer,
};

export default rootReducer;
