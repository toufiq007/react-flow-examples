/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEventHandler } from "react";
import { useReactFlow, useStoreApi, Panel, Node } from "reactflow";

const Buttons = () => {
  const store = useStoreApi();
  const { zoomIn, zoomOut, setCenter } = useReactFlow();

  const customZoomIn: MouseEventHandler<HTMLButtonElement> = (e: any) => {
    zoomIn();
  };

  const customZoomOut: MouseEventHandler<HTMLButtonElement> = (e: any) => {
    zoomOut();
  };

  const focusOnNode = () => {
    const { nodeInternals } = store.getState();
    const nodes = Array.from(nodeInternals).map(([, node]) => node);

    if (nodes.length > 0) {
      const node: Node = nodes[0];
      const x = node.position.x + (node.width ?? 0) / 2;
      const y = node.position.y + (node.height ?? 0) / 2;

      const zoom = 2;

      setCenter(x, y, { zoom, duration: 1000 });
    }

    console.log(nodes);
  };

  return (
    <Panel
      position="top-left"
      style={{ background: "#ededed", padding: "3rem", borderRadius: "20px" }}
    >
      <div>
        <p>This is the panel by controlling zoomIn,zoomOut or focus</p>
        <div>
          <button onClick={focusOnNode}>Focus</button>
          <button onClick={customZoomIn}>Zoom in</button>
          <button onClick={customZoomOut}>Zoom out</button>
        </div>
      </div>
    </Panel>
  );
};

export default Buttons;
