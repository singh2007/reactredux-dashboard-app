import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import AddWidgetModal from './AddWidgetModal';
import { Button } from '@mui/material';

const Dashboard = () => {
  const categories = useSelector(state => state.widgets.categories);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>CNAPP Dashboard</h1>
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Add Widget
      </Button>
      <AddWidgetModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Dashboard;

