import { FormProvider } from "./Context/FormContext";
import Router from "./Router";
import "./styles.css";

const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
};

export default App;
