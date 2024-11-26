/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
  /**
   * User signup
   * @param requestBody
   * @returns any User created successfully
   * @throws ApiError
   */
  public static postApiAuthSignup(requestBody: {
    email?: string;
    password?: string;
    retry_password?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/auth/signup',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    });
  }
  /**
   * User login
   * @param requestBody
   * @returns any Login successful
   * @throws ApiError
   */
  public static postApiAuthLogin(requestBody: {
    email?: string;
    password?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/auth/login',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
