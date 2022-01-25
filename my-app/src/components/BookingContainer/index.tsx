import { useState, useEffect } from 'react';

import ResultCard from '../ResultCard';
import SortResult from '../SortResult';

import { StyledBookingContainer, StyledAside, StyledMain } from './styles';

import { destinationsArray, sortingOptionsArray } from './dataMocks';

const BookingContainer: React.FC = () => {
  const [sortingOptions, setSortingOptions] = useState({
    currentSelection: 'price',
    sortingOptions: sortingOptionsArray,
  });
  const [destinations, setDestinations] = useState(destinationsArray);
  
  // function used to sort and return current selection
  const sortBy = (currentSelection: string) => {

    let currentArray = destinations.length ? [...destinations] : [...destinationsArray];

    if (currentSelection === 'price') {
      currentArray.sort((a, b) => a.price > b.price ? 1 : -1);
    }

    if (currentSelection === 'alphabetically') {
      currentArray.sort((a, b) => a.hotelName > b.hotelName ? 1 : -1);
    }

    if (currentSelection === 'star rating') {
      currentArray.sort((a, b) => a.starRating < b.starRating ? 1 : -1);
    }
    
    setDestinations(currentArray);
    setSortingOptions({
      ...sortingOptions,
      currentSelection
    });
  }

  useEffect(() => sortBy('price'), []);

  const resultCards = destinations.map(destination => {
    return (
      <ResultCard
        key={destination.hotelName}
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
