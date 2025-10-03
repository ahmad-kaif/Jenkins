import React from 'react';
import SandboxItem from './SandboxItem';

const SandboxList = ({ sandboxes, deleteSandbox, updateSandbox }) => {
  if (sandboxes.length === 0) {
    return <p>No sandboxes yet. Create one!</p>;
  }

  return (
    <ul className="space-y-4">
      {sandboxes.map((sb) => (
        <SandboxItem
          key={sb.id}
          sandbox={sb}
          deleteSandbox={deleteSandbox}
          updateSandbox={updateSandbox}
        />
      ))}
    </ul>
  );
};

export default SandboxList;
