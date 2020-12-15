import React from 'react';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FormError = ({ text }) => (
  <section className=" mt-8 text-center p-2 mb-2 rounded border border-red-600 bg-red-100">
    <p className="text-xs text-red-500">{text}</p>
  </section>
);

export default FormError;