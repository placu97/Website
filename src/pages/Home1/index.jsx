import React from "react";

import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";
import { post, postTxaODg2HA2AbXuNfaGvP } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home1Page = () => {
  const [apiData, setapiData] = React.useState();
  const [apiData1, setapiData1] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi1() {
    const req = {};

    postTxaODg2HA2AbXuNfaGvP(req)
      .then((res) => {
        setapiData1(res?.data);

        localStorage.setItem("profileImage", JSON.stringify(res?.data?.data));
      })
      .catch((err) => {
        console.error(err);
        toast.error("Impossibile recuperare media files");
      });
  }
  function callApi() {
    const req = {
      data: {
        userId: JSON.parse(localStorage.getItem("userId")),
        email: JSON.parse(localStorage.getItem("email")),
      },
    };

    post(req)
      .then((res) => {
        setapiData(res?.data);

        localStorage.setItem("presignedUrl", JSON.stringify(res?.data?.data));

        callApi1();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Impossibile recuperare media files");
      });
  }

  return (
    <>
      <div className="bg-gradient1  flex flex-col font-inter items-center justify-start mx-[auto] p-[39px] sm:px-[20px] w-[100%]">
        <div className="bg-bluegray_100 h-[191px] md:px-[20px] rounded-[95px] w-[16%]"></div>
        <Text
          className="mt-[15px] text-left text-white_A700 w-[auto]"
          as="h1"
          variant="h1"
        >
          Alice{" "}
        </Text>
        <Button
          className="common-pointer cursor-pointer font-bold mb-[337px] mt-[80px] sm:text-[36px] md:text-[38px] text-[40px] text-center text-white_A700 w-[230px]"
          onClick={() => navigate("/overlay")}
          shape="RoundedBorder30"
          size="sm"
          variant="FillRedA700"
        >
          To Overlay
        </Button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home1Page;
