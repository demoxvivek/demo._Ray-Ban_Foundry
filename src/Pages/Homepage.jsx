import React, { useEffect, useState } from "react";
import { receiveGetContent, receiveProducts } from "../action";
import styled from "styled-components";
import Carousel from "../customer/Components/Carousel/Carousel";
import { API_BASE_URL } from "../config/api";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../customer/Components/Spinners/Spinner";

const Homepage = () => {
  const [banners, setBanners] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/content`);
        setBanners(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(banners);

  return (
    <MainContainer>
      {loading && <Spinner />}
      <Link to="/shops">
        <div className="firstbanner" style={{ marginBottom: "30px" }}>
          <img src={banners?.[2].url} alt="" />
        </div>
      </Link>
      <div>
        <Carousel text={"New Arrivals"} />
      </div>
      <div
        style={{
          margin: "30px 0",
          textAlign: "center",
          fontSize: "23px",
          fontWeight: "800",
        }}
      >
        <h1>THIS IS WHAT DISRUPTION LOOKS LIKE</h1>
      </div>
      <FlexDiv>
        <Link to="/shops">
          <div className="hover">
            <img src={banners?.[0].url} alt="" />
          </div>
        </Link>
        <Link to="/shops">
          <div className="hover">
            <img src={banners?.[1].url} alt="" />
          </div>
        </Link>
      </FlexDiv>
      <Link to="/shops">
        <div className="firstbanner">
          <img src={banners?.[3].url} alt="" />
        </div>
      </Link>
    </MainContainer>
  );
};

export default Homepage;

const MainContainer = styled.div`
  width: 100%;
  .firstbanner {
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
  .hover {
    transition: filter 0.3s ease;
  }

  .hover:hover {
    filter: brightness(
      0.8
    ); /* Adjust the brightness to make the image slightly darker */
  }
`;
