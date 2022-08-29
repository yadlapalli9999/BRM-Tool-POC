import authReducer from './features/auth/auth.feature';
import benchReducer from './features/bench/bench.feature';

const rootReducer = {
  auth:authReducer,
  bench: benchReducer
}

export default  rootReducer;