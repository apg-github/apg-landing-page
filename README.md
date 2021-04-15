# apg-landing-page

## Live demo: https://apg-landing-page.netlify.app/

Landing page is a preview of some imaginary company site which offer travelling and bussiness runs all over the planet.

Page is responsive and mobile friendly.

Images are fetched from external API, to make site look different every time. In case of error there is default image that becomes rendered.

Contact form is connected with netlify and allows to send the message to site administrator. Form also implements validation of fields.

Site uses webpack to bundle files into one file.

To launch site locally, clone repository and:
``` 
npm install
```
```
npm run build 
```
```
npm run start
``` 

## api used:
* https://picsum.photos/600/480 to fetch images
