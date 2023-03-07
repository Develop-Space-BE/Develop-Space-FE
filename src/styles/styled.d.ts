import "styled-components";
import { color } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: typeof color;
  }
}

declare module "*.woff";
