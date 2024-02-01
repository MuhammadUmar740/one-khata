import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "../ErrorMessage";

function TextField({ name, placeholder, ...otherprops }) {
  const { errors, handleChange, setFieldTouched, touched } = useFormikContext();

  return (
    <>
      <TextInput
        placeholder={placeholder}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherprops}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default TextField;
