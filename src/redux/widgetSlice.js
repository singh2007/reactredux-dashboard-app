import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 1,
      categoryName: 'CSPM Executive Dashboard',
      widgets: [
        { widgetId: 101, widgetName: 'Cloud Accounts', widgetText: 'Connected (2)' },
        { widgetId: 102, widgetName: 'Cloud Account Risk Assessment', widgetText: 'Failed (1989), Warning (681)' }
      ]
    },
    {
      id: 2,
      categoryName: 'CWPP Dashboard',
      widgets: []
    },
    {
      id: 3,
      categoryName: 'Registry Scan',
      widgets: [
        { widgetId: 301, widgetName: 'Image Risk Assessment', widgetText: 'Total Vulnerabilities: 1470' }
      ]
    }
  ],
  availableWidgets: {
    CSPM: [
      { widgetId: 201, widgetName: 'Cloud Accounts', widgetText: 'Connected (2)' },
      { widgetId: 202, widgetName: 'Cloud Account Risk Assessment', widgetText: 'Failed (1989), Warning (681)' }
    ],
    CWPP: [
      { widgetId: 203, widgetName: 'Workload Alerts', widgetText: 'No data available' }
    ],
    Image: [
      { widgetId: 204, widgetName: 'Image Security Issues', widgetText: 'Critical (2)' }
    ],
    Ticket: [
      { widgetId: 205, widgetName: 'Ticket Overview', widgetText: 'No data available' }
    ]
  }
};

const widgetSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const category = state.categories.find(cat => cat.id === action.payload.categoryId);
      if (category) {
        category.widgets.push(action.payload.widget);
      }
    },
    removeWidget: (state, action) => {
      const category = state.categories.find(cat => cat.id === action.payload.categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.widgetId !== action.payload.widgetId);
      }
    }
  }
});

export const { addWidget, removeWidget } = widgetSlice.actions;
export default widgetSlice.reducer;

