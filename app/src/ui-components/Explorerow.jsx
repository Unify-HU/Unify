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
        bottom="23.134328358208954%"
        left="0%"
        right="62.54545454545455%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <View
        position="absolute"
        top="0%"
        bottom="23.134328358208954%"
        left="62.54545454545455%"
        right="0%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
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
        top="82.08955223880598%"
        bottom="0%"
        left="2.5454545454545454%"
        right="64.72727272727272%"
        padding="0px 0px 0px 0px"
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
        top="82.08955223880598%"
        bottom="0%"
        left="68.72727272727272%"
        right="5.818181818181818%"
        padding="0px 0px 0px 0px"
        children="Products "
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
    </View>
  );
}
