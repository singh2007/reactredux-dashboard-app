import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from '../redux/widgetSlice';
import { Dialog, DialogTitle, DialogContent, Tabs, Tab, Button, Checkbox, FormControlLabel } from '@mui/material';

const AddWidgetModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const availableWidgets = useSelector(state => state.widgets.availableWidgets);
  const [selectedCategory, setSelectedCategory] = useState('CSPM');
  const [selectedWidgets, setSelectedWidgets] = useState([]);

  const handleTabChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const handleCheckboxChange = (widget) => {
    setSelectedWidgets((prevWidgets) =>
      prevWidgets.includes(widget)
        ? prevWidgets.filter((w) => w !== widget)
        : [...prevWidgets, widget]
    );
  };

  const handleAddWidgets = () => {
    selectedWidgets.forEach((widget) => {
      dispatch(addWidget({ categoryId: 1, widget }));
    });
    setSelectedWidgets([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth>
      <DialogTitle>Add Widget</DialogTitle>
      <DialogContent>
        <Tabs value={selectedCategory} onChange={handleTabChange}>
          <Tab label="CSPM" value="CSPM" />
          <Tab label="CWPP" value="CWPP" />
          <Tab label="Image" value="Image" />
          <Tab label="Ticket" value="Ticket" />
        </Tabs>

        <div style={{ marginTop: '20px' }}>
          {availableWidgets[selectedCategory].map((widget) => (
            <FormControlLabel
              key={widget.widgetId}
              control={<Checkbox onChange={() => handleCheckboxChange(widget)} />}
              label={widget.widgetName}
            />
          ))}
        </div>

        <Button variant="contained" color="primary" onClick={handleAddWidgets}>
          Confirm
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddWidgetModal;

