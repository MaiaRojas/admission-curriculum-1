# Admission Curriculum

This repository holds the topics required for the admission process in spanish and portuguese.

## Install

`npm install`

---
## Set Typeform IDs

_Note:_ Before going ahead, have a look at [the admission documentation about typeform](https://github.com/Laboratoria/admission.laboratoria.la#typeform)

1. Copy `.typeformrc.example` file to `.typeformrc`
2. Add all typeform ids inside `.typeformrc` file according the language and environment.

The Typeform ids _required_ are:

```json
  "TYPEFORM_ID_BASE_LINE_QUESTIONNAIRE": "your-typeformid",
  "TYPEFORM_ID_TESTS_READING": "your-typeformid",
  "TYPEFORM_ID_TESTS_LOGIC": "your-typeformid",
  "TYPEFORM_ID_TESTS_PERSONALITY": "your-typeformid",
```

> **Heads-up:** There are three environments available (development, staging and production) for different purposes and two languages (es-ES, pt-BR), make sure you are setting up the right ones.

---
## Build 🏗

> **Important:** Make sure you are building the right content for your environment and language

You can pass 2 environment variables: `env`, `locale`

**`env`** : `development`, `staging`, `production`
**`locale`**: `es-ES`, `pt-BR`

By default `locale` takes the value `es-ES`

**For instance:**

`npm run build -- --env=production --locale=pt-BR`

The final content will be saved in `build/admission-pt.json` file

---
## Testing 🧪

- To validate the course content `npm run validate`
- To run markdown linter `npm run mdlint`
- To run tests and pretest `npm run test`

---
## Upload 🚀

Once the topic is built, the next step is creating a new topic by making a request to Laboratoria API so that the new topic is available to be used by any cohort. You can use any HTTP Client tool, e.g. [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/), or if you love cli tools 🤟, I recommend using [httpie](https://httpie.io/)

_Note:_ The endpoint to create new topics requires authentication as well as the admin role. So, you should get an auth token before.

__Example using httpie__

```sh
# Authenticate to get a JWT (Json Web Token)
http POST http://api.laboratoria.la/auth email=myemail@testing.com password=xxxxxxx
```

```sh
# Upload a built topic
 http POST https://api.laboratoria.la/topics 'Authorization:Bearer <token>' < ./build/admission.json
```
