import { useEffect, useState } from "react";
import ReactFlow, {
  useEdgesState,
  useNodesState,
  Node,
  MiniMap,
  Edge,
  Panel,
  Background,
} from "reactflow";

const initialNodes: Node[] = [
  {
    id: "1",
    data: { label: "Node 1" },
    position: { x: 200, y: 300 },
  },

  {
    id: "2",
    data: { label: "Node 2" },
    position: { x: 200, y: 300 },
  },
];
const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

import "reactflow/dist/style.css";
const UpdateNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodeName, setNodeName] = useState("Node 1");
  const [nodeBgColor, setNodeBgColor] = useState("#ededed");
  const [nodeHidden, setNodeHidden] = useState(false);

  // set node label
  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === "1") {
          node.data = {
            ...node.data,
            label: nodeName,
          };
        }
        return node;
      })
    );
  }, [nodeName, setNodes]);

  // set background
  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === "1") {
          node.style = {
            ...node.style,
            backgroundColor: nodeBgColor,
          };
        }
        return node;
      })
    );
  }, [nodeBgColor, setNodes]);

  // hide node
  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === "1") {
          // when you update a simple type you can just update the value
          node.hidden = nodeHidden;
        }

        return node;
      })
    );
    setEdges((eds) =>
      eds.map((edge) => {
        if (edge.id === "e1-2") {
          edge.hidden = nodeHidden;
        }

        return edge;
      })
    );
  }, [nodeHidden, setNodes, setEdges]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        defaultViewport={defaultViewport}
      >
        <Panel position="top-center">
          <div className="updatenode__controls">
            <label>label:</label>
            <input
              value={nodeName}
              onChange={(evt) => setNodeName(evt.target.value)}
            />

            <label className="updatenode__bglabel">background:</label>
            <input
              value={nodeBgColor}
              onChange={(evt) => setNodeBgColor(evt.target.value)}
            />

            <div className="updatenode__checkboxwrapper">
              <label>hidden:</label>
              <input
                type="checkbox"
                checked={nodeHidden}
                onChange={(evt) => setNodeHidden(evt.target.checked)}
              />
            </div>
          </div>
        </Panel>
        <Background />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default UpdateNodeFlow;
