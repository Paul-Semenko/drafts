import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {logIn} from "../../redux/auth/auth-operations"

const LogInForm = validate => {
    const dispatch = useDispatch();    
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const submit = () => {
        console.log({values});
    };
    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };   
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn(values));
        setFormErrors(validate(values));
        setIsSubmitting(true);
        
    };
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submit();
            
        }
     }, [formErrors]);
    return {handleChange, handleSubmit, submit, formErrors, isSubmitting}
};
export default LogInForm;