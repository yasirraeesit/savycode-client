import React, { useState } from 'react';
import Careers from '../components/Careers';
import ApplyModal from '../components/ApplyModal';

export default function CareersPage() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const handleApplyRole = (roleTitle) => {
    setSelectedRole(roleTitle);
    setApplyModalOpen(true);
  };

  return (
    <div>
      <Careers onApplyRole={handleApplyRole} />
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        defaultRole={selectedRole}
      />
    </div>
  );
}
