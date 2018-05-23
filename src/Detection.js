import React from "react";
import { css } from "emotion";

export const Eye = ({ location, size = 50 }) => {
  const color = "orange";
  const eye = css({
    color,
    fontSize: "10px",
    border: `1px solid ${color}`,
    position: "absolute",
    left: location.x - size / 2,
    top: location.y - size / 2,
    height: `${size}px`,
    width: `${size}px`
  });

  return <div className={eye}>Eye</div>;
};

export const Mouth = ({ location, size = 50 }) => {
  const color = "green";
  const mouth = css({
    color,
    fontSize: "10px",
    border: `1px solid ${color}`,
    position: "absolute",
    left: location.x - size / 2,
    top: location.y - size / 4,
    height: `${size / 2}px`,
    width: `${size}px`
  });
  return <div className={mouth}>Mouth</div>;
};

export const Nose = ({ location, size = 50 }) => {
  const color = "purple";
  const nose = css({
    color,
    fontSize: "10px",
    border: `1px solid ${color}`,
    position: "absolute",
    left: location.x - size / 2,
    top: location.y - size / 2,
    height: `${size}px`,
    width: `${size}px`
  });
  return <div className={nose}>Nose</div>;
};

export const Face = ({
  boundingBox: { top, right, left, bottom, height, width }
}) => {
  const color = "blue";
  const face = css({
    color,
    fontSize: "10px",
    border: `1px solid ${color}`,
    position: "absolute",
    top,
    right,
    left,
    bottom,
    height,
    width
  });
  return <div className={face}>Face</div>;
};
