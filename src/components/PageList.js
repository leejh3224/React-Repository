import React from 'react';
import PageItem from './PageItem';

const PageList = (props) => {
    const pageItem = props.pages.map((obj) => {
      return <PageItem key={obj.pageid} pages={obj} />;
    });

    const ulStyle = {
      listStyleType : "none"
    };
    
  return(
    <ul style={ulStyle}>
      {pageItem}
    </ul>
  );
}

export default PageList;
