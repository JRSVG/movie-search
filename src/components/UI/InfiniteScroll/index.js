import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner";

const InfiniteScrollComponent = ({ page, nextPageHandler, children }) => {
  return (
    <InfiniteScroll
      dataLength={page * 10}
      next={nextPageHandler}
      hasMore={true}
      loader={<Spinner />}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))",
      }}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Ste na konci.</b>
        </p>
      }
    >
      {children}
      <div style={{ width: "100%", height: "200px" }}></div>
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
