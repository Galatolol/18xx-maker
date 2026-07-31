import React from "react";
import Color from "./util/Color";
import { multiDefaultTo } from "./util";

const Legend = ({ game, color, borderColor, borderWidth, description, right, bottom, fontFamily, fontSize, fontWeight }) => {
  fontFamily = multiDefaultTo("display", fontFamily);
  fontSize = multiDefaultTo("14", fontSize);
  fontWeight = multiDefaultTo("normal", fontWeight);
  return (
    <Color>
      {(c,t) => (
        <g>
          <circle r="12" cx={right ? -20 : 20} cy={bottom ? -20 : 20}
                  stroke={c(borderColor || "black")}
                  strokeWidth={borderWidth || 2}
                  fill={c(color || "orange")}
          />
          <text
            fontFamily="Times"
            fontSize="16"
            fontWeight="bold"
            textAnchor={right ? "end" : "start"}
            dominantBaseline="middle"
            fill="black"
            x={right ? -39 : 39}
            y={bottom ? -20 : 20}
          >
            {description}
          </text>
        </g>
      )}
    </Color>
  );
};

export default Legend;
