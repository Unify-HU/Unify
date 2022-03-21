/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Explorerow(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="275px"
      height="134px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="23.13%"
        left="0%"
        right="62.55%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <View
        position="absolute"
        top="0%"
        bottom="23.13%"
        left="62.55%"
        right="0%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "View.View[1]")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="82.09%"
        bottom="0%"
        left="2.55%"
        right="64.73%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Restaurants"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="82.09%"
        bottom="0%"
        left="68.73%"
        right="5.82%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Products "
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
    </View>
  );
}
