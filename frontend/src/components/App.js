import React, { Fragment } from "react";
import { GlobalStyles } from "./UI/globalStyles";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import { slideIn } from "./UI/animations";
import styled from "styled-components";

const Hello = styled.div`
  animation: ${slideIn} var(--animation-duration)
    var(--animation-timing-function);
`;

export default function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <main>
        <Header />
        <Hello>
          <h1>Hello world</h1>
        </Hello>
        <Footer />
      </main>
    </Fragment>
  );
}
