import * as React from "react";
export const Arrow = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 24}
    height={height || 27}
    fill="none"
  >
    <rect
      width={23.221}
      height={5.716}
      fill="#fff"
      rx={2.858}
      transform="matrix(-.84522 -.53442 .61278 -.79025 20.273 17.172)"
    />
    <rect
      width={23.221}
      height={5.715}
      fill="#fff"
      rx={2.858}
      transform="matrix(.84522 -.53442 .61278 .79025 .646 21.838)"
    />
  </svg>
);
