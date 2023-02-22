import React from "react";

import { Text, Input, Img, Button } from "components";
import * as yup from "yup";
import { postAccountsSignUp } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useForm from "hooks/useForm";

const RegisterPage = () => {
  const [apiData3, setapiData3] = React.useState();
  const formValidationSchema = yup
    .object()
    .shape({
      email: yup
        .string()
        .required("Email is required")
        .email("Please enter valid email"),
      password: yup.string().required("Password is required"),
    });
  const form = useForm(
    { email: "", password: "" },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );
  const navigate = useNavigate();

  function callApi3(data) {
    const req = {
      data: {
        email: data?.email,
        password: data?.password,
        returnSecureToken: "true",
      },
    };

    postAccountsSignUp(req)
      .then((res) => {
        setapiData3(res?.data);

        localStorage.setItem("email", JSON.stringify(res?.data?.email));

        localStorage.setItem("userId", JSON.stringify(res?.data?.localId));

        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Errore in fase di registrazione !");
      });
  }

  return (
    <>
      <div className="bg-gradient1  flex flex-col font-inter sm:gap-[40px] md:gap-[40px] gap-[74px] items-center justify-end mx-[auto] py-[54px] w-[100%]">
        <div className="flex flex-col gap-[10px] h-[446px] md:h-[auto] items-baseline justify-start max-w-[1280px] mt-[87px] sm:px-[20px] px-[313px] md:px-[40px] py-[50px] w-[100%]">
          <div className="flex flex-col gap-[10px] h-[100%] items-start justify-start px-[10px] py-[14px] w-[100%]">
            <Text
              className="font-bold text-left text-white_A700 w-[auto]"
              as="h2"
              variant="h2"
            >
              Email
            </Text>
            <Input
              className="bg-colors border-none font-inter font-medium opacity-op p-[0] sm:text-[26px] md:text-[28px] text-[30px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
              wrapClassName="flex w-[100%]"
              type="email"
              onChange={(e) => {
                form.handleChange("email", e.target.value);
              }}
              errors={form?.errors?.email}
              value={form?.values?.email}
              name="input"
              placeholder="Inserisci la tua email"
              prefix={
                <Img
                  src="images/img_mail.svg"
                  className="my-[auto] mx-[10px]"
                  alt="mail"
                />
              }
              shape="RoundedBorder30"
            ></Input>
          </div>
          <div className="flex flex-col gap-[10px] h-[100%] items-start justify-start px-[10px] py-[14px] w-[100%]">
            <Text
              className="font-bold text-left text-white_A700 w-[auto]"
              as="h2"
              variant="h2"
            >
              Password
            </Text>
            <Input
              className="font-medium p-[0] sm:text-[26px] md:text-[28px] text-[30px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
              wrapClassName="flex w-[100%]"
              type="password"
              onChange={(e) => {
                form.handleChange("password", e.target.value);
              }}
              errors={form?.errors?.password}
              value={form?.values?.password}
              name="input One"
              placeholder="Crea la password di almeno 6 caratteri"
              prefix={
                <Img
                  src="images/img_lock.svg"
                  className="my-[auto] mx-[10px]"
                  alt="lock"
                />
              }
              shape="RoundedBorder30"
              size="lg"
            ></Input>
          </div>
        </div>
        <Button
          className="common-pointer cursor-pointer font-bold max-w-[1180px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white_A700 w-[100%] md:w-[90%]"
          onClick={() => {
            form.handleSubmit(callApi3);
          }}
        >
          Registrati
        </Button>
      </div>
      <ToastContainer />
    </>
  );
};

export default RegisterPage;
