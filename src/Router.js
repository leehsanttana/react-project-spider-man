import MainSection from "./MainSection";
import "./styles.css";

import { BrowserRouter, Route } from "react-router-dom";
import StepForm1 from "./Components/SubscribeForm/StepForm1";
import StepForm2 from "./Components/SubscribeForm/StepForm2";
import StepForm3 from "./Components/SubscribeForm/StepForm3";

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={MainSection} />
      <Route path="/stepform1" component={StepForm1} />
      <Route path="/stepform2" component={StepForm2} />
      <Route path="/stepform3" component={StepForm3} />
    </BrowserRouter>
  );
};

export default Router;
