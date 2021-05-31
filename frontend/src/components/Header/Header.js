import React from "react";
import ContactHeader from "./ContactHeader";
import LogoHeader from "./LogoHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <main>
      <MobileHeader />
      <ContactHeader />
      <LogoHeader />
    </main>
  );
}
