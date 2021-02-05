import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [startIndex, setStartIndex] = useState(0);
  const [disbaleButton, setDisableButton] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = () => {
    let url = `https://jsonplaceholder.typicode.com/photos?_start=${startIndex}&_limit=5`;
    //console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPhotos(data);
        console.log(photos)
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchPhotos();
    //console.log(photos);
    //console.log(disbaleButton);
    setDisableButton(startIndex <= 0 ? true : false);
  }, [startIndex]);

  const prevNextButton = e => {
    if (e.target.innerHTML == "Prev") {
      setStartIndex(prevState => prevState - 5);
    } else {
      setStartIndex(prevState => prevState + 5);
    }
  };

  return (
    <div>
      <table border="1">
        <tr>
          <th>Sr. No.</th>
          <th>Title</th>
          <th>Url</th>
          <th>Thumbnail Url</th>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        {photos.map(photo => {
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>;
        })}
      </table>
      <button disabled={disbaleButton} onClick={prevNextButton}>
        Prev
      </button>
      <button onClick={prevNextButton}>Next</button>
    </div>
  );
}
