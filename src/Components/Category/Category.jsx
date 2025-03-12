import React from "react";
import { categoryInfos } from "./CategoryData";
import CategoryCard from "./CategoryCard";
import classes from "./Catagory.module.css"

const Category = () => {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos ,i) => (
        <CategoryCard key={i} data={infos} />
      ))}
    </section>
  );
};

export default Category;
