import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  Background,
  Controls,
  MarkerType,
  OnConnect,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  { id: "1", data: { label: "Node 1" }, position: { x: 100, y: 100 } },
  { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 200 } },
];

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    label: "+",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "orange", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

let id = 1;
const getId = () => `${id++}`;

const WorkFlowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [parentNode, setParentNode] = useState(null);
  const [addnode, setAddnode] = useState(false);
  const [addChildeNode, setAddChildeNode] = useState(false);
  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const initialNodeType = {
    id: getId(),
    type: "default",
    position: { x: initialNodes[0].position.x, y: nodes.length * 100 },
    data: { label: "New Node" },
    width: 150,
  };

  const handleNodeClick = () => {};

  const handleEdgeClick = () => {};

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        onEdgeClick={handleEdgeClick}
        onConnect={onConnect}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default WorkFlowBuilder;
