import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./LoginForm.css"; 


const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format") 
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters") 
    .required("Password is required"),
});

const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  
  const onSubmit = (data) => {
    console.log("Login Successful:", data);
    alert("Login Successful!");
  };

  return (
    <div className="login-container">
      <h2>Log in</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <input type="text" placeholder="Email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="input-group">
          <input type="password" placeholder="Password" {...register("password")} />
          <p className="error">{errors.password?.message}</p>
        </div>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
