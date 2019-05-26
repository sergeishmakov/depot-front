import styled from "styled-components";
import React, { Component } from "react";

class CanvasComponent extends Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#1d7143";
    ctx.fillStyle = "white";
    ctx.lineWidth = 1;
    ctx.moveTo(0, 10.1);
    ctx.lineTo(10, 1);
    ctx.lineTo(20, 10.1);
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.moveTo(10, 0);
    ctx.lineTo(10, 1);
    ctx.stroke();
  }
  render() {
    return (
      <canvas
        style={{ marginBottom: -2 + "px" }}
        ref="canvas"
        width={20}
        height={11}
      />
    );
  }
}

const errorfield = ({ className, children }) => (
  <BlockWrapper className={className}>
    <HorizontalBlock>
      <CanvasComponent />
    </HorizontalBlock>
    <HorizontalBlock>
      <VerticalBlock1 /> <VerticalBlock2>{children}</VerticalBlock2>
    </HorizontalBlock>
  </BlockWrapper>
);

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const HorizontalBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 10px;
`;
const VerticalBlock1 = styled.div`
  border-bottom: 1px solid #1d7143;
  border-left: 1px solid #1d7143;
  background: white;
  min-width: 20px;
  padding: 5px;
`;
const VerticalBlock2 = styled.div`
  border-top: 1px solid #1d7143;
  border-right: 1px solid #1d7143;
  border-bottom: 1px solid #1d7143;
  background: white;
  padding: 2px 20px 0 0;
`;

export const Error = styled(errorfield)`
  position: absolute;
  left: 5%;
  top: 100%;
  font-weight: bold;
  color: #1d7143;
  z-index: 99;
`;
