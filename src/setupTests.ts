// Jest DOM setup
import "@testing-library/jest-dom";
import React from "react";

// Off framer motin during testing
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ whileInView, ...props }: any) => React.createElement("div", props),
    span: ({ whileInView, ...props }: any) =>
      React.createElement("span", props),
    h1: ({ whileInView, ...props }: any) => React.createElement("h1", props),
  },
}));
