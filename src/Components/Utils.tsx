import React from 'react';

export const getEmoji = (hours: Number) => {
  if (hours >= 5 && hours < 12) {
    return '🌤';
  }
  if (hours >= 12 && hours <= 15) {
    return '☀';
  }
  if (hours >= 16 && hours < 18) {
    return '🌇';
  }
  if (hours >= 18 && hours <= 23) {
    return '🌃';
  }
  return '🌑';
};

export const getPercentage = (tasks: Number, done_tasks: Number) => {
  return parseFloat(done_tasks / tasks).toFixed(4) * 100;
};
