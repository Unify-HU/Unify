/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuth,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Business } from "../models";
import { useEffect } from "react";
import {
  Button,
  Flex,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function AddBusiness(props) {
  const { business, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const [descriptionValue, setDescriptionValue] = useStateMutationAction("");
  const [locationValue, setLocationValue] = useStateMutationAction("");
  const [websiteValue, setWebsiteValue] = useStateMutationAction("");
  const [businessNameValue, setBusinessNameValue] = useStateMutationAction("");
  const [imageValue, setImageValue] = useStateMutationAction("");
  const submitOnClick = useDataStoreCreateAction({
    fields: {
      description: descriptionValue,
      location: locationValue,
      website: websiteValue,
      businessName: businessNameValue,
      businessTags: "",
      UserID: authAttributes["email"],
      businessPic: imageValue,
    },
    model: Business,
  });
  useEffect(() => {
    if (
      descriptionValue === "" &&
      business !== undefined &&
      business?.description !== undefined
    )
      setDescriptionValue(business?.description);
  }, [business]);
  useEffect(() => {
    if (
      locationValue === "" &&
      business !== undefined &&
      business?.location !== undefined
    )
      setLocationValue(business?.location);
  }, [business]);
  useEffect(() => {
    if (
      websiteValue === "" &&
      business !== undefined &&
      business?.website !== undefined
    )
      setWebsiteValue(business?.website);
  }, [business]);
  useEffect(() => {
    if (
      businessNameValue === "" &&
      business !== undefined &&
      business?.businessName !== undefined
    )
      setBusinessNameValue(business?.businessName);
  }, [business]);
  useEffect(() => {
    if (
      imageValue === "" &&
      business !== undefined &&
      business?.businessPic !== undefined
    )
      setImageValue(business?.businessPic);
  }, [business]);
  return (
    <Flex
      gap="24px"
      direction="column"
      height="1119px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "AddBusiness")}
    >
      <Flex
        gap="8px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 31")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
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
          children="Add a Business"
          {...getOverrideProps(overrides, "Add a Business")}
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
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="If you know of a minority owned business, and don’t see them on our database, this is where you can add it! Once you add the details, our Unify team will verify your entry and post to our database in 3-5 days. "
          {...getOverrideProps(
            overrides,
            "If you know of a minority owned business, and don\u2019t see them on our database, this is where you can add it! Once you add the details, our Unify team will verify your entry and post to our database in 3-5 days."
          )}
        ></Text>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 24")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(44,92,102,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Contact UNIFY"
          {...getOverrideProps(overrides, "Contact UNIFY")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="/"
          {...getOverrideProps(overrides, "/")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(44,92,102,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Verify a Business"
          {...getOverrideProps(overrides, "Verify a Business")}
        ></Text>
      </Flex>
      <TextField
        display="flex"
        gap="12px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Business Name "
        placeholder="What is the name of the business? "
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={businessNameValue}
        onChange={(event) => {
          setBusinessNameValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "BusinessName")}
      ></TextField>
      <SelectField
        display="flex"
        gap="12px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Business Type "
        placeholder={business?.businessTags}
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "BusinessType")}
      ></SelectField>
      <TextField
        display="flex"
        gap="12px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Business Location"
        placeholder="Where is it?"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={locationValue}
        onChange={(event) => {
          setLocationValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "Location")}
      ></TextField>
      <TextField
        display="flex"
        gap="12px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Business Description"
        placeholder="Tell us more ... "
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={descriptionValue}
        onChange={(event) => {
          setDescriptionValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "Description")}
      ></TextField>
      <TextField
        display="flex"
        gap="12px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Business Website"
        placeholder="Business Website "
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={websiteValue}
        onChange={(event) => {
          setWebsiteValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "Website")}
      ></TextField>
      <TextField
        display="flex"
        gap="12px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Business Image"
        placeholder="Provide a .jpg/.png link to a picture representing your business."
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={imageValue}
        onChange={(event) => {
          setImageValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "Image")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        border="1px SOLID rgba(0,0,0,0)"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(4,125,149,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Submit Entry"
        onClick={() => {
          submitOnClick();
        }}
        {...getOverrideProps(overrides, "Submit")}
      ></Button>
    </Flex>
  );
}
