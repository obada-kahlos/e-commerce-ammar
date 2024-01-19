import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";


export const DialogCustom = ({ open, handleOpen, children }) => {
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>New Product</DialogHeader>
        <DialogBody style={{ overflow: 'auto', maxHeight: '500px' }}>{children}</DialogBody>

      </Dialog>
    </>
  );
};
