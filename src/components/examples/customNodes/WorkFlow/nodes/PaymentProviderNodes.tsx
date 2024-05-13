import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";
import { useReactFlow } from "reactflow";

const paymentProvider = [
  { code: "St", name: "Stripe" },
  { code: "Gp", name: "Google Pay" },
  { code: "Ap", name: "Apple Pay" },
  { code: "Pp", name: "Paypal" },
  { code: "Am", name: "Amazon Pay" },
];

const PaymentProviderNodes = () => {
  const { setNodes } = useReactFlow();

  const handleProviderClick = ({
    name,
    code,
  }: {
    name: string;
    code: string;
  }) => {
    const location = Math.random() * 500;
    setNodes((nodes) => [
      ...nodes,
      {
        id: `${nodes.length + 1}`,
        type: "paymentProvider",
        data: { name, code },
        position: { x: location, y: location },
      },
    ]);
  };

  return (
    <div
      style={{
        // background: "#ededed",
        padding: "1rem",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDoubleDownIcon />}>
          Add payment Provider
        </MenuButton>
        <MenuList>
          {paymentProvider.map((provider, index) => (
            <MenuItem key={index} onClick={() => handleProviderClick(provider)}>
              {provider.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PaymentProviderNodes;
