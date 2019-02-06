import React from 'react';
import Routine from './Routine';
import { Link } from 'react-router-dom';

const RoutineList = ({ routines }) => {
  return (
    <div>
      {routines &&
        routines.map(routine => {
          return (
            <Link to={'/routine/' + routine.id} key={routine.id}>
              <Routine routine={routine} />
            </Link>
          );
        })}
    </div>
  );
};

export default RoutineList;
