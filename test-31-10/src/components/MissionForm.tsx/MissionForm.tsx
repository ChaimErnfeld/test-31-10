import React, { useState } from "react";
import { Mission } from "../../types";
import "./MissionForm.css";

interface MissionFormProps {
  addMission: (mission: Mission) => void;
}

const MissionForm: React.FC<MissionFormProps> = ({ addMission }) => {
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !status || !priority || !description) {
      return;
    }

    addMission({ name: name, status: status, priority: priority, description: description });

    setName("");
    setStatus("");
    setPriority("");
    setDescription("");
  };

  return (
    <div className="MissionForm">
      <form onSubmit={handleForm}>
        <div>
          <input
            className="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <select name="Status" id="" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="" disabled>
              select tour choice
            </option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          <select name="priority" id="" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="" disabled>
              select tour choice
            </option>

            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <input
            className="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button>Add Mission</button>
      </form>
    </div>
  );
};

export default MissionForm;
