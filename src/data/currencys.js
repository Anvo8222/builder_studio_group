import { SiAircanada } from "react-icons/si";
import { GiShamblingZombie } from "react-icons/gi";
import { AiOutlineEuroCircle, AiOutlinePoundCircle } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { FaLifeRing } from "react-icons/fa";
import { BsCurrencyYen } from "react-icons/bs";
import { IoLogoUsd } from "react-icons/io";

const currencys = [
  {
    id: 8,
    name: "USD",
    shortName: "USD",
    icon: IoLogoUsd,
    value: 1,
  },
  {
    id: 1,
    name: "Canadian Dollar",
    shortName: "CAN",
    icon: SiAircanada,
    value: 1.258,
  },
  {
    id: 2,
    name: "Dirham",
    shortName: "AED",
    icon: GiShamblingZombie,
    value: 9.851,
  },
  {
    id: 3,
    name: "Euro",
    shortName: "EUR",
    icon: AiOutlineEuroCircle,
    value: 0.9267,
  },
  {
    id: 4,
    name: "BiRupee",
    shortName: "BRU",
    icon: BiRupee,
    value: 76.32,
  },
  {
    id: 5,
    name: "Pounds",
    shortName: "POD",
    icon: AiOutlinePoundCircle,
    value: 0.77,
  },
  {
    id: 6,
    shortName: "RGT",
    name: "Ringgit",
    icon: FaLifeRing,
    value: 4.25,
  },
  {
    id: 7,
    name: "Yen",
    shortName: "YEN",
    icon: BsCurrencyYen,
    value: 128.11,
  },
];
export default currencys;
