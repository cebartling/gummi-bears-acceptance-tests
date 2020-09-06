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


