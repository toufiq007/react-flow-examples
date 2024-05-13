import { Node, Edge } from "reactflow";

export const initialNodes: Node[] = [
  {
    id: "1",
    data: { amount: 10 },
    position: { x: 50, y: 200 },
    type: "paymentInit",
  },
  {
    id: "2",
    data: { currency: "$", country: "United States", countryCode: "US" },
    position: { x: 400, y: 100 },
    type: "paymentCountry",
  },
  {
    id: "3",
    data: { currency: "£", country: "England", countryCode: "GB" },
    position: { x: 400, y: 300 },
    type: "paymentCountry",
  },
  {
    id: "4",
    data: { name: "Google Pay", code: "Gp" },
    position: { x: 800, y: 0 },
    type: "paymentProvider",
  },
  {
    id: "5",
    data: { name: "Stripe", code: "St" },
    position: { x: 800, y: 200 },
    type: "paymentProvider",
  },
  {
    id: "6",
    data: { name: "Apple Pay", code: "Ap" },
    position: { x: 800, y: 400 },
    type: "paymentProvider",
  },
  {
    id: "6",
    data: {},
    position: { x: 400, y: -200 },
    type: "paymentProviderSelect",
  },
];

export const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
  },
];
