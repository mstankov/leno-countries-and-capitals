import { PropsWithChildren } from "react";

export type ReadonlyPropsWithChildren<T = unknown> = Readonly<
  PropsWithChildren<T>
>;
