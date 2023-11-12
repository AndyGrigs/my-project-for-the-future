import { Button } from "@/shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { count } from "console";

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1>value: {counterValue} </h1>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </div>
  );
};

export default Counter;
function state(state: unknown): unknown {
  throw new Error("Function not implemented.");
}

function StateSchema(a: unknown, b: unknown): boolean {
  throw new Error("Function not implemented.");
}
