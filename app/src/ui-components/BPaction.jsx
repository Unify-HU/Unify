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
        bottom="15.126049707806299%"
        left="0%"
        right="0%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
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
        top="93.65079365079364%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        children="Add listing"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <View
        position="absolute"
        top="22.2689083644322%"
        bottom="37.81512275574699%"
        left="26.82926829268293%"
        right="26.82926829268293%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[1]")}
      >
        <Icon
          width="95px"
          height="100.588134765625px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 95, height: 100.588134765625 }}
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
          pathData="M39.5833 0C17.7333 0 0 18.7765 0 41.9118C0 65.0471 17.7333 83.8235 39.5833 83.8235C61.4333 83.8235 79.1667 65.0471 79.1667 41.9118C79.1667 18.7765 61.4333 0 39.5833 0ZM59.375 46.1029L43.5417 46.1029L43.5417 62.8676L35.625 62.8676L35.625 46.1029L19.7917 46.1029L19.7917 37.7206L35.625 37.7206L35.625 20.9559L43.5417 20.9559L43.5417 37.7206L59.375 37.7206L59.375 46.1029Z"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 79.16667175292969,
            height: 83.823486328125,
          }}
          color="rgba(88.18749949336052,88.18749949336052,88.18749949336052,1)"
          position="absolute"
          top="8.33333838985181%"
          bottom="8.333330805074095%"
          left="8.3333336679559%"
          right="8.33332764474969%"
          {...getOverrideProps(overrides, "View.View[1].Icon[1]")}
        ></Icon>
      </View>
    </View>
  );
}
