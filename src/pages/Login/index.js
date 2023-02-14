import React from "react";

import { Text, Input, Img, Button } from "components";

const LoginPage = () => {
  return (
    <>
      <div className="bg-gradient1  flex flex-col font-inter items-center justify-start mx-[auto] py-[79px] w-[100%]">
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1280px] sm:px-[20px] md:px-[40px] px-[50px] py-[10px] w-[100%]">
          <Text
            className="text-left text-white_A700 w-[auto]"
            as="h1"
            variant="h1"
          >
            Email
          </Text>
          <Input
            className="font-semibold p-[0] sm:text-[25px] md:text-[38px] text-[40px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
            wrapClassName="flex w-[100%]"
            type="email"
            name="input"
            placeholder="Inserisci la tua email"
            prefix={
              <Img
                src="images/img_mail.svg"
                className="mr-[34px] my-[auto]"
                alt="mail"
              />
            }
          ></Input>
        </div>
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1280px] mt-[34px] sm:px-[20px] md:px-[40px] px-[50px] py-[10px] w-[100%]">
          <Text
            className="text-left text-white_A700 w-[auto]"
            as="h1"
            variant="h1"
          >
            Password
          </Text>
          <Input
            className="font-semibold p-[0] sm:text-[25px] md:text-[38px] text-[40px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
            wrapClassName="flex w-[100%]"
            type="password"
            name="input One"
            placeholder="Password di almeno 6 caratteri"
            prefix={
              <Img src="images/img_lock.svg" className="mr-[34px]" alt="lock" />
            }
          ></Input>
        </div>
        <Button className="cursor-pointer font-bold max-w-[1180px] mb-[15px] mt-[132px] sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[] sm:pt-[] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white_A700 w-[100%] md:w-[90%] sm:w-[90%]">
          Accedi
        </Button>
      </div>
    </>
  );
};

export default LoginPage;
