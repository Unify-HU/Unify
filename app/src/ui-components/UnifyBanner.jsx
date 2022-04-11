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
import { Button, Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function UnifyBanner(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(231,231,231,1)"
      {...rest}
      {...getOverrideProps(overrides, "UnifyBanner")}
    >
      <Flex
        gap="2px"
        direction="row"
        width="fit-content"
        height="48px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Icon
          width="46px"
          height="46px"
          viewBox={{ minX: 0, minY: 0, width: 46, height: 46 }}
          paths={[
            {
              d: "M22.0317 3.75158C22.2899 2.75146 23.7101 2.75146 23.9683 3.75159L24.959 7.59028C25.1711 8.4118 26.2454 8.61263 26.7399 7.92318L29.0504 4.70161C29.6524 3.86227 30.9768 4.37533 30.8562 5.40117L30.3934 9.33855C30.2943 10.1812 31.2236 10.7566 31.9337 10.2923L35.252 8.12293C36.1166 7.55773 37.1662 8.51457 36.6831 9.42757L34.8292 12.9319C34.4324 13.6818 35.0911 14.554 35.921 14.3777L39.7989 13.5535C40.8092 13.3388 41.4423 14.6101 40.6621 15.287L37.6674 17.8849C37.0265 18.4409 37.3256 19.4922 38.1632 19.6275L42.077 20.2598C43.0966 20.4246 43.2277 21.8388 42.2556 22.1881L38.5247 23.5288C37.7263 23.8158 37.6254 24.9041 38.3576 25.3328L41.7786 27.3363C42.6699 27.8582 42.2812 29.2243 41.2486 29.1989L37.2854 29.1013C36.4372 29.0804 35.95 30.0588 36.4778 30.7231L38.9441 33.8271C39.5866 34.6358 38.7307 35.7692 37.7771 35.3725L34.1167 33.8498C33.3333 33.5239 32.5256 34.2602 32.7778 35.0703L33.9562 38.8556C34.2633 39.8418 33.0557 40.5895 32.3097 39.8751L29.4466 37.1329C28.8338 36.5461 27.8147 36.9409 27.7572 37.7874L27.4887 41.7428C27.4187 42.7733 26.0226 43.0343 25.5851 42.0986L23.9059 38.5073C23.5465 37.7387 22.4535 37.7387 22.0941 38.5073L20.4149 42.0986C19.9774 43.0343 18.5813 42.7733 18.5113 41.7428L18.2428 37.7874C18.1853 36.9409 17.1662 36.5461 16.5534 37.1329L13.6903 39.8751C12.9443 40.5895 11.7367 39.8418 12.0438 38.8556L13.2222 35.0703C13.4744 34.2602 12.6667 33.5239 11.8834 33.8498L8.22295 35.3725C7.26927 35.7692 6.41336 34.6358 7.05592 33.8271L9.52221 30.7231C10.05 30.0588 9.56283 29.0804 8.71465 29.1013L4.75136 29.1989C3.71877 29.2243 3.3301 27.8582 4.2214 27.3363L7.64243 25.3328C8.37456 24.9041 8.27371 23.8158 7.47526 23.5288L3.74435 22.1881C2.77231 21.8388 2.90336 20.4246 3.92304 20.2598L7.83677 19.6275C8.67435 19.4922 8.97346 18.4409 8.33257 17.8849L5.33793 15.287C4.55771 14.6101 5.19079 13.3388 6.20112 13.5535L10.079 14.3777C10.9089 14.554 11.5676 13.6818 11.1708 12.9319L9.31687 9.42757C8.83385 8.51457 9.88345 7.55773 10.748 8.12293L14.0663 10.2923C14.7764 10.7566 15.7057 10.1812 15.6066 9.33854L15.1438 5.40117C15.0232 4.37533 16.3476 3.86227 16.9496 4.70161L19.2601 7.92319C19.7546 8.61264 20.8289 8.4118 21.041 7.59028L22.0317 3.75158Z",
              fill: "rgba(44,92,102,1)",
              fillRule: "nonzero",
            },
          ]}
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Star 1")}
        ></Icon>
        <Text
          fontFamily="Fredoka One"
          fontSize="40px"
          fontWeight="400"
          color="rgba(187,166,135,1)"
          textTransform="capitalize"
          lineHeight="46.875px"
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
        width="826px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="826px"
        height="45px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      ></Flex>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        height="48px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(0,0,0,0)"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(0,0,0,0.4)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Add a Business"
        onClick={() => {
          buttonOnClick();
        }}
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
