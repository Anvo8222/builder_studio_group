const costs = [
  {
    id: 1,
    name: "Less than $7,000",
    cost: {
      minCost: 0,
      maxCost: 6999,
    },
  },
  {
    id: 2,
    name: "$7,000 to $17,000",
    cost: {
      minCost: 7000,
      maxCost: 17000,
    },
  },
  {
    id: 3,
    name: "$17,000 to $27,000",
    cost: {
      minCost: 17000,
      maxCost: 27000,
    },
  },
  {
    id: 4,
    name: "$27,000+",
    cost: {
      minCost: 27001,
      maxCost: 100000000,
    },
  },
];

export default costs;
