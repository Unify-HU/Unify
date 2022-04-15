/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Business } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import BusinessCard from "./BusinessCard";
import { Collection } from "@aws-amplify/ui-react";
export default function BusinessCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Business,
        }).items;
  return (
    <Collection
      type="grid"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={9}
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "BusinessCardCollection")}
    >
      {(item, index) => (
        <BusinessCard
          business={item}
          height="auto"
          width="auto"
          margin="30px 0 0 20px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></BusinessCard>
      )}
    </Collection>
  );
}
