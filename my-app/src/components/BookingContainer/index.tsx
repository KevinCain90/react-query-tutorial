import { useState } from 'react';

// import { ResultCard } from '../ResultCard';
import SortResult from '../SortResult';

// import { destinations } from './dataMocks';

const BookingContainer: React.FC = () => {
  const [sortingOptions, setSortingOptions] = useState({
    currentSort: 'price',
    sortingOptions: [
      {
        name: 'price',
        icon: 'pound'
      },
      {
        name: 'hotelName',
        icon: 'alpha'
      },
      {
        name: 'starRating',
        icon: 'star'
      },
    ]
  });

  return (
    <div data-testid="booking-container">
     <SortResult />
    </div>
  )
};

export default BookingContainer;
