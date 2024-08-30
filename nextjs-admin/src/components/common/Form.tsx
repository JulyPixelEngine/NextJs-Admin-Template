import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import { Slot } from '@radix-ui/react-slot'
import * as LabelPrimitive from '@radix-ui/react-label'

import React from "react";


type FormItemContextValue = {
    id: string;
};


type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues
    , TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};
const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const Form = FormProvider;

const useFormField = () => {

    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();


    const fieldState = getFieldState(fieldContext.name, formState);

    if (!fieldContext) {
      throw new Error("useFormField should be used within <FormField>");
    }

    const { id } = itemContext;
    return {
      id
    };
}






export {
    useFormField
}