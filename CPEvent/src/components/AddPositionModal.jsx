import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, TextInput, Button, Loader, Text } from '@mantine/core';
import { repository } from '../repository/repository';
import { CiCirclePlus } from "react-icons/ci";
import { Badges } from './Badges';

export default function AddPositionModal({ isOpen, onClose, selectedGroupID, onAddMember }) {
  const [positionName, setPositionName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errAddMember, setErrAddMember] = useState('');
  const [skillText, setSkillText] = useState("");
  const [isAddingSkill, setIsAddingSkill] = useState(false);

  const [skillList, setSkillList] = useState([]);

  const handleAddSkill = () => {
    if (skillText.trim() !== '') {
        // Check if the skill is not empty
        setSkillList((prevSkills) => [...prevSkills, {name: skillText}]);
        setSkillText('');
        setIsAddingSkill(false);
      }
  };

  const handleClose = () => {
    onClose();
    setSkillText('');
    setIsAddingSkill(false)
    setPositionName('')
    setSkillList([])
  };

  const handleAddPosition = async () => {
    try {
      setLoading(true);
      setErrAddMember('');

      const postData = {
        role: positionName,
        skills: skillList,
      };

      await repository.post("/group/"+ selectedGroupID +"/position2", postData);

      onAddMember();
      handleClose();
    } catch (err) {
      setErrAddMember(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal title="เพิ่มตำแหน่งที่เปิดรับ" opened={isOpen} onClose={handleClose}>
      <div>
        {errAddMember && <div className="text-red-600">{errAddMember}</div>}
        <TextInput
          label="Position name"
          placeholder=""
          value={positionName}
          onChange={(event) => setPositionName(event.target.value)}
          required
        />
        <div className="flex flex-col mt-4">
            <Text size="sm" fw={500}>Skills</Text>
            <div className="flex flex-row gap-2 justify-start items-center">
                {skillList.map((skill) => (
                <Badges
                    key={skill.ID}
                    color={"#52B4E1"}
                    text={skill.name}
                    className="mr-2"
                />
                ))}
                {!isAddingSkill && <button
                    type="button"
                    onClick={() => {
                        setIsAddingSkill(true);
                      }}
                    style={{
                        fontSize: "1.5em",
                        cursor: "pointer",
                        border: "none",
                        background: "none",
                    }}
                    >
                    <CiCirclePlus />
                </button>}
            </div>
            <div>
                {isAddingSkill &&
                <div className="flex flex-row gap-1 mt-1">
                    <TextInput
                        placeholder="Skill name"
                        value={skillText}
                        onChange={(e) => {
                            setSkillText(e.target.value);
                          }}
                        style={{ marginRight: "8px" }}
                    />
                    <Button onClick={handleAddSkill} size="sm" color="green">
                        เพิ่ม
                    </Button>
                    <Button onClick={() => {
                        setIsAddingSkill(false);
                        setSkillText('');
                      }} size="sm" color="gray">
                        ยกเลิก
                    </Button>
                </div>
                }
            </div>
        </div>
        <div className="flex flex-col pt-4 items-end justify-end">
          <Button onClick={handleAddPosition} disabled={loading}>
            {loading ? <Loader size="sm" /> : 'เพิ่มตำแหน่ง'}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

AddPositionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedGroupID: PropTypes.number.isRequired,
};
