import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../store/quote-action";

const QuoteDetail = () => {
  // const history = useHistory();
  const params = useParams();
  const { quoteId } = params;

  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  // console.log(params);
  const {
    sendRequest,
    data: loadedQuotes,
    status,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId, userId, token);
  }, [sendRequest, quoteId, userId, token]);

  // console.log(loadedQuotes);
  if (status === "pending") {
    return (
      <div className="centered">
        <h1 style={{ color: "#008080" }}>Processing...</h1>
      </div>
    );
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.date} />
    </Fragment>
  );
};

export default QuoteDetail;
