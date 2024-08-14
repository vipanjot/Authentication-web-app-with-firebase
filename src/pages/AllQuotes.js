import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../store/quote-action";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const AllQuotes = () => {
  const history = useHistory();
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  // const quotes = useSelector((state) => state.quotes.quotes);

  const {
    sendRequest,
    status,
    data: loadedQuotes,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest(userId, token);
  }, [sendRequest, userId, token]);

  if (status === "pending") {
    return (
      <div className="centered">
        <h1 style={{ color: "#38015c" }}>Processing...</h1>
      </div>
    );
  }
  if (!loadedQuotes || loadedQuotes.length === 0) {
    alert("List is empty.Please add some new Quotes.");
    history.push("/new-quote");
    return (
      <div className="centered">
        <h1 style={{ color: "#38015c" }}>Empty</h1>
      </div>
    );
  }
  // console.log(loadedQuotes);
  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
