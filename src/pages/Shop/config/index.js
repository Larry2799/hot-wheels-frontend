import advan from "../../../static/advan-rg-2.png";
import miglia from "../../../static/1000-miglia.png";
import schnitzer from "../../../static/ac-schnitzer.png";
import bbsRs from "../../../static/bbs-rs.png";
import sdm from "../../../static/3sdm.png";
import {getRandom} from "../../../utils/randomUtils";

export const availableRadius = [
  "R14",
  "R15",
  "R16",
  "R17",
  "R18",
  "R19",
  "R20",
  "R21",
  "R22",
  "R23",
  "R24",
];


const ets = [
  20,
  21,
  22,
  30,
  38,
  40,
  42,
  45
];

const availableWidth =[
  6,
  6.5,
  7,
  8,
  8.1,
  9,
  10,
  11,
];

const boltPatterns = [
  "4-100",
  "5-120",
  "4-112",
  "4-108",
  "4-120"
]



export const goodsList = [
  {
    id: 1,
    name: "Advan RG2",
    price: 5.52,
    image: advan,
    description: buildDescription()
  },
  {
    id: 2,
    name: "1000 Miglia MM1009",
    price: 1.69,
    image: advan,
    description: buildDescription()
  },
  {
    id: 3,
    name: "BBS RF",
    price: 281.5,
    image: advan,
    description: buildDescription()
  },
  {
    id: 4,
    name: "Koko Kuture SL547",
    price: 111.25,
    image: miglia,
    description: buildDescription()
  },
  {
    id: 5,
    name: "Makstton",
    price: 132.5,
    image: miglia,
    description: buildDescription()
  },
  {
    id: 6,
    name: "Neoz Perfomance",
    price: 141.25,
    image: miglia,
    description: buildDescription()
  },
  {
    id: 7,
    name: "OZ Hartge",
    price: 5.5,
    image: schnitzer,
    description: buildDescription()
  },
  {
    id: 8,
    name: "Quantum44 SFF-2",
    price: 7,
    image: schnitzer,
    description: buildDescription()
  },
  {
    id: 9,
    name: "Vossen VFS-2",
    price: 10,
    image: schnitzer,
    description: buildDescription()
  },
  {
    id: 10,
    name: "Work Emotion CR Kiwami",
    price: 14,
    image: bbsRs,
    description: buildDescription()
  },
  {
    id: 11,
    name: "Work Emotion T5R 2P",
    price: 18,
    image: bbsRs,
    description: buildDescription()
  },
  {
    id: 12,
    name: "Work Emotion T7R",
    price: 22,
    image: bbsRs,
    description: buildDescription()
  },
  {
    id: 13,
    name: "XO Luxury Moscow",
    price: 50,
    image: sdm,
    description: buildDescription()
  },
  {
    id: 14,
    name: "Vossen CVT",
    price: 66,
    image: sdm,
      description: buildDescription()
  },
  {
    id: 15,
    name: "Takuma Racing Momo Revenge Design",
    price: 550,
    image: sdm,
    description: buildDescription()
  },
];



function buildDescription(){
  const radius = getRandom(availableRadius);
  const boltPattern = getRandom(boltPatterns);
  const width = `${getRandom(availableWidth)}j`;
  const et = `ET${getRandom(ets)}`;
  return `${radius} | ${boltPattern} | ${width} | ${et}`;
}