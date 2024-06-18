import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form my-3">
      <label className="form-check-label">{label} </label>
      <Field className="form-control ml-1" name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default RadioButtons;
