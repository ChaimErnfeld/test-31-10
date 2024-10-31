import React from "react";
import { Mission } from "../../types/index";
import MissionItem from "../MissionItem/MissionItem";

interface MissionListProps {
  missions: Mission[];
  handleDeleteMission: (_id: string | undefined) => void;
  handleUpdateStatus: (_id: string | undefined) => void;
}

const MissionList: React.FC<MissionListProps> = ({ missions, handleDeleteMission, handleUpdateStatus }) => {
  return (
    <div>
      {missions.map((mission) => {
        return (
          <MissionItem
            key={mission._id}
            mission={mission}
            handleDeleteMission={handleDeleteMission}
            handleUpdateStatus={handleUpdateStatus}
          />
        );
      })}
    </div>
  );
};

export default MissionList;
