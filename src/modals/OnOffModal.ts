import React from "react";

export const OnOffModal = (
  value: boolean,
  dispatch: React.Dispatch<React.SetStateAction<boolean>>
) => {
  dispatch(!value);
};
