import { getDivs, getResponse } from "./html";
import { lottoFormatter, lottoGenerator } from "./lotto";

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const lottoNums = await lottoGenerator();
  if (request.url.endsWith("megamillions.averyharnish.com/v1/api")) {
    const data = { megaMillionNums: lottoFormatter(lottoNums) };
    const errors = [];
    const json = { data: data, errors: errors };
    return new Response(JSON.stringify(json), {
      headers: { "Content-Type": "application/json" }
    });
  } else if (request.url.endsWith("/robots.txt")) {
    return new Response("User-agent: * \nDisallow: ");
  }
  const lottoStrings = lottoFormatter(lottoNums);
  return getResponse(lottoStrings);
}
