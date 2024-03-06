import React, { useState } from "react";
import { TextInput, Button } from "@mantine/core";
import { CiCirclePlus } from "react-icons/ci";

export function AddLabel({ onAddLabel }) {
  const [isAddingLabel, setIsAddingLabel] = useState(false);
  const [labelText, setLabelText] = useState("");

  const handleAddLabelClick = () => {
    setIsAddingLabel(true);
  };

  const handleLabelInputChange = (e) => {
    setLabelText(e.target.value);
  };

  const handleLabelSubmit = () => {
    // Call the provided onAddLabel function with the entered text
    onAddLabel(labelText);

    // Reset state
    setIsAddingLabel(false);
    setLabelText("");
  };

  return (
    <div className="flex items-center">
      {!isAddingLabel ? (
        <button
          type="button"
          onClick={handleAddLabelClick}
          style={{
            fontSize: "1.5em",
            cursor: "pointer",
            border: "none",
            background: "none",
          }}
        >
          <CiCirclePlus />
        </button>
      ) : (
        <div className="flex items-center">
          <TextInput
            placeholder="Role"
            value={labelText}
            onChange={handleLabelInputChange}
            style={{ marginRight: "8px" }}
          />
          <Button onClick={handleLabelSubmit} size="sm">
            Add Role
          </Button>
        </div>
      )}
    </div>
  );
}
