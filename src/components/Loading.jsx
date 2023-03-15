import LogoS from "../assets/logo-c.png";

export function Loading() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="header__content__logo">
        <img src={LogoS} height={45} alt="Logo" />
      </div>
    </div>
  );
}




// import React from "react";
// import { ThreeCircles } from "react-loader-spinner";

// export const Loading = () => {
//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <ThreeCircles
//         height="100"
//         width="100"
//         color="grey"
//         wrapperStyle={{}}
//         wrapperClass=""
//         visible={true}
//         ariaLabel="three-circles-rotating"
//         outerCircleColor=""
//         innerCircleColor=""
//         middleCircleColor=""
//       />
//     </div>
//   );
// };
