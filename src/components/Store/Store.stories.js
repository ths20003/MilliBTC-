import { Store } from ".";

export default {
  title: "Components/Store",
  component: Store,
  argTypes: {
    vendor: {
      options: ["amazon-light", "google", "apple", "amazon"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    vendor: "amazon-light",
    className: {},
    logoClassName: {},
    logo: "https://c.animaapp.com/z70d6PNe/img/logo-4@2x.png",
    textoClassName: {},
    googlePlayClassName: {},
    googlePlay: "https://c.animaapp.com/z70d6PNe/img/google-play-2.svg",
    getItOnClassName: {},
  },
};
