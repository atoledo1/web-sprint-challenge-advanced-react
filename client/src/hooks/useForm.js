import { useState } from "react";

function useForm(initialValue) {
  console.log(initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [values, handleChanges, showSuccessMessage, handleSubmit];
}

export default useForm;
