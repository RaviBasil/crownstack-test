import * as React from "react";
import { useLocation } from "react-router-dom";
import myCatalog from "../catalog.json";
import Card from "../components/Card";

export default function CategoriesDetail(props: any) {
  let query = useQuery();

  const renderCategories = () => {
    const selectedLocationId = query.get("location");
    const selectedBranchId = query.get("branch_id");
    const selectedCategory = query.get("category");

    const location = myCatalog.data.locations.find(
      (location) => location.dealers_id === selectedLocationId
    );
    const branch = location?.branches.find(
      (branchItem: any) => branchItem.branch_id === selectedBranchId
    );
    const category = branch?.categories.find(
      (category: any) => category.name === selectedCategory
    );

    return category?.subcategories.map((subcategory) => (
      <Card
        imageSrc={`/assets/category/subcategory/${subcategory.image}`}
        name={subcategory.name}
        link={``}
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
