# gummi-bears-acceptance-tests
Acceptance tests for Gummi Bears!

## Environment configuration

This acceptance test suite uses `dotenv` for managing environment variables. 
This support requires that you drop a `.env` file with the following contents in 
to the repository root directory.

```dotenv
DATABASE=xxxxxx
DB_HOSTNAME=ec2-xx-xx-xx-xx.compute-1.amazonaws.com
DB_USERNAME=xxxxxx
DB_PASSWORD=xxxxxxx
WEBAPP_URL=xxxxx
HEADLESS=false
```

## Running the test suite

Running the test suite is as easy as `npm test` or `yarn test`. This will kick off 
Cucumber and execute all the feature files that it finds. 

## Generating the test results report

When the test suite runs, it generates a `cucumber_report.json` file with the execution
results. Running `npm run test:report` or `yarn test:report` will generate an HTML report
from the JSON test results and open a browser for you to view the results.
