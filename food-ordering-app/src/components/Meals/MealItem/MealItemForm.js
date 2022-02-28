import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const input_form_info = {
    id : 'amount',
    type : 'number',
    min : '1',
    max : '5',
    step : '1',
    defaultValue : '1',
  }
  return <form>
    <Input label="Amount" input={input_form_info} />
    <button> + Add </button>
  </form>
};

export default MealItemForm;
