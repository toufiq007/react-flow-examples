import { useCallback } from "react";
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  Node,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import PaymentInit from "./nodes/PaymentInit";
import { initialEdges, initialNodes } from "./workFlowConstants";
import PaymentCountry from "./nodes/PaymentCountry";
import PaymentProvider from "./nodes/PaymentProvider";
import PaymentProviderNodes from "./nodes/PaymentProviderNodes";
import CustomEdges from "./edges/CustomEdges";

// const initialNodes: Node[] = [
//   {
//     id: "1",
//     data: { label: "node 1" },
//     position: { x: 100, y: 200 },
//   },

//   {
//     id: "2",
//     data: { label: "node 2" },
//     position: { x: 200, y: 300 },
//   },

//   {
//     id: "3",
//     data: { label: "node 3" },
//     position: { x: 300, y: 400 },
//   },
// ];
// const initialEdges: Edge[] = [
//   {
//     id: "e1-2",
//     source: "1",
//     target: "2",
//     animated: true,
//   },
// ];

const nodeTypes = {
  paymentInit: PaymentInit,
  paymentCountry: PaymentCountry,
  paymentProvider: PaymentProvider,
  paymentProviderSelect: PaymentProviderNodes,
};
const edgeTypes = {
  CustomEdgeType: CustomEdges,
};
const WorkFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection: Connection) => {
    const edge = {
      ...connection,
      animated: true,
      id: `${edges.length + 1}`,
      type: "CustomEdgeType",
    };
    setEdges((prevState) => addEdge(edge, prevState));
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%", border: "2px solid #000" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default WorkFlow;
