import React from "react";
import { Card } from "../../components/blog/Card";
import { Category } from "../../components/category/Category";
import Slider from "react-slick";

export const Home = () => {
  return (
    <>
      <Slider />
      <Category />
      <Card />
    </>
  );
};
