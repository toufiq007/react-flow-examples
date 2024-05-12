import { Handle, NodeProps, Position } from "reactflow";

const PAYMENT_PROVIDER_IMAGE_MAP: { [code: string]: string } = {
  St: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
  Ap: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
  Gp: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
  Pp: "https://avatars.githubusercontent.com/u/476675?s=280&v=4",
  Am: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
};

const PaymentProvider = ({
  data: { paymentProvier, code },
}: NodeProps<{ paymentProvier: string; code: string }>) => {
  return (
    <div style={{ width: "200px" }}>
      <div
        style={{
          background: "#ededed",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          padding: "0 20px",
          border: "2px solid #000",
          borderRadius: "20px",
        }}
      >
        <div style={{ width: "20px", height: "20px" }}>
          <img
            width="100%"
            height="100%"
            src={PAYMENT_PROVIDER_IMAGE_MAP[code]}
          />
        </div>
        <p>{paymentProvier}</p>
        <button style={{color:"red"}}>X</button>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default PaymentProvider;
