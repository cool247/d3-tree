import React, { useState, useEffect } from "react";
import CentredTree from "react-d3-tree";
import axios from "axios";
import "./app.css";

const orgChart = {
  name: "CEO",
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

export default function OrgChartTree() {
  const [hierarchyData, setHierarchyData] = useState({});

  useEffect(() => {
    getHierarchyData();
  });

  async function getHierarchyData() {
    try {
      const response = await axios.get("API");
      setHierarchyData(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="treeWrapper" style={{ width: "50em", height: "40em" }}>
      <CentredTree data={orgChart} />
    </div>
  );
}
