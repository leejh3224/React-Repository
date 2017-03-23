import React from 'react';
import Anchor from 'grommet/components/Anchor';
import '../css/PageItem.css';

const PageItem = ({pages}) => {
  return(
    <li>
      <div className="resultItem">
        <h1>
          {pages.title}
        </h1>
        <h3>
          {pages.extract}
        </h3>
        <Anchor href={pages.fullurl}
                label='Show more on wikipedia!'/>
      </div>
    </li>
  );
}

export default PageItem;
