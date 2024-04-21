import {Chip} from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-enterprise";
import {AgGridReact} from "ag-grid-react";
import React, {useCallback, useMemo, useRef, useState, useContext} from "react";
import {skillsSection} from "../../portfolio";
import "./Progress.scss";
import "./SoftwareSkill.scss";
import {IconContext} from "react-icons";
import StyleContext from "../../contexts/StyleContext";

function renderCellWithImage(text) {
  let IconElement = null;
  let link = null;
  skillsSection.softwareSkills.forEach(skill => {
    if (skill.stackName === text) {
      IconElement = skill.icon;
      link = skill.link;
    }
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        alignItems: "center",
        fontSize: "20px",
        gap: "20px"
      }}
    >
      <IconContext.Provider
        value={{
          outline: "none",
          borderColor: "#9ecaed",
          boxShadow: "0 0 10px #9ecaed"
        }}
      >
        {IconElement}
      </IconContext.Provider>
      <a href={link} rel="noreferrer" target="_blank">
        {text}
      </a>
    </div>
  );
}

function renderSkillProficiency(proficiency) {
  const progressStyle = {
    width: `${proficiency * 100}%`
  };
  return (
    <div className="meter">
      <span style={progressStyle}></span>
    </div>
  );
}

function OrderStatusChip(stackType) {
  switch (stackType) {
    case "Back-End":
      return (
        <Chip
          label={stackType}
          color="primary"
          variant="outlined"
          size="small"
        />
      );
    case "Front-End":
      return (
        <Chip
          label={stackType}
          color="secondary"
          variant="outlined"
          size="small"
        />
      );
    case "Database":
      return (
        <Chip label={stackType} color="error" variant="outlined" size="small" />
      );
    case "Dev Ops":
      return (
        <Chip
          label={stackType}
          color="warning"
          variant="outlined"
          size="small"
        />
      );
    case "AI":
      return (
        <Chip label={stackType} color="info" variant="outlined" size="small" />
      );
    case "Web3":
      return (
        <Chip
          label={stackType}
          color="success"
          variant="outlined"
          size="small"
        />
      );
    case "Business Intelligence":
      return <Chip label={stackType} color="primary" size="small" />;
    case "IDE":
      return <Chip label={stackType} color="secondary" size="small" />;
    case "Version Control":
      return <Chip label={stackType} color="warning" size="small" />;
    default:
      return (
        <Chip label={stackType} color="error" variant="outlined" size="small" />
      );
  }
}

export default function SoftwareSkill() {
  const gridRef = useRef(null);
  const {isDark} = useContext(StyleContext);

  const containerStyle = useMemo(() => ({width: "100%", height: "500px"}), []);
  const gridStyle = useMemo(() => ({width: "100%", height: "500px"}), []);

  const [rowData, setRowData] = useState([]);

  const [columnDefs] = useState([
    {
      field: "stackType",
      maxWidth: 170,
      cellRenderer: params => {
        return OrderStatusChip(params.value);
      }
    },
    {
      field: "stackName",
      maxWidth: 230,
      cellRenderer: params => {
        return renderCellWithImage(params.value);
      }
    },
    {
      field: "proficiency",
      cellRenderer: params => {
        return renderSkillProficiency(params.value);
      }
    }
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      filter: true
    };
  }, []);

  const onGridReady = useCallback(event => {
    setRowData(
      skillsSection.softwareSkills.sort(function (a, b) {
        return b.proficiency - a.proficiency;
      })
    );
  }, []);

  return (
    <div style={containerStyle}>
      <div className={`ag-theme-quartz${isDark && "-dark"}`} style={gridStyle}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          groupDisplayType={"groupRows"}
          onGridReady={onGridReady}
          suppressCopyRowsToClipboard={true}
          suppressContextMenu={true}
        />
      </div>
    </div>
  );
}
