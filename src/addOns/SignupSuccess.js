import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function FormSuccess ({ text }) {

  return (
  <div>
 <section className="mt-8 text-center p-2 mb-2 rounded border border-green-600 bg-green-100">
     <FontAwesomeIcon icon={faCheckCircle} />
    <p className="text-xs text-green-500">{text}</p>
  </section> 
  </div>
  );
};

export default FormSuccess;