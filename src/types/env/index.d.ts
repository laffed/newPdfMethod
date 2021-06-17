declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT: string;
    S3_BUCKET: string;
    S3_REGION: string;
    S3_ACCESS_KEY: string;
    S3_SECRET_KEY: string;
    SELF_API_KEY: string;
    CNC_URL: string;
  }
}

