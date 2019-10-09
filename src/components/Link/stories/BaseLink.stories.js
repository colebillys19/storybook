import React from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";

import BaseLink from "../BaseLink";

const linkContent = "Link Content";
const linkPath = "linkPath";

storiesOf("Links|BaseLink", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <BaseLink path={linkPath} label={linkContent} replace={true}  />
  ))
