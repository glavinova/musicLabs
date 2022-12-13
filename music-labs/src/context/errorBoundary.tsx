function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert">
      <p data-testid="errorboundary">Something went wrong.</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
export const myErrorHandler = (error: Error, info: { componentStack: string }) => {
  console.log(error);
  console.log(info);
};
export default ErrorFallback;
