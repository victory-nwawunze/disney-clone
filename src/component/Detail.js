/** @format */
import React from "react";
import styled from "styled-components";
function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://wallpaperaccess.com/full/1202063.jpg" />
      </Background>
      <ImageTitle>
        <img src="/images/imgTitle-removebg-preview.png" />
      </ImageTitle>
      <Controls>
        <PlayButton></PlayButton>
        <TrailerButton></TrailerButton>
        <AddButton></AddButton>
        <GroupWatchButton></GroupWatchButton>
      </Controls>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div``;
const PlayButton = styled.button``;
const TrailerButton = styled.button``;
const AddButton = styled.button``;
const GroupWatchButton = styled.button``;
