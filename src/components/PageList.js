import React from 'react';
import PageItem from './PageItem';

const PageList = (props) => {

    const pageItem = props.pages.map((obj) => {
        return <PageItem
                  key={obj.pageid}
                  pages={obj}
               />;
        });

    return(
      <ul style={{listStyleType : "none"}}>
        {pageItem}
      </ul>
    );
}

export default PageList;
