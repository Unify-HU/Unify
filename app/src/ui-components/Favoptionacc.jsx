/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Favoptionacc(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="348px"
      height="225px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="700"
        color="rgba(34,34,34,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="0%"
        bottom="89.33%"
        left="0%"
        right="43.68%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Your Favorites "
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="25.78%"
        bottom="18.67%"
        left="0.86%"
        right="0%"
        {...getOverrideProps(overrides, "View.View[0]")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="3.2%"
          left="70.14%"
          right="0%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(196,196,196,1)"
          {...getOverrideProps(overrides, "View.View[0].View[0]")}
        ></View>
        <Image
          position="absolute"
          top="0%"
          bottom="0%"
          height="100%"
          left="70.14%"
          right="0%"
          width="29.86%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "View.View[0].Image[0]")}
        ></Image>
        <View
          position="absolute"
          top="0%"
          bottom="3.2%"
          left="35.07%"
          right="35.07%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(196,196,196,1)"
          {...getOverrideProps(overrides, "View.View[0].View[1]")}
        ></View>
        <Image
          position="absolute"
          top="0%"
          bottom="3.2%"
          height="96.8%"
          left="34.78%"
          right="35.07%"
          width="30.14%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "View.View[0].Image[1]")}
        ></Image>
        <View
          position="absolute"
          top="0%"
          bottom="3.2%"
          left="0%"
          right="70.14%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(196,196,196,1)"
          {...getOverrideProps(overrides, "View.View[0].View[2]")}
        ></View>
        <Image
          position="absolute"
          top="0%"
          bottom="3.2%"
          height="96.8%"
          left="0%"
          right="70.14%"
          width="29.86%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "View.View[0].Image[2]")}
        ></Image>
      </View>
      <Text
        fontFamily="Roboto"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="16.40625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        textDecoration="underline"
        position="absolute"
        top="92%"
        bottom="0%"
        left="80.17%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="See all"
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
    </View>
  );
}
