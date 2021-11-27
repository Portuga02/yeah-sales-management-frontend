import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";

import { StorageService } from "./storage.service";

import { CartService } from "./domain/cart.service";

@Injectable()
export class AuthService {



    constructor(
        public http: HttpClient,
        public storage: StorageService,
        public cartService: CartService) {
    }

    authenticate(creds: CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseURl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }



    logout() {
        this.storage.setLocalUser(null);
    }
}