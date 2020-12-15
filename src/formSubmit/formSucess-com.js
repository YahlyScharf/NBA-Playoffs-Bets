import React from 'react';

const FormSuccess = ({ text }) => (
  <section className="mt-8 text-center p-2 mb-2 rounded border border-green-600 bg-green-100">
    <p className="text-xs text-green-500">{text}</p>
  </section>
);

export default FormSuccess;