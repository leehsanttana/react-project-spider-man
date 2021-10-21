import { useContext, createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(0);
  const [step, setStep] = useState(0);
  const [modal, setModal] = useState(false);

  const value = {
    name,
    setName,
    email,
    setEmail,
    subscribe,
    setSubscribe,
    step,
    setStep,
    modal,
    setModal
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const context = useContext(FormContext);

  return context;
};
