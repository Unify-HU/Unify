/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Divider,
  Flex,
  Image,
  Rating,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function CustomerReview(props) {
  const { user, review, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="473px"
      position="relative"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CustomerReview")}
    >
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
        gap="16px"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Liked")}
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
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Image
          width="80px"
          height="80px"
          shrink="0"
          position="relative"
          borderRadius="64px"
          padding="0px 0px 0px 0px"
          src={user?.profilePic}
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Flex
          gap="8px"
          direction="column"
          width="345px"
          grow="1"
          basis="345px"
          height="80px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame")}
        >
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Framebha")}
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
              {...getOverrideProps(overrides, "Framedjt")}
            >
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
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={user?.firstNam}
                {...getOverrideProps(overrides, "Author")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.01px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Timestamp"
                {...getOverrideProps(overrides, "Timestamp")}
              ></Text>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="175px"
              justifyContent="flex-end"
              alignItems="flex-start"
              grow="1"
              basis="175px"
              height="24px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frameyba")}
            >
              <View
                width="24px"
                height="24px"
                shrink="0"
                overflow="hidden"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "MyIcon")}
              ></View>
            </Flex>
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
            children={review?.comment}
            {...getOverrideProps(
              overrides,
              "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"
            )}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
