import React from "react";

import { Text } from "components";

const Home1Page = () => {
  return (
    <>
      <div className="bg-gradient1  flex flex-col font-inter gap-[19px] items-center justify-start mx-[auto] p-[39px] sm:px-[20px] w-[100%]">
        <div className="bg-bluegray_100 h-[191px] md:px-[20px] sm:px-[20px] rounded-radius95 w-[16%]"></div>
        <Text
          className="mb-[503px] text-left text-white_A700 w-[auto]"
          as="h1"
          variant="h1"
        >
          Alice{" "}
        </Text>
      </div>
    </>
  );
};

export default Home1Page;
