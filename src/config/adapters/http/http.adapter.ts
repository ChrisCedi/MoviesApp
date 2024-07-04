export abstract class HttpAdapter {
  abstract get<T>(url: String, options?: Record<string, unknown>): Promise<T>;
}
