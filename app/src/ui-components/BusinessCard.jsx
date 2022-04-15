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
import {
  Badge,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function BusinessCard(props) {
  const { business, overrides, ...rest } = props;
  const businessNameOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: business?.website,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="306px"
      height="523px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "BusinessCard")}
    >
      <Image
        width="306px"
        height="239px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src={business?.businessPic}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <View
        width="306px"
        height="284px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(44,92,102,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="342px"
          position="absolute"
          top="32px"
          left="32px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={business?.businessName}
          onClick={() => {
            businessNameOnClick();
          }}
          {...getOverrideProps(overrides, "Business Name")}
        ></Text>
        <Flex
          gap="16px"
          position="absolute"
          top="81px"
          left="32px"
          direction="row"
          alignItems="center"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Tags")}
        >
          <Badge
            display="flex"
            gap="10px"
            direction="column"
            width="fit-content"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            height="24px"
            position="relative"
            borderRadius="99px"
            padding="6px 8px 6px 8px"
            backgroundColor="rgba(239,240,240,1)"
            fontSize="12px"
            lineHeight="12px"
            fontFamily="Inter"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            textAlign="left"
            size="small"
            variation="default"
            children={business?.businessTags}
            {...getOverrideProps(overrides, "Badge")}
          ></Badge>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          width="239px"
          height="105px"
          position="absolute"
          top="114px"
          left="32px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={business?.description}
          {...getOverrideProps(overrides, "Information about this product.")}
        ></Text>
        <Divider
          width="239px"
          height="1px"
          position="absolute"
          top="236px"
          left="32px"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="32px"
          position="absolute"
          top="248px"
          left="43px"
          direction="row"
          alignItems="flex-start"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Features")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Feature")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon")}
            >
              <Icon
                width="17.5899658203125px"
                height="13.40997314453125px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.5899658203125,
                  height: 13.40997314453125,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(64,170,191,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="700"
          color="rgba(159,155,155,1)"
          lineHeight="12px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="254px"
          left="92px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="verified by business owner! "
          {...getOverrideProps(overrides, "verified by business owner!")}
        ></Text>
      </View>
    </Flex>
  );
}
