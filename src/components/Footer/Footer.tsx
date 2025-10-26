import { Logo, Column, SocialMedia } from "./components";

function Footer() {
  return (
    <div className="flex flex-col w-full items-center max-w-7xl mx-auto mt-20 mb-10">
      <div className="flex items-start justify-between w-full px-5">
        <Logo></Logo>
        <Column
          title="PRODUCTS"
          links={["Features", "Integrations", "Pricing", "FAQ"]}
        ></Column>
        <Column
          title="PRODUCTS"
          links={["Features", "Integrations", "Pricing", "FAQ"]}
        ></Column>
        <Column
          title="PRODUCTS"
          links={["Features", "Integrations", "Pricing", "FAQ"]}
        ></Column>
        <SocialMedia></SocialMedia>
      </div>
      <div className="bg-gray-400 h-0.5 w-full my-2"></div>
      <div className="text-green-600">@ Copyright 2025</div>
    </div>
  );
}

export default Footer;
