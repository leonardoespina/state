import { reactive, readonly } from "vue";
let hora;
const initialState = {
  count: 0,
  loader: false,
  temporizador: 0,
  visible: false,
};

const state = reactive({
  ...initialState,
});

/*** Mutuaciones */

const increment = () => {
  state.count++;
};

const decrement = () => {
  if (state.count > 0) {
    state.count--;
  }
};
const reloj = () => {
  hora = setInterval(() => {
    state.temporizador = new Date().toLocaleTimeString();
  }, 1000);
};

const visibleReloj = (visible) => {
  if (visible) {
    reloj();
  } else {
    clearInterval(hora);
  }
};

const loader = (val) => {
  state.loader = val;
};

const reset = () => {
  Object.keys(initialState).forEach((key) => {
    state[key] = initialState[key];
  });
  clearInterval(hora);
};

export default {
  state: readonly(state),
  increment,
  reset,
  loader,
  reloj,
  decrement,
  visibleReloj,
};
