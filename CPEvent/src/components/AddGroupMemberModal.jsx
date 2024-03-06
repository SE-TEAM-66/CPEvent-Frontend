import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, TextInput, Button, Loader } from '@mantine/core';
import { repository } from '../repository/repository';

export default function AddGroupMemberModal({ isOpen, onClose, selectedGroupID, onAddMember }) {
  const [memberEmail, setMemberEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errAddMember, setErrAddMember] = useState('');

  const isValidEmail = (email) => {
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleAddMember = async () => {
    try {
      setLoading(true);
      setErrAddMember('');

      if (!isValidEmail(memberEmail)) {
        setErrAddMember('Please enter a valid email address.');
        return;
      }

      const postData = {
        group_id: selectedGroupID,
        email: memberEmail,
      };

      await repository.post('/add-member', postData);

      setMemberEmail('');
      onAddMember();
      onClose();
    } catch (err) {
      setErrAddMember(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal title="เพิ่มสมาชิกกลุ่ม" opened={isOpen} onClose={onClose}>
      <div>
        {errAddMember && <div className="text-red-600">{errAddMember}</div>}
        <TextInput
          label="Member email"
          placeholder="example@xxx.com"
          value={memberEmail}
          onChange={(event) => setMemberEmail(event.target.value)}
          required
        />
        <div className="flex flex-col pt-4 items-end justify-end">
          <Button onClick={handleAddMember} disabled={loading}>
            {loading ? <Loader size="sm" /> : 'เพิ่ม'}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

AddGroupMemberModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedGroupID: PropTypes.number.isRequired,
};
