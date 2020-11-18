import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useState } from "react";

export const useForm = <T,>(initialFValues: T) => {
  const [values, setValues] = useState<T>(initialFValues);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.checked });

  return {
    values,
    setValues,
    onChange,
    handleCheckbox,
  };
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiFormControl-root": {
        width: "80%",
        margin: theme.spacing(1),
      },
    },
  })
);

interface IFormProps {}

export const Form: React.FunctionComponent<IFormProps> = ({ children }) => {
  const classes = useStyles();
  return <form className={classes.root}>{children}</form>;
};
