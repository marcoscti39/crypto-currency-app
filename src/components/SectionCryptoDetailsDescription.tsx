import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { StyledDescription } from "../styles/styledCoinDetailsDescription";

const SectionCryptoDetailsDescription: React.FC = () => {
  const coinDescription = useSelector(
    (state: RootState) => state.coinDetails.coinData
  );

  const testRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (coinDescription.description) {
      testRef.current!.innerHTML = coinDescription.description;
    }
  }, [coinDescription]);

  return (
    <section>
      <h2 className="text-lightGreen font-semibold py-4 text-2xl">
        What is Bitcoin?
      </h2>
      <StyledDescription ref={testRef}></StyledDescription>
    </section>
  );
};

export default SectionCryptoDetailsDescription;
