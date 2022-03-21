/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function BPaction(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="205px"
      height="252px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="15.13%"
        left="0%"
        right="0%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="93.65%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Add listing"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <View
        position="absolute"
        top="22.27%"
        bottom="37.82%"
        left="26.83%"
        right="26.83%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[1]")}
      >
        <Icon
          width="95px"
          height="100.588134765625px"
          viewBox={{ minX: 0, minY: 0, width: 95, height: 100.588134765625 }}
          paths={[]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "View.View[1].Icon[0]")}
        ></Icon>
        <Icon
          width="79.16667175292969px"
          height="83.823486328125px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 79.16667175292969,
            height: 83.823486328125,
          }}
          paths={[
            {
              d: "M39.5833 0C17.7333 0 0 18.7765 0 41.9118C0 65.0471 17.7333 83.8235 39.5833 83.8235C61.4333 83.8235 79.1667 65.0471 79.1667 41.9118C79.1667 18.7765 61.4333 0 39.5833 0ZM59.375 46.1029L43.5417 46.1029L43.5417 62.8676L35.625 62.8676L35.625 46.1029L19.7917 46.1029L19.7917 37.7206L35.625 37.7206L35.625 20.9559L43.5417 20.9559L43.5417 37.7206L59.375 37.7206L59.375 46.1029Z",
              fill: "rgba(88,88,88,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="8.33%"
          bottom="8.33%"
          left="8.33%"
          right="8.33%"
          {...getOverrideProps(overrides, "View.View[1].Icon[1]")}
        ></Icon>
      </View>
    </View>
  );
}
