/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function UnifyBanner(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      height="59px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(47,46,46,1)"
      {...rest}
      {...getOverrideProps(overrides, "UnifyBanner")}
    >
      <Flex
        gap="2px"
        direction="row"
        width="fit-content"
        height="11px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <View
          width="56px"
          height="55px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Looks")}
        >
          <Icon
            width="56px"
            height="55px"
            viewBox={{ minX: 0, minY: 0, width: 56, height: 55 }}
            paths={[]}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vectornbj")}
          ></Icon>
          <Icon
            width="51.33349609375px"
            height="25.208343505859375px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 51.33349609375,
              height: 25.208343505859375,
            }}
            paths={[
              {
                d: "M25.6667 9.16667C16.66 9.16667 9.33333 16.3625 9.33333 25.2083L14 25.2083C14 18.8833 19.2267 13.75 25.6667 13.75C32.1067 13.75 37.3333 18.8833 37.3333 25.2083L42 25.2083C42 16.3625 34.6733 9.16667 25.6667 9.16667ZM25.6667 0C11.5033 0 0 11.2979 0 25.2083L4.66667 25.2083C4.66667 13.8417 14.0933 4.58333 25.6667 4.58333C37.24 4.58333 46.6667 13.8417 46.6667 25.2083L51.3333 25.2083C51.3333 11.2979 39.83 0 25.6667 0Z",
                fill: "rgba(64,170,191,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="25%"
            bottom="29.17%"
            left="4.17%"
            right="4.17%"
            {...getOverrideProps(overrides, "Vectorjwv")}
          ></Icon>
        </View>
        <Text
          fontFamily="Pacifico"
          fontSize="24px"
          fontWeight="400"
          color="rgba(248,248,248,1)"
          textTransform="capitalize"
          lineHeight="28.125px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Unify"
          {...getOverrideProps(overrides, "Unify")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="1004px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="1004px"
        height="45px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      ></Flex>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="150px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,0)"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(64,170,191,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Add a Business"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Image
        width="45px"
        height="45px"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </Flex>
  );
}
