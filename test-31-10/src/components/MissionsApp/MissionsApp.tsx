import React, { useEffect } from "react";
import MissionForm from "../MissionForm.tsx/MissionForm";
import { getMissions, postMission, deleteMission, updateStatus } from "../../Api.ts";
import { Mission } from "../../types/index.ts";
import MissionList from "../MissionList/MissionList.tsx";
import "./MissionsApp.css";

const MissionsApp = () => {
  const [missions, setMissions] = React.useState<Mission[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    loadMissions();
  }, []);

  const loadMissions = async () => {
    try {
      const missions = await getMissions();
      setMissions(missions);
    } catch (error) {
      setError("failed to load images");
    }
  };

  const addMission = async (mission: Mission) => {
    await postMission(mission);
    loadMissions();
  };

  const handleDeleteMission = async (_id: string | undefined) => {
    await deleteMission(_id);
    loadMissions();
  };

  const handleUpdateStatus = async (_id: string | undefined) => {
    await updateStatus(_id);
    loadMissions();
  };

  return (
    <div className="mainDid">
      <h1>Military Operations Dashboard</h1>
      <MissionForm addMission={addMission} />
      <MissionList
        missions={missions}
        handleDeleteMission={handleDeleteMission}
        handleUpdateStatus={handleUpdateStatus}
      />
    </div>
  );
};

export default MissionsApp;
