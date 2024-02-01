import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ color, title }) {
  const { handleSubmit } = useFormikContext();

  return <Button color={color} onPress={handleSubmit} title={title} />;
}

export default SubmitButton;
