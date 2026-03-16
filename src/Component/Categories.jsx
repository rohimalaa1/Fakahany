import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Categories({ onSelectCategory }) {
  return (
    <section className="categories container text-center my-4">
      <button className="btn btn-light mx-1" onClick={() => onSelectCategory("all")}>All</button>
      <button className="btn btn-light mx-1" onClick={() => onSelectCategory("juice")}>Fresh Juice</button>
      <button className="btn btn-light mx-1" onClick={() => onSelectCategory("vegetables")}>Vegetables</button>
      <button className="btn btn-light mx-1" onClick={() => onSelectCategory("offers")}>Offers</button>
    </section>
  );
}

export default Categories;