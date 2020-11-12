import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useState } from "react";

export const useForm = (initialFValues: any) => {
  const [values, setValues] = useState(initialFValues);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });

  return {
    values,
    setValues,
    onChange,
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
