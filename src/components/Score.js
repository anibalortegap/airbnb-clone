import React from 'react';

const StarFill = () => <i class='material-icons'>star</i>;

const StarOutline = () => <i class='material-icons'>star_outline</i>;

export const Score = ({ score = 0, users = 0 }) => (
  <section className='score'>
    <div>
      {[1, 2, 3, 4, 5].map((item) =>
        item <= score ? <StarFill /> : <StarOutline />,
      )}
    </div>
    <p>{users}</p>
  </section>
);
