import React from "react";
import { Link } from "react-router-dom";

const NavigationItem = ({
  to,
  text,
  svg,
}: {
  to: string;
  text: string;
  svg: JSX.Element;
}) => (
  <li className="nav-item">
    <Link to={to} className="nav-link">
      <span className="nav-link-icon d-md-none d-lg-inline-block">{svg}</span>
      <span className="nav-link-title">{text}</span>
    </Link>
  </li>
);

export default NavigationItem;
