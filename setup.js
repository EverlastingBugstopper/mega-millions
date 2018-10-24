const fetch = require("node-fetch");
require("dotenv").config();

module.exports.init = async () => {
  const requiredCredentials = ["CF_API_KEY", "CF_EMAIL", "CF_ZONE_ID"];
  requiredCredentials.forEach(requiredCredential => {
    if (!process.env[requiredCredential]) {
      reject(
        Error(`Missing mandatory environment variable: ${requiredCredential}.`)
      );
    }
  });
  let headers = new fetch.Headers({
    "X-Auth-Email": process.env["CF_EMAIL"],
    "X-Auth-Key": process.env["CF_API_KEY"]
  });
  const { success, errors, result } = await fetch(
    `https://api.cloudflare.com/client/v4/zones/${
      process.env["CF_ZONE_ID"]
    }/workers/settings`,
    { headers: headers }
  ).then(responseBody => responseBody.json());
  if (!success) {
    reject(Error(JSON.stringify(errors)));
  }
  const { multiscript, enabled } = result;
  if (!enabled) {
    reject(
      Error(
        "Workers are not enabled for this account, please upgrade your account at https://cloudflare.com"
      )
    );
  }
  const scriptContents = fs.readFileSync("./target/worker.min.js").toString();
  headers.append("Content-Type", "application/javascript");
  let apiUrl;
  if (!multiscript) {
    apiUrl = `https://api.cloudflare.com/client/v4/zones/${
      process.env["CF_ZONE_ID"]
    }/workers/script/`;
  } else {
    const multiscriptReqCreds = ["CF_ACCOUNT_ID", "SCRIPT_NAME"];
    multiscriptReqCreds.forEach(requiredCredential => {
      if (!process.env[requiredCredential]) {
        reject(
          Error(
            `Missing mandatory environment variable: ${requiredCredential}.`
          )
        );
      }
    });
    apiUrl = `https://api.cloudflare.com/client/v4/accounts/${
      process.env["CF_ACCOUNT_ID"]
    }/workers/scripts/${process.env["SCRIPT_NAME"]}`;
  }
  const response = await fetch(apiUrl, {
    method: "PUT",
    body: scriptContents,
    headers: headers
  });
  const responseJson = await response.json();
  if (!responseJson["success"]) {
    reject(Error(JSON.stringify(responseJson["errors"])));
  }
  console.log("Successfully deployed script with resource bindings");
};
