import { useStoreApi, useReactFlow, Panel } from "reactflow";

const Buttons = ({hidden,setHidden}) => {
  const store = useStoreApi();
  const { zoomIn, zoomOut, setCenter } = useReactFlow();
  const handleFocus = () => {
    const { nodeInternals } = store.getState();
    const nodes = Array.from(nodeInternals).map(([, node]) => node);
    if (nodes.length > 0) {
      const node = nodes[0];
      const x = node.position.x + (node.width ?? 0) * 3;
      const y = node.position.y + (node.height ?? 0);

      const zoom = 1.5;
      setCenter(x, y, { zoom, duration: 1000 });
    }
  };
  return (
    <Panel position="top-center" style={{width:"100%"}}>
        <div style={{ background: "#ededed", padding: "20px", textAlign: "center" }}>
      <h2>Control your zoom or focus label</h2>
      <button onClick={zoomIn}>zoom in</button>
      <button onClick={handleFocus}>zoom focus</button>
      <button onClick={zoomOut}>zoom out</button>
      <div>
          <label htmlFor="ishidden">
            isHidden
            <input
              id="ishidden"
              type="checkbox"
              checked={hidden}
              onChange={(event) => setHidden(event.target.checked)}
              className="react-flow__ishidden"
            />
          </label>
        </div>
    </div>
    </Panel>
  );
};

export default Buttons;
