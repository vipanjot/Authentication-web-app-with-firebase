import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../store/quote-action";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Newquote = () => {
  const token = useSelector((state) => state.auth.token);

  const { sendRequest, status } = useHttp(addQuote);

  const history = useHistory();

  useEffect(() => {
    if (status === "complete") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData, token);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default Newquote;
