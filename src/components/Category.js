import React from 'react';
import Widget from './Widget';
import { Typography } from '@mui/material';

const Category = ({ category }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Typography variant="h5">{category.categoryName}</Typography>
      <div style={{ display: 'flex', gap: '20px' }}>
        {category.widgets.map(widget => (
          <Widget key={widget.widgetId} widget={widget} categoryId={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;
