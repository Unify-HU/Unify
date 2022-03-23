/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { Unify, overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(115,129,132,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="2px"
        direction="row"
        width="fit-content"
        height="45px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Icon
          width="18px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
          paths={[
            {
              d: "M8.37131 2.43587C8.53891 1.7865 9.46109 1.7865 9.62869 2.43588L9.62869 2.43588C9.76636 2.96928 10.4639 3.09968 10.785 2.65203L10.785 2.65203C11.1759 2.10705 12.0358 2.44018 11.9575 3.10625L11.9575 3.10625C11.8932 3.65336 12.4965 4.02695 12.9576 3.72551L12.9576 3.72551C13.519 3.35853 14.2005 3.97979 13.8868 4.5726L13.8868 4.5726C13.6292 5.05954 14.0569 5.62586 14.5957 5.51134L14.5957 5.51134C15.2517 5.37192 15.6628 6.19742 15.1562 6.6369L15.1562 6.6369C14.7401 6.9979 14.9343 7.68046 15.4781 7.76833L15.4781 7.76833C16.1402 7.8753 16.2253 8.79354 15.5941 9.02035L15.5941 9.02035C15.0757 9.20665 15.0102 9.91328 15.4856 10.1917L15.4856 10.1917C16.0643 10.5306 15.8119 11.4176 15.1415 11.401L15.1415 11.401C14.5908 11.3875 14.2745 12.0228 14.6172 12.4541L14.6172 12.4541C15.0344 12.9791 14.4786 13.7151 13.8594 13.4575L13.8594 13.4575C13.3508 13.2459 12.8263 13.724 12.9901 14.25L12.9901 14.25C13.1894 14.8903 12.4054 15.3758 11.921 14.9119L11.921 14.9119C11.5232 14.5309 10.8615 14.7872 10.8241 15.3368L10.8241 15.3368C10.7787 16.0059 9.87224 16.1754 9.58817 15.5679L9.58817 15.5679C9.35483 15.0689 8.64517 15.0689 8.41183 15.5679L8.41183 15.5679C8.12776 16.1754 7.22128 16.0059 7.17586 15.3368L7.17586 15.3368C7.13855 14.7872 6.47681 14.5309 6.07896 14.9119L6.07896 14.9119C5.59461 15.3758 4.81056 14.8903 5.00991 14.25L5.00991 14.25C5.17366 13.724 4.64922 13.2459 4.14059 13.4575L4.14059 13.4575C3.52137 13.7151 2.96564 12.9791 3.38284 12.4541L3.38284 12.4541C3.72555 12.0228 3.40923 11.3875 2.85851 11.401L2.85851 11.401C2.18806 11.4176 1.93569 10.5306 2.51441 10.1917L2.51441 10.1917C2.98978 9.91328 2.9243 9.20665 2.40587 9.02035L2.40587 9.02035C1.77473 8.79354 1.85982 7.8753 2.52188 7.76833L2.52188 7.76833C3.06572 7.68046 3.25993 6.9979 2.8438 6.6369L2.8438 6.6369C2.33722 6.19742 2.74827 5.37192 3.40427 5.51134L3.40427 5.51134C3.94312 5.62586 4.37078 5.05954 4.11317 4.5726L4.11317 4.5726C3.79955 3.97979 4.48105 3.35853 5.04239 3.72551L5.04239 3.72551C5.50348 4.02695 6.10684 3.65336 6.04253 3.10624L6.04253 3.10624C5.96423 2.44018 6.82414 2.10705 7.215 2.65203L7.215 2.65203C7.53606 3.09968 8.23364 2.96928 8.37131 2.43587L8.37131 2.43587Z",
              fill: "rgba(187,166,135,1)",
              fillRule: "nonzero",
            },
          ]}
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Star 1")}
        ></Icon>
        <Text
          fontFamily="Fredoka One"
          fontSize="20px"
          fontWeight="400"
          color="rgba(187,166,135,1)"
          textTransform="capitalize"
          lineHeight="23.4375px"
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
        width="1283px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="1283px"
        height="45px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
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
            width="16px"
            height="19.5px"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 19.5 }}
            paths={[
              {
                d: "M8 19.5C9.1 19.5 10 18.6 10 17.5L6 17.5C6 18.6 6.9 19.5 8 19.5ZM14 13.5L14 8.5C14 5.43 12.37 2.86 9.5 2.18L9.5 1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5L6.5 2.18C3.64 2.86 2 5.42 2 8.5L2 13.5L0 15.5L0 16.5L16 16.5L16 15.5L14 13.5ZM12 14.5L4 14.5L4 8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5L12 14.5Z",
                fill: "rgba(51,51,51,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="10.42%"
            bottom="8.33%"
            left="16.67%"
            right="16.67%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
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
    </Flex>
  );
}
