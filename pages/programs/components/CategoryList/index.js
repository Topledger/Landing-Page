import React, { useState } from "react";
import styled from "styled-components";

const CategoryWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  background-color: rgba(238, 242, 252, 0.32);
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  border-radius: 2rem;
  cursor: pointer;

  svg {
    height: 32px;
    width: 32px;
  }
  span {
    margin-left: 1rem;
  }
`;

function Category({ category, selected, onClick }) {
  const handleClick = () => {
    if (!selected) {
      onClick(category);
    }
  };
  return (
    <CategoryWrapper className="category" onClick={handleClick}>
      {category[selected ? "iconSelected" : "iconUnselected"]}{" "}
      <span>{category.name}</span>
    </CategoryWrapper>
  );
}

const ListWrapper = styled.div`
  display: flex;
  align-items: center;

  .category {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0rem;
    }
  }
`;

function CategoryList({ categories, onSelect }) {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleSelectedCategory = (category, index) => {
    onSelect(category);
    setSelectedCategory(index);
  };

  return (
    <ListWrapper className="category-list">
      {categories.map((category, index) => (
        <Category
          key={index}
          category={category}
          onClick={(category) => handleSelectedCategory(category, index)}
          selected={selectedCategory === index}
        />
      ))}
    </ListWrapper>
  );
}

export default CategoryList;
