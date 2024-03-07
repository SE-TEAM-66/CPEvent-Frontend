import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, TextInput, Button, Loader, Textarea } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { repository } from '../repository/repository';

export default function CreateGroupModal({ isOpen, onClose, onAddMember }) {
    const history = useNavigate(); // Get the history object

  const [groupName, setGroupName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [errAddMember, setErrAddMember] = useState('');

  const handleCreateGroup = async () => {
    try {

      setLoading(true);
      setErrAddMember('');

      if (!groupName.trim()) {
        setErrAddMember('Group name are required');
        return;
      }

      const postData = {
        gname: teamName,
        topic: groupName,
        description: description,
        cat_id: 1
      };

      await repository.post('/group/new', postData);
      
      await onAddMember();
      setGroupName("")
      setDescription("")
      setTeamName("")
      onClose();
      history('/my-group');
    } catch (err) {
      setErrAddMember(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal title="สร้างกลุ่มใหม่" opened={isOpen} onClose={onClose}>
      <div>
        {errAddMember && <div className="text-red-600">{errAddMember}</div>}
        <TextInput
          label="Group name"
          placeholder=""
          value={groupName}
          onChange={(event) => setGroupName(event.target.value)}
          required
        />
        <TextInput
          label="For what"
          placeholder="Optional"
          value={teamName}
          onChange={(event) => setTeamName(event.target.value)}
        />
        <Textarea
            placeholder="Optional"
            label="Description"
            autosize
            minRows={2}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
        />
        <div className="flex flex-col pt-4 items-end justify-end">
          <Button onClick={handleCreateGroup} disabled={loading} color='#37628D'>
            {loading ? <Loader size="sm" /> : 'สร้าง'}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

CreateGroupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedGroupID: PropTypes.number.isRequired,
};
