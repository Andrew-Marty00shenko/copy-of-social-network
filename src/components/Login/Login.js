import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './Login.scss';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { login } from '../../redux/auth';
import { Redirect } from 'react-router-dom';

const LoginForm = ({ handleSubmit, isLoading }) => {

    return (
        <form onSubmit={handleSubmit} >
            <div>
                <Field type="email" component="input" name="email" label="Email" placeholder="email" />
            </div>
            <div >
                <Field type="password" component="input" name="password" label="password" placeholder="password" />
            </div>
            <button
                type="submit"
                style={{ marginTop: 5 }}
                disabled={isLoading}
            >
                {isLoading ? "loading..." : "Sign in"}
            </button>
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