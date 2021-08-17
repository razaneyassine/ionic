import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

// const express = require('express');
// const cors = require('cors');
// const app = express();

// const allowedOrigins = [
//   'capacitor://localhost',
//   'ionic://localhost',
//   'http://localhost',
//   'http://localhost:8080',
//   'http://localhost:8100'
// ];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Origin not allowed by CORS'));
//     }
//   }
// };

// const req='https://bcc4677346426e146a6e0c63d4730dc5:'+
// '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@razanes-store.myshopify.com/admin/api/2021-07/products.json';

// app.options('*', cors(corsOptions));
export class HomePage {

  constructor(private http: HttpClient) {}



  runHttp(){
    // app.get('/', cors(corsOptions), (req, res, next) => {
    //   res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
    // });
  }


}
