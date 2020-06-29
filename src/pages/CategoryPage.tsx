import * as React from "react";
import { useLocation } from "react-router-dom";
import myCatalog from "../catalog.json";
import Card from "../components/Card";

export default function CategoriesPage(props: any) {
  let query = useQuery();

  const renderCategories = () => {
    const selectedLocationId = query.get("location");
    const selectedBranchId = query.get("branch_id");

    const location = myCatalog.data.locations.find(
      (location) => location.dealers_id === selectedLocationId
    );
    const branch = location?.branches.find(
      (branchItem: any) => branchItem.branch_id === selectedBranchId
    );

    return branch?.categories.map((category) => (
      <Card
        imageSrc={`/assets/category/${category.image}`}
        name={category.name}
        link={`/category-detail?location=${selectedLocationId}&branch_id=${selectedBranchId}&category=${category.name}`}
      />
    ));
  };

  return <div style={{ display: "flex" }}>{renderCategories()}</div>;
}

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
