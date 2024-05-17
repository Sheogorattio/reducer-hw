import { useReducer } from "react";
import CalculatorReducer from "./Reducer";

const initialState = {
    display: ""
  };
  
  const Calculator = () => {
    const [state, dispatch] = useReducer(CalculatorReducer, initialState);
  
    const handleButtonClick = (value:string) => {
      if (value === "=") {
        dispatch({ type: "EVALUATE" });
      } else if (value === "C") {
        dispatch({ type: "CLEAR" });
      } else {
        dispatch({ type: "ADD_INPUT", payload: value });
      }
    };
  
    const buttons = [
      "7", "8", "9", "/",
      "4", "5", "6", "*",
      "1", "2", "3", "-",
      "0", ".", "=", "+",
      "C"
    ];
  
    return (
      <div className="container mt-6">
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  value={state.display}
                  readOnly
                />
                <div className="row">
                  {buttons.map((btn, index) => (
                    <div key={index} className="col-3 mb-2">
                      <button
                        className="btn btn-primary btn-block"
                        onClick={() => handleButtonClick(btn)}
                      >
                        {btn}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Calculator;
  