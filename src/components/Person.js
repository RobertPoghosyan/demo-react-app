import React from 'react';
import Name from './Name';
import Project from './Project';

function Person(props) {
    const {name}=props; 
    const {project}=props;
    return (
      <>
        <Name name={name} />
        <p>You Don’t Have To Be Great To Start, But You Have To Start To Be Great !!!</p>
        <Project project={project} />
      </>
    );
  }

  export default Person;