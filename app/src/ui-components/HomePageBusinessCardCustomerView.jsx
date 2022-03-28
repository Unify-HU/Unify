/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Divider,
  Flex,
  Icon,
  Image,
  Rating,
  Text,
  View,
} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function HomePageBusinessCardCustomerView(props) {
  const { business, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="960px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HomePageBusinessCardCustomerView")}
    >
      <Image
        width="320px"
        height="402px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        src={business?.businessPicture}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="24px"
        direction="column"
        width="640px"
        grow="1"
        basis="640px"
        height="402px"
        position="relative"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Text
          fontFamily="Raleway"
          fontSize="24px"
          fontWeight="700"
          color="rgba(44,92,102,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={business?.businessName}
          {...getOverrideProps(overrides, "Business Name")}
        ></Text>
        <Flex
          gap="16px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Ratings")}
        >
          <Rating
            display="flex"
            gap="8px"
            direction="row"
            width="fit-content"
            alignItems="center"
            shrink="0"
            height="36px"
            position="relative"
            padding="0px 0px 0px 0px"
            size="large"
            {...getOverrideProps(overrides, "Rating")}
          ></Rating>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            textDecoration="underline"
            width="19px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="72"
            {...getOverrideProps(overrides, "72")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          position="relative"
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
            children="New"
            {...getOverrideProps(overrides, "Badgerfc")}
          ></Badge>
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
            children="Classic"
            {...getOverrideProps(overrides, "Badgeysk")}
          ></Badge>
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
            children="Modern"
            {...getOverrideProps(overrides, "Badgeaou")}
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
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={business?.description}
          {...getOverrideProps(overrides, "Information about this product.")}
        ></Text>
        <Flex
          gap="16px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Quote")}
        >
          <MyIcon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="chat"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            width="536px"
            grow="1"
            basis="536px"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="“This is a quote.“"
            {...getOverrideProps(overrides, "\u201CThis is a quote.\u201C")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="32px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
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
                width="17.58984375px"
                height="13.40997314453125px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.40997314453125,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(67,168,84,1)",
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
          fontFamily="Lato"
          fontSize="12px"
          fontWeight="700"
          color="rgba(159,155,155,1)"
          lineHeight="12px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="verified by business owner! "
          {...getOverrideProps(overrides, "verified by business owner!")}
        ></Text>
      </Flex>
    </Flex>
  );
}