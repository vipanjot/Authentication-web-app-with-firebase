const FIREBASE_DOMAIN = "https://quotes-bf578-default-rtdb.firebaseio.com/";

export async function addQuote(quoteData, token) {
  const queryParams = "/quotes.json?auth=" + token;
  // console.log("to", token);
  // console.log("dt", quoteData);

  const res = await fetch(`${FIREBASE_DOMAIN}${queryParams}`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  // console.log(data);
  if (!res.ok) {
    throw new Error(data.message) || "could not create a quote";
  }

  return null;
}

export async function getAllQuotes(userId, token) {
  // console.log("user", userId);
  // console.log("token", token);

  const queryParams =
    "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
  const res = await fetch(`${FIREBASE_DOMAIN}/quotes.json${queryParams} `);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message) || "could not create a quote";
  }

  const tranformedQuotes = [];

  for (const key in data) {
    tranformedQuotes.push({
      id: key,
      ...data[key],
    });
  }
  // console.log(tranformedQuotes);
  return tranformedQuotes;
}

export async function getSingleQuote(id, userId, token) {
  const queryParams = "?auth=" + token;
  const res = await fetch(
    `${FIREBASE_DOMAIN}/quotes/${id}.json${queryParams} `
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error(res.message) || "could not create a quote";
  }

  const quote = {
    id: id,
    ...data,
  };

  return quote;
}

// export function deleteQuotes(userId, token, id) {
//   return async (dispatch) => {
//     console.log(id);
//     const queryParams =
//       "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
//     const fetchData = async () => {
//       const res = await fetch(
//         `${FIREBASE_DOMAIN}/quotes.json/${id}${queryParams}`,
//         {
//           method: "DELETE",
//           header: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!res.ok) {
//         throw new Error(res.message) || "could not create a quote";
//       }
//       const data = await res.json();

//       const tranformedQuotes = [];

//       for (const key in data) {
//         tranformedQuotes.push({
//           id: key,
//           ...data[key],
//         });
//       }
//       return tranformedQuotes;
//     };
//     try {
//       const responseData = await fetchData();
//       console.log("this is my data", responseData);
//       dispatch(quoteActions.delete({ quotes: responseData }));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
