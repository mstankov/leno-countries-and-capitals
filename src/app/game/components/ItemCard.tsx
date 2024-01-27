"use client";

import { Card, CardProps } from "@mui/material";
import { ReadonlyPropsWithChildren } from "src/utils/types";

export type ItemCardProps<T extends string = string> = Omit<
  CardProps,
  "disabled" | "onClick"
> & {
  value: T;
  onClick: (country: T) => void;
  selected?: boolean;
  disabled?: boolean;
};

function ItemCard<T extends string>({
  value,
  onClick,
  selected,
  disabled,
  ...rest
}: ReadonlyPropsWithChildren<ItemCardProps<T>>) {
  const onClickHandler = () => {
    if (disabled) return;

    onClick(value);
  };

  return (
    <Card
      {...rest}
      data-testid={`card-${value}`}
      onClick={onClickHandler}
      sx={{
        p: 3,
        width: 200,
        textAlign: "center",
        backgroundColor: selected
          ? (theme) => theme.palette.warning.main
          : "white",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background-color 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: selected
            ? (theme) => theme.palette.warning.main[200]
            : (theme) => theme.palette.warning.light,
        },
        boxShadow: (theme) => (selected ? theme.shadows[5] : theme.shadows[1]),
        ...rest?.sx,
      }}
    >
      {value}
    </Card>
  );
}

export default ItemCard;
