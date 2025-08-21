import React from "react";

const Card = ({ title, children, actions }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        <div className="mt-2">{children}</div>
        {actions && <div className="card-actions justify-end mt-4">{actions}</div>}
      </div>
    </div>
  );
};

export default Card;
