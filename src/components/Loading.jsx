import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div>
      <div className="skel">
        <div id="first-skel">
          <Skeleton height={350} width={400} />
        </div>
        <div id="second-skel">
          <Skeleton height={40} width={200} />
          <Skeleton height={65} width={700} />
          <Skeleton height={20} width={90} />
          <Skeleton height={40} width={80} />
          <Skeleton height={100} width={710} />
          <Skeleton height={40} width={240} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
