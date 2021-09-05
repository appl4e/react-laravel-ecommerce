import React, { Component } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router';

export const Protected = ({Comp}) => {
  
  const history = useHistory();
  useEffect(()=>{
    if(!localStorage.getItem('user-info')){
      history.push('/register');
    }
  }, [])

  return (
    <div>
      <Comp/>
    </div>
  )
}
