import React from "react";
import ModalProvider from "react-modal";

import { Text, Button, Img, Line, Input } from "components";

const OverlayModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[32%]"
        overlayClassName="bg-bluegray_900_b2 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col gap-[21px] items-center justify-center p-[10px] md:px-[20px] rounded-[30px] sm:w-[100%] w-[auto]">
            <Text
              className="font-medium text-bluegray_901 text-center w-[auto]"
              as="h2"
              variant="h2"
            >
              Crea Account
            </Text>
            <Text
              className="font-normal md:max-w-[100%] max-w-[384px] not-italic text-bluegray_400 text-center"
              as="h3"
              variant="h3"
            >
              <span className="text-bluegray_400 text-[16px] font-inter">
                Selezionando accedi confermi di accettare le nostre Condizioni.
                Scopri come elaboriamo i tuoi dati nella nostra{" "}
              </span>
              <a
                href="javascript:"
                className="text-blue_900 text-[16px] font-inter underline"
              >
                Informativa sulla Privacy
              </a>
              <span className="text-bluegray_400 text-[16px] font-inter">
                {" "}
                e{" "}
              </span>
              <a
                href="javascript:"
                className="text-blue_900 text-[16px] font-inter underline"
              >
                Informativa sui Cookie
              </a>
            </Text>
            <div className="flex flex-col font-plusjakartasans items-center justify-start md:w-[100%] w-[86%]">
              <Button
                className="flex items-center justify-center text-center w-[312px]"
                leftIcon={
                  <Img
                    src="images/img_google.svg"
                    className="mr-[10px] text-center"
                    alt="google"
                  />
                }
                shape="RoundedBorder30"
                size="lg"
                variant="FillLightblue200"
              >
                <div className="bg-transparent cursor-pointer font-semibold text-[20px] text-gray_901 text-left tracking-[0.08px]">
                  Continua con Google
                </div>
              </Button>
              <div className="flex flex-row gap-[43px] items-center justify-center mt-[21px] w-[auto]">
                <Line className="bg-indigo_50 h-[1px] w-[24%]" />
                <Text
                  className="text-bluegray_300 text-center tracking-[0.07px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  oppure
                </Text>
                <Line className="bg-indigo_50 h-[1px] w-[24%]" />
              </div>
              <div className="flex flex-col gap-[8px] h-[86px] md:h-[auto] items-start justify-start mt-[21px] w-[321px]">
                <Text
                  className="font-medium text-bluegray_902 text-left tracking-[0.07px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Email
                </Text>
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-bluegray_401 text-bluegray_401 text-left tracking-[0.08px] w-[100%]"
                  wrapClassName="md:h-[auto] sm:h-[auto] w-[321px]"
                  type="email"
                  name="email One"
                  placeholder="Inserisci il tuo indirizzo Email"
                  shape="RoundedBorder24"
                  size="sm"
                  variant="OutlineIndigo50"
                ></Input>
              </div>
              <div className="flex items-center justify-start mt-[21px] py-[2px] w-[100%]">
                <Button
                  className="cursor-pointer font-semibold text-[16px] text-center text-gray_50 tracking-[0.08px] w-[327px]"
                  shape="RoundedBorder24"
                  size="md"
                  variant="FillGray901"
                >
                  Continua con Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default OverlayModal;
