import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/widgetSlice';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemoveWidget = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.widgetId }));
  };

  return (
    <Card style={{ width: '200px', padding: '10px' }}>
      <CardContent>
        <Typography variant="h6">{widget.widgetName}</Typography>
        <Typography variant="body2">{widget.widgetText}</Typography>
        <IconButton onClick={handleRemoveWidget} aria-label="remove">
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Widget;
