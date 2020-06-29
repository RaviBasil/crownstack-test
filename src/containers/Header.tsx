import * as React from "react";
import "../styles/containers/Header.css";
import myCatalog from "../catalog.json";
import { Link } from "react-router-dom";

export default function Header() {
  const renderLocation = () => {
    const locations = myCatalog.data.locations;

    return locations.map((location) => {
      return (
        <li>
          <a href="#">{location.name}</a>
          <ul>{renderBranch(location)}</ul>
        </li>
      );
    });
  };

  const renderBranch = (location: any) => {
    return location.branches.map((branch: any) => {
      return (
        <li>
          <Link
            to={`/category?location=${location.dealers_id}&branch_id=${branch.branch_id}`}
          >
            {branch.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <nav>
      <div>
        <h2>RENTAL MANAGEMENT SYSTEM</h2>
      </div>
      <ul className="nav">
        <li>
          <a href="#">Select Location</a>
          <ul>{renderLocation()}</ul>
        </li>
      </ul>
    </nav>
  );
}
