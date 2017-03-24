import React from 'react';
import Anchor from 'grommet/components/Anchor';
import '../css/PageItem.css';

const PageItem = ({pages}) => {
  return(
    <li>
      <div className="resultItem">
        <h3>
          {pages.title}
        </h3>
        <h4>
          {pages.extract}
        </h4>
        <Anchor
            href={pages.fullurl}
            label='Show more on wikipedia!'
        />
      </div>
    </li>
  );
}

export default PageItem;
