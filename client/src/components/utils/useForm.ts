import React, { useState } from "react";

export const useForm = (initialFValues: any) => {
  const [values, setValues] = useState(initialFValues);

  return {
    values,
    setValues,
  };
};
