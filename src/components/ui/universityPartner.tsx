import React from "react";

const UniversityPartner = () => {
  return (
    <div className="slider-container">
      <div
        className="slider1 max-w-2xl ml-28"
        style={
          {
            "--width": "100px",
            "--height": "60px",
            "--quantity": "4",
          } as React.CSSProperties
        }
      >
        <div className="list">
          <div
            className="item"
            style={{ "--position": 1 } as React.CSSProperties}
          >
            <img className="logo" src="/partner/partner-1.png" alt="" />
          </div>
          <div
            className="item"
            style={{ "--position": 2 } as React.CSSProperties}
          >
            <img className="logo" src="/partner/partner-1.png" alt="" />
          </div>
          <div
            className="item"
            style={{ "--position": 3 } as React.CSSProperties}
          >
            <img className="logo" src="/partner/partner-1.png" alt="" />
          </div>
          <div
            className="item"
            style={{ "--position": 4 } as React.CSSProperties}
          >
            <img className="h-50 " src="/partner/partner-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityPartner;
