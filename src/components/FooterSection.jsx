import React from "react";
import PropTypes from "prop-types";

export default function FooterSection({ title, list }) {
  return (
    <div className="section-div">
      <h3>{title}</h3>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};
