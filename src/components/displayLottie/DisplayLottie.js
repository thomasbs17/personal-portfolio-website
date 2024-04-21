import Lottie from "lottie-react";
import React, {Component, Suspense} from "react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData;
    const height = this.props.height ? this.props.height : 400;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
          style={{height: height}}
        />
      </Suspense>
    );
  }
}
