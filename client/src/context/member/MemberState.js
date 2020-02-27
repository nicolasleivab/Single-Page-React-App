import React, { useReducer } from 'react';
import uuidv4 from 'uuid/v4';
import MemberContext from './memberContext';
import memberReducer from './memberReducer';
import {
  ADD_MEMBER,
  DELETE_MEMBER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_MEMBER,
  FILTER_MEMBERS,
  CLEAR_FILTER
} from '../types';

const MemberState = props => {
  const initialState = {
    members: [
      {
        id: 1,
        role: 'Technical Lead',
        name: 'Nicolas Leiva',
        email: 'nicolasleivab@gmail.com',
        phone: '9999999'
      },
      {
        id: 2,
        role: 'Senior SE',
        name: 'Wojak',
        email: 'wojak@wojak.com',
        phone: '9799999'
      },
      {
        id: 3,
        role: 'Junior SE',
        name: 'Jose',
        email: 'jose@jose.com',
        phone: '3322223'
      }
    ],
    current: null
  };
  const [state, dispatch] = useReducer(memberReducer, initialState);

  // Add Member
  const addMember = member => {
    member.id = uuidv4();
    dispatch({ type: ADD_MEMBER, payload: member });
  };

  // Delete Member
  const deleteMember = member => {
    dispatch({ type: DELETE_MEMBER, payload: member });
  };

  // Set Current Member
  const setCurrent = member => {
    dispatch({ type: SET_CURRENT, payload: member });
  };

  // Clear Current Member
  const clearCurrent = member => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Member
  const updateMember = member => {
    dispatch({ type: UPDATE_MEMBER, payload: member });
  };

  // Filter Members

  // Clear Filter

  return (
    <MemberContext.Provider
      value={{
        members: state.members,
        current: state.current,
        addMember,
        deleteMember,
        setCurrent,
        clearCurrent,
        updateMember
      }}
    >
      {props.children}
    </MemberContext.Provider>
  );
};

export default MemberState;
