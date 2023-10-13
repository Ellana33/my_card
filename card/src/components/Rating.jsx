import React, { useState } from 'react';
import styled from 'styled-components';

const Star = styled.span`
  color: ${(props) => (props.active ? 'gold' : 'gray')};
`

function Rating() {
  const [rating, setRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            active={star <= rating}
            onClick={() => handleRating(star)}>
            ★
          </Star>
        ))}
      </div>
    </div>
  );
}

export default Rating;
