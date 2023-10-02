import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IContactDetails } from "../../contacts/interface";

type Anchor = "right";

interface ContactDrawerProps {
  setState: (
    value: React.SetStateAction<{
      right: boolean;
    }>
  ) => void;
  state: {
    right: boolean;
  };
  data: IContactDetails;
}

export default function DrawerContact({
  setState,
  state,
  data,
}: ContactDrawerProps) {
  return (
    <>
      <Drawer
        className="w-[50px]"
        anchor={"right"}
        open={state?.right}
        onClose={() => {
          setState({
            ...state,
            right: false,
          });
        }}
      >
        {/* add content here */}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, debitis
        exercitationem? Obcaecati officia laborum aliquid?
      </Drawer>
    </>
  );
}
