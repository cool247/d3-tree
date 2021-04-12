import React from "react";
import Tree from "react-d3-tree";

//import { useCenteredTree } from "./helper";

const containerStyles = {
  width: "100vw",
  height: "100vh",
};
const orgChartJson = {
  name: "CEO",
  id: "123",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
        role: "admin",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => (
  <g>
    <circle r={15}></circle>
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps}>
      <div style={{ border: "1px solid black", backgroundColor: "#dedede" }}>
        <h3 style={{ textAlign: "center", fontSize: "12px" }}>
          {nodeDatum.name}
        </h3>
        {nodeDatum.children && (
          <button style={{ width: "100%" }} onClick={toggleNode}>
            {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
          </button>
        )}
      </div>
    </foreignObject>
  </g>
);

export default function Chart() {
  //const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 150, y: 150 };
  const foreignObjectProps = { width: "5%", height: "20%", x: -40, y: -30 };
  return (
    <div style={containerStyles}>
      <Tree
        data={orgChartJson}
        translate={{ x: 100, y: 250 }}
        nodeSize={nodeSize}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
        }
      />
    </div>
  );
}
