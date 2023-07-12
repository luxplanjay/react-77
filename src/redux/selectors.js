import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

export const selectTasks = state => state.tasks.items;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectStatusFilter = state => state.filters.status;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    console.log('selectVisibleTasks');
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);

// export const selectVisibleTasks = state => {
//   console.log('selectVisibleTasks');
//   const tasks = selectTasks(state);
//   const statusFilter = selectStatusFilter(state);

//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

export const selectTaskCount = createSelector([selectTasks], tasks => {
  console.log('selectTaskCount');
  return tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
});

// export const selectTaskCount = state => {
//   const tasks = selectTasks(state);
//   console.log('Calculating task count');
//   return tasks.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { active: 0, completed: 0 }
//   );
// };
