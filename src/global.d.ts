import { AriaAttributes, DOMAttributes } from "react";

/**
 * Add a new attribute to the HTMLAttributes interface.
 */

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }
}
