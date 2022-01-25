import { useState, useEffect } from 'react';

// import { ResultCard } from '../ResultCard';
import SortResult from '../SortResult';

import { destinations } from './dataMocks';

const BookingContainer: React.FC = () => {
  const [sortingOptions, setSortingOptions] = useState({
    currentSelection: 'price',
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
  const [destinationsState, setDestinations] = useState([]);
  
  // function used to sort and return current selection
  const sortBy = (currentSelection: string) => {
    let currentArray = destinations.length ? [...destinationsState] : [...destinations];

    if (currentSelection === 'price') {
      currentArray.sort((a, b) => a.price > b.price ? 1 : -1);
    }

    if (currentSelection === 'alphabetically') {
      currentArray.sort((a, b) => a.hotelName > b.hotelName ? 1 : -1);
    }

    if (currentSelection === 'rating') {
      currentArray.sort((a, b) => a.starRating < b.starRating ? 1 : -1);
    }

    setDestinations(currentArray as any); // not ideal 
    setSortingOptions({
      ...sortingOptions,
      currentSelection
    });
  }

  useEffect(() => sortBy('price'));

  return (
    <div data-testid="booking-container">
     <SortResult 
       currentSelection={sortingOptions.currentSelection}
       options={sortingOptions.sortingOptions}
       sortBy={sortBy}
     />
    </div>
  )
};

export default BookingContainer;
