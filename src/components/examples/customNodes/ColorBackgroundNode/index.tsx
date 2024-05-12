/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";

import CustomSelectorNode from "./ColorSelectorNodes";
import Buttons from "./Buttons";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { initialEdges } from "./InitialEdges";
import { initialNodes } from "./InitialNodes";

const initialColor = "#000";
// for using custom nodes
const nodeTypes = {
  colorNodes: CustomSelectorNode,
};
const defaultViewPort = { x: 0, y: 0, zoom: 1 };

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initialColor);

  useEffect(() => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id !== "2") {
            return node;
          }

          const color = event.target.value;

          setBgColor(color);

          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        })
      );
    };

    const colorNodes = {
      id: "2",
      type: "colorNodes",
      data: { onChange: onChange, color: initialColor },
      style: { border: "1px solid #777", padding: 10 },
      position: { x: 300, y: 50 },
    };

    const newInitialNodes = [...initialNodes, colorNodes];
    setNodes(newInitialNodes);
    setEdges(initialEdges);
  }, []);

  const onConnect = useCallback((params: any) => {
    setEdges((eds) =>
      addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
    );
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ background: bgColor }}
        nodeTypes={nodeTypes}
        defaultViewport={defaultViewPort}
        fitView
      >
        <Buttons/>
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default CustomNodeFlow;
