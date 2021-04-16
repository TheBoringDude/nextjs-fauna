import DefaultLayout from '@components/layouts/Default';
import { FormEvent, useRef } from 'react';

const LoginPage = () => {
  const email = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();

  const submitLogin = (e: FormEvent) => {
    e.preventDefault();

    const body = {
      email: email.current.value,
      password: password.current.value
    };

    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <DefaultLayout pageTitle="Login">
      <div className="h-screen flex items-center justify-center">
        <div className="text-center w-1/3">
          <h3>Login</h3>
          <form onSubmit={submitLogin}>
            <div className="flex flex-col w-full my-2">
              <label htmlFor="username" className="text-left">
                Email
              </label>
              <input ref={email} type="email" className="py-2 border" />
            </div>
            <div className="flex flex-col w-full my-2">
              <label htmlFor="username" className="text-left">
                Password
              </label>
              <input ref={password} type="password" className="py-2 border" />
            </div>
            <div className="flex flex-col w-full my-2">
              <input type="submit" className="py-2 border" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default LoginPage;
