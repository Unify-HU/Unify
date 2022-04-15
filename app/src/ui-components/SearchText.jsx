/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function SearchText(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="177px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(47,46,46,0)"
      {...rest}
      {...getOverrideProps(overrides, "SearchText")}
    >
      <View
        width="1440px"
        height="248px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(47,46,46,1)"
        {...getOverrideProps(overrides, "Rectangle 1145")}
      ></View>
      <Icon
        width="18px"
        height="9px"
        viewBox={{ minX: 0, minY: 0, width: 18, height: 9 }}
        paths={[
          {
            d: "M0 0L9 9L18 0L0 0Z",
            fill: "rgba(255,252,249,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="40.11%"
        bottom="54.8%"
        left="49.38%"
        right="49.38%"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,253,252,1)"
        lineHeight="50px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="399px"
        height="71px"
        position="absolute"
        top="0px"
        left="520px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Start your search for Black-owned businesses below"
        {...getOverrideProps(
          overrides,
          "Start your search for Black-owned businesses below"
        )}
      ></Text>
    </View>
  );
}
