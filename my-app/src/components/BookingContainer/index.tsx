import { useState, useEffect } from 'react';

import ResultCard from '../ResultCard';
import SortResult from '../SortResult';

import { StyledBookingContainer, StyledAside, StyledMain } from './styles';

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
        name: 'alphabetically',
        icon: 'alpha'
      },
      {
        name: 'star rating',
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

    setDestinations(currentArray as any); // not ideal TO DO
    setSortingOptions({
      ...sortingOptions,
      currentSelection
    });
  }

  useEffect(() => sortBy('price'), []); // TO DO

  const resultCards = destinations.map(destination => {
    return (
      <ResultCard
        hotelName={destination.hotelName}
        location={destination.location}
        hotelImage={destination.hotelImage}
        starRating={destination.starRating}
        guests={destination.guests}
        holidayLength={destination.holidayLength}
        departureDate={destination.departureDate}
        departureAirport={destination.departureAirport}
        price={destination.price}
        description={destination.description}
      />
    )
});

  return (
    <StyledBookingContainer data-testid="booking-container">
      <StyledAside>
        <SortResult 
          currentSelection={sortingOptions.currentSelection}
          options={sortingOptions.sortingOptions}
          sortBy={sortBy}
        />
      </StyledAside>
      <StyledMain>
        {resultCards}
      </StyledMain>
    </StyledBookingContainer>
  )
};

export default BookingContainer;
