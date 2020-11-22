import React from 'react';

export const Input = ({ name, type, placeholder, required = false }) => (
  <input
    className="shadow md:w-64 border-solid border border-gray-300 rounded-lg
    p-2 focus:shadow-outline text-black"
    type={type}
    name={name}
    placeholder={placeholder}
    required={required}
    minLength={2}
  />
);

export const Label = ({ name, children }) => (
  <label htmlFor={name} className="mb-2">
    {children}
  </label>
);

export const Select = ({ name, options, required = false }) => (
  <select
    name={name}
    className="shadow md:w-64 border-solid border border-gray-300 rounded
    p-2 focus:shadow-outline h-8 text-black"
    required={required}
  >
    <option value="">---</option>
    {options.map((op) => (
      <option value={op} key={op}>
        {op}
      </option>
    ))}
  </select>
);

export const TextArea = ({ name, placeholder, required = false }) => (
  <textarea
    name={name}
    className="shadow border-solid border border-gray-300 rounded-lg p-2
    focus:shadow-outline max-w-2xl text-black"
    rows={6}
    placeholder={placeholder}
    required={required}
    minLength={10}
  />
);

export const FormButton = ({ type = 'submit', children }) => (
  <button
    type={type}
    className="bg-blue-700 hover:bg-blue-600 shadow rounded-lg w-24 p-2"
  >
    {children}
  </button>
);

export const FormGroup = ({ children }) => (
  <div className="flex flex-col mb-4 last:mb-0">{children}</div>
);
