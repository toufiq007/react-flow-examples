import { IconButton } from "@chakra-ui/react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { BezierEdge, EdgeLabelRenderer, EdgeProps } from "reactflow";

const CustomEdges = (props: EdgeProps) => {
  const { sourceX, sourceY, targetX, targetY,sourcePosition,targetPosition } = props;
  return (
    <div>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <IconButton
          aria-label="Delte edge"
          pos="absolute"
          icon={<XCircleIcon />}
          color="red"
          size="small"
        />
      </EdgeLabelRenderer>
    </div>
  );
};

export default CustomEdges;
