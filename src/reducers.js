const estadoInicial = {
    value: 0
}

export default function appReducer(state = estadoInicial, action) {
    switch (action.type) {
        case "contador/incrementar":
            return { ...state, value: state.value + 1 };
        case "contador/disminuir":
            return { ...state, value: state.value - 1 };
        default:
            return state;
      }
}