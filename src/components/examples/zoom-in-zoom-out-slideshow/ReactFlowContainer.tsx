import React, { useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  Node,
  Edge
} from "reactflow";

import Buttons from "./Buttons";

import "reactflow/dist/style.css";

const initialNodes:Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Node 1" },
    position: { x: 250, y: 5 },
  },
  { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
  { id: "3", data: { label: "Node 3" }, position: { x: 400, y: 100 } },
  { id: "4", data: { label: "Node 4" }, position: { x: 400, y: 200 } },
];

const initialEdges:Edge[] = [
  {
    id: "e1-2",
    label:"click",
    source: "1",
    target: "2",
  },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
];

const ReactFlowContainer = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // onConnect function for coneting edge
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  return (
    <ReactFlowProvider>
      <div style={{ width: "100%", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Buttons />
          <Background/>
          <Controls/>
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default ReactFlowContainer;
