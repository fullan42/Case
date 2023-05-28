import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    slug: "home",
    name: "Home",
  },
  {
    slug: "features",
    name: "Features",
  },
  {
    slug: "clients",
    name: "clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Education",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate!",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Security",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate!",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Efficiency",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate!",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Education is the key to success in life, and teachers make a lasting impact in the lives of their students.",
    name: "Hasan Gürel",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money is important but without education, it is difficult to make money and be successful.",
    name: "Huseyin Gürel",
    title: "co-founder",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Galatasaray is a big club, a big brand and a big family.",
    name: "Hasan Şaş",
    title: "Football player",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Together with Us",
    value: "40000+",
  },
  {
    id: "stats-2",
    title: "Global Users",
    value: "150000",
  },
  {
    id: "stats-3",
    title: "Traffic Average(Monthly)",
    value: "250k+",
  },
];



export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
