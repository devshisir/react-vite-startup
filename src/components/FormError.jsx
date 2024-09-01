import { useEffect } from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";

export default function FormError(props) {
    const ErrorMessages = { EmptyField: "Fields Cannot Be Left Empty" }

    const [isError, setIsError] = useState(false);
    const [isValued, setIsValued] = useState(false);

    const validate = (dataType) => {
        if (dataType == "array") {
            const allEmpty = props.InputFields.every(field => field === '');
            const allNotEmpty = props.InputFields.every(field => field !== '');

            if (allNotEmpty) {
                setIsError(false);
            }
            else if (allEmpty && isValued) {
                setIsError(true);
            }
            else {
                setIsError(true);
            }
        }
        else if (dataType == "object") {
            const formData = props.FormState;
            const allEmpty = Object.values(formData).every(value => value === '');
            const allNotEmpty = Object.values(formData).every(value => value !== '');

            if (!allNotEmpty && isValued) {
                setIsError(true);
            } else {
                setIsError(false);
            }
            console.log(isValued)
        }
    }

    useEffect(() => {
        if (!props.FormState) {
            if (isValued) {
                validate("array");
            }
        }
        else {
            validate("object");
        }
    }, props.InputFields, props.ButtonState);

    // useEffect(() => {
    //     ValidateForm();
    // }, [props.ButtonState])

    // const ValidateForm = () => {
    //     if (props.ButtonState) {
    //         validate();
    //     }
    // }

    return (
        <>
            {props.ErrorType == 'EmptyField' && isError ?
                [
                    'danger'
                ].map((variant) => (
                    <Alert className="mt-3" key={variant} variant={variant}>
                        {ErrorMessages.EmptyField}
                    </Alert>
                )) : <span>{props.error}</span>}
        </>);
}
export const ValidateForm = () => {
    return (<>Hey</>)
}