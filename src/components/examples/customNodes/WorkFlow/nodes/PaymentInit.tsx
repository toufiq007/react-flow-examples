import { Handle, NodeProps, Position } from "reactflow";

const PaymentInit = ({ data: { amount } }: NodeProps<{ amount: number }>) => {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #000",
      }}
    >
      <div style={{ background: "lightpink", padding: "1px" }}>
        <p style={{ padding: "0 30px" }}>Payment Initiated</p>
      </div>
      <div style={{ textAlign: "center", padding: "30px", fontSize: "2rem" }}>
        ${amount}
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default PaymentInit;
