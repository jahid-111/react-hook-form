import React from "react";

const FieldSet = ({ label, children }) => {
  return (
    <>
      <fieldset className=" m-2 p-3">
        {label && <legend className=" text-md font-bold mb-2">{label}</legend>}
        <div className=" flex flex-col justify-between self-start">
          {children}
        </div>
      </fieldset>
    </>
  );
};

export default FieldSet;
