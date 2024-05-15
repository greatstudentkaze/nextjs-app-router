'use client' // Error components must be Client Components

import { useEffect } from 'react';

// digest – Critical server error
// no digest – Critical client error

// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#report-react-component-render-errors
// just captureException, no captureUnderscoreErrorException

// location.pathname?

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
      console.log('----')
      console.dir(error);
    console.error(error);
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
