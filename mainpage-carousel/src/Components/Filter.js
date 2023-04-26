import React, { useState, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../Components/CSSCOMPONENTS/Filter.css"

// Array of objects containing video data
const data = [
  {
    id: 1,
    title: "Ultimate Back Workout",
    subtitle: "Tone, Define and Strengthen Your Back",
    videoUrl: "https://youtu.be/iGVZszacXkk"
  },
  {
    id: 2,
    title: "Stronger Together",
    subtitle: "Full Body Community Workout",
    videoUrl: "https://youtu.be/4ElNmCCnkrE"
  },
  {
    id: 3,
    title: "Ultimate Burnout",
    subtitle: "High-Intensity Full Body Workout",
    videoUrl: "https://youtu.be/awGOrhDgacU"
  },
  {
    id: 4,
    title: "Tricep Toning",
    subtitle: "Target Your Triceps and Tone Your Arms",
    videoUrl: "https://youtu.be/a1BvPwTokYU"
  }
];

// Functional component that displays a filter input and a list of videos
const FilterButton = () => {
  const [filterValue, setFilterValue] = useState('');
  const scrollRef = useRef(null);

  // Event handler that updates the filter input value
  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  // Event handler that scrolls to the card element
  const handleViewClick = (title, videoUrl) => {
    const card = scrollRef.current.querySelector(`[data-title="${title}"][data-url="${videoUrl}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter the data array based on the filter input value
  const filteredData = data.filter(item => item.title.toLowerCase().includes(filterValue.toLowerCase()) || item.subtitle.toLowerCase().includes(filterValue.toLowerCase()));

  return (
    <div>
      {/* Label and input for the filter */}
      <label htmlFor="filter">Filter by title or subtitle:</label>
      <input type="text" id="filter" value={filterValue} onChange={handleFilterChange} />

      {/* Display the filtered data as a list of cards */}
      <div className="card-grid" ref={scrollRef}>
        {filteredData.map(item => (
          <Card className="custom" key={item.id} style={{ width: "100%" }} data-title={item.title} data-url={item.videoUrl}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Subtitle className="mb-2">{item.subtitle}</Card.Subtitle>
              {/* Button that triggers the handleViewClick function */}
              <Button variant="primary" onClick={() => handleViewClick(item.title, item.videoUrl)}>Find</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FilterButton;
