import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './Login.scss';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { login } from '../../redux/auth';
import { Redirect } from 'react-router-dom';
import { required } from '../Common/FormValidators/FormValidators';

const RenderField = ({ meta: { touched, error }, input, label, type }) => {
    return (
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
                ((error &&
                    <div className="validation">
                        {error}
                    </div>))}
        </div>
    )
}

const LoginForm = ({ handleSubmit, isLoading, error }) => {
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <Field validate={[required]} type="email" component={RenderField} name="email" label="Email" placeholder="email" />
            </div>
            <div >
                <Field validate={[required]} type="password" component={RenderField} name="password" label="password" placeholder="password" />
            </div>
            {error ?
                <div className="validation">
                    {error}
                </div>
                : <button
                    type="submit"
                    style={{ marginTop: 5 }}
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : "Sign in"}
                </button>
            }
        </form>
    );
};

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

const Login = () => {
    const isAuth = useSelector(state => state.auth.isAuth, shallowEqual);
    const isLoading = useSelector(state => state.auth.isLoading, shallowEqual);
    const dispatch = useDispatch();

    if (isAuth) {
        return <Redirect to="/profile" />
    }

    const handleSubmit = (formData) => {
        dispatch(login(formData.email, formData.password));
    }

    return <div className="login">
        <h2>Login</h2>
        <ReduxLoginForm isLoading={isLoading} onSubmit={handleSubmit} />
    </div>
}

export default Login