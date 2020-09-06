import React from 'react';

const CategoryList = (props) => {
    function mapCategories(parent, categories, level){
        return categories.filter((category) => {
            return category.parent && category.parent.slug === parent.slug;
        }).map((category) => {
            return <div key={category.slug}>{level} {category.slug} - {category.name} { mapCategories(category, categories, level + 1) } </div>
        });
    };

    const categories = props.categories.filter((category) => {
        return !category.parent;
    }).map((category) => {
            return <div key={category.slug}><span>{category.slug} - {category.name}</span>{mapCategories(category, props.categories, 1)}</div>
    });
    
    return <div>{categories}</div>;
};

export default CategoryList;