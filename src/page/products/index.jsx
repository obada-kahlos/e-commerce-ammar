import React from "react";
import { ProductTable } from "../../components/table/tabel";
import { DialogCustom } from "../../components/popup/popup";
import { useGetProductsQuery } from "../../data-access/api/Products/products";

export const Products = () => {
  const TABLE_HEAD = [
    "Product id",
    "Product image",
    "Product name",
    "Product description",
    "Product price",
    "Product count",
    "Product status",
    ""
  ];
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const { data } = useGetProductsQuery({});
  console.log({ data });

  return (
    <div>
      <ProductTable
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={data?.data?.Products}
        handleOpenPopup={handleOpen}
      />
      <DialogCustom open={open} handleOpen={handleOpen} />
    </div>
  );
};
