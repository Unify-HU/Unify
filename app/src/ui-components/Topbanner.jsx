/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Topbanner(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="309px"
      direction="row"
      height="164px"
      alignItems="flex-start"
      position="relative"
      padding="25px 67px 25px 67px"
      backgroundColor="rgba(47,46,46,1)"
      {...rest}
      {...getOverrideProps(overrides, "Topbanner")}
    >
      <Text
        fontFamily="Pacifico"
        fontSize="72px"
        fontWeight="400"
        color="rgba(205,205,205,1)"
        lineHeight="84.375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="202px"
        height="31.57px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Unify"
        {...getOverrideProps(overrides, "Unify")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="400"
        color="rgba(205,205,205,1)"
        lineHeight="42.1875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="283px"
        height="50px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Buisness Portal"
        {...getOverrideProps(overrides, "Buisness Portal")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="28.125px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        textDecoration="underline"
        width="204px"
        height="34px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Account Settings"
        {...getOverrideProps(overrides, "Account Settings")}
      ></Text>
    </Flex>
  );
}
