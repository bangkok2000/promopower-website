declare global {
  interface Fetcher {
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
  }

  /** Subset of the Workers KV API used by the admin portal. */
  interface KVNamespace {
    get(key: string, type: "text"): Promise<string | null>;
    get<T>(key: string, type: "json"): Promise<T | null>;
    getWithMetadata<M>(
      key: string,
      type: "stream",
    ): Promise<{ value: ReadableStream | null; metadata: M | null }>;
    getWithMetadata<M>(key: string, type: "text"): Promise<{ value: string | null; metadata: M | null }>;
    put(
      key: string,
      value: string | ArrayBuffer | ReadableStream,
      options?: { expirationTtl?: number; metadata?: unknown },
    ): Promise<void>;
    delete(key: string): Promise<void>;
    list<M>(options?: { prefix?: string; cursor?: string }): Promise<{
      keys: { name: string; metadata?: M }[];
      list_complete: boolean;
      cursor?: string;
    }>;
  }

  interface SubtleCrypto {
    timingSafeEqual(a: ArrayBuffer | ArrayBufferView, b: ArrayBuffer | ArrayBufferView): boolean;
  }
}

export {};
