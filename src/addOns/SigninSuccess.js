import React,{useState} from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from './Loadspin';

function FormSuccess ({ text }) {
  const [load,setLoad] =useState (true);
  return (
  <div>
  { load ? <Loading loading /> : <section className="mt-8 text-center p-2 mb-2 rounded border border-green-600 bg-green-100">
     <FontAwesomeIcon color="green" icon={faCheckCircle} />
    <p className="text-xs text-green-500">{text}</p>
  </section> }
  
  {setTimeout(() => {
    setLoad(false);
  },1500)}
  </div>
  );
};

export default FormSuccess;