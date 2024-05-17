//import dotenv from 'dotenv'
import {State, Action } from "../types/calcTypes";

const CalculatorReducer = (state:State, action:Action) => {
    //const env = dotenv.config({ path: 'reducer_hw/.env' });
    switch (action.type) {
      case "ADD_INPUT":
        return { ...state, display: state.display + action.payload };
      case  "CLEAR":
        return { ...state, display: "" };
      case "EVALUATE":
        try {
          return { ...state, display: eval(state.display).toString() };
        } catch {
          return { ...state, display: "Error" };
        }
      default:
        return state;
    }
};

export default CalculatorReducer;