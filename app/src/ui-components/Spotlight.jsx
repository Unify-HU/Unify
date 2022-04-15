/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, View } from "@aws-amplify/ui-react";
export default function Spotlight(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://www.etsy.com/shop/IgniteYourPeace?ref=simple-shop-header-name&listing_id=665680198",
  });
  return (
    <View
      width="1440px"
      height="573px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Spotlight")}
    >
      <Image
        width="1440px"
        height="623px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src="https://i.etsystatic.com/ishbca/eb3355/3044408282/ishbca_1680x840.3044408282_faz8a9p3.jpg?version=0"
        {...getOverrideProps(overrides, "snif-company 1")}
      ></Image>
      <View
        width="351px"
        height="585px"
        position="absolute"
        top="-12px"
        left="1099px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 322")}
      >
        <View
          width="331px"
          height="575px"
          position="absolute"
          top="10px"
          left="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(47,46,46,0.75)"
          {...getOverrideProps(overrides, "Rectangle 1144")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="40px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="249px"
          height="53px"
          position="absolute"
          top="99px"
          left="51px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Ignite Your Peace"
          {...getOverrideProps(overrides, "Company Name")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="40px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="236px"
          position="absolute"
          top="197px"
          left="51px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="The essence of your soul in a candle @igniteyourpeace"
          {...getOverrideProps(
            overrides,
            "Fill your space with high-quality, amazing smells. Our Candle Bundle Kit features 3 unique scents that range from light and airy to cozy and comforting."
          )}
        ></Text>
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="482px"
          left="108px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(0,0,0,0)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(64,170,191,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Visit Website"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="40px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="162px"
          height="30px"
          position="absolute"
          top="45px"
          left="51px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Featured Today"
          {...getOverrideProps(overrides, "Featured Today")}
        ></Text>
      </View>
    </View>
  );
}
