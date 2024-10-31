import React from "react";
import { Mission } from "../../types/index";
import "./MissionItem.css";

interface MissionItemProps {
  mission: Mission;
  handleDeleteMission: (_id: string | undefined) => void;
  handleUpdateStatus: (_id: string | undefined) => void;
}

const MissionItem: React.FC<MissionItemProps> = ({ mission, handleDeleteMission, handleUpdateStatus }) => {
  const changeColor = () => {
    if (mission.status === "Pending") {
      return "red";
    } else if (mission.status === "In Progress") {
      return "yellow";
    } else if (mission.status === "Completed") {
      return "green";
    }
  };
  return (
    <div className="MissionItem" style={{ backgroundColor: changeColor() }}>
      <p>Name: {mission.name}</p>
      <p>Status: {mission.status}</p>
      <p>Priority: {mission.priority}</p>
      <p>Description: {mission.description}</p>
      <button className="deleteBtn" onClick={() => handleDeleteMission(mission._id)}>
        Delete
      </button>
      {mission.status !== "Completed" && (
        <button className="progressBtn" onClick={() => handleUpdateStatus(mission._id)}>
          Progress
        </button>
      )}
    </div>
  );
};

export default MissionItem;
