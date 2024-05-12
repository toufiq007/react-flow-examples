import { Handle, NodeProps, Position } from "reactflow";
import ReactCountryFlag from "react-country-flag";

const PaymentCountry = ({
  data: { currency, country, countryCode },
}: NodeProps<{ country: string; countryCode: string; currency: string }>) => {
  return (
    <div>
      <div
        style={{
          background: "#ededed",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          padding: "0 10px",
          borderRadius: "10px",
          border: "2px solid #000",
          width: "200px",
        }}
      >
        <ReactCountryFlag
          countryCode={countryCode}
          style={{ fontSize: "30px" }}
        />
        <div>
          <p style={{ fontSize: "1rem" }}>{country}</p>
          <p>{currency}</p>
        </div>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default PaymentCountry;
